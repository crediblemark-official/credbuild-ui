import React, { useEffect, useState, useId } from "react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { ProductCard } from "./ProductCard";
import type { ProductListProps, Product } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const ProductListRender = ({ 
    content,
    typography,
    styling,
    initialProducts = []
}: ProductListProps) => {
    const { 
        title, 
        description, 
        limit = 4,
        categorySlug = "",
        sortBy = "newest",
        showRating = true,
        showStock = true,
        showBadges = true,
        showTitleAccent = true,
        actionType = "details"
    } = content;

    const { 
        titleFont = 'inherit', 
        bodyFont = 'inherit', 
        titleColor = '#111827', 
        descriptionColor = '#4b5563' 
    } = typography;

    const { 
        columns, 
        backgroundColor = "#ffffff",
        cardBorderRadius = "lg",
        cardShadow = "hover-only",
        accentColor = "#10b981",
        priceColor = "#047857",
        cardBackgroundColor = "#ffffff",
        cardBorderColor = "#e4e4e7",
        cardTitleColor = "#1f2937",
        showCardBorder = true,
        imageAspectRatio = "aspect-[4/5]",
        imageFit = "cover",
        padding
    } = styling;

    const id = "product-list-" + useId().replace(/:/g, "");
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [loading, setLoading] = useState(initialProducts.length === 0);
    const _mounted = useHasMounted();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products");
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data.products || []);
                }
            } catch (e) {
                console.error("Failed to fetch products", e);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Process filtering client-side
    let processedProducts = [...products];
    
    if (categorySlug && categorySlug.trim() !== "") {
        processedProducts = processedProducts.filter(p => 
            p.terms?.some(term => term.slug.toLowerCase() === categorySlug.trim().toLowerCase())
        );
    }

    // Process sorting client-side
    processedProducts.sort((a, b) => {
        if (sortBy === "price-asc") {
            return Number(a.price) - Number(b.price);
        }
        if (sortBy === "price-desc") {
            return Number(b.price) - Number(a.price);
        }
        if (sortBy === "stock-desc") {
            return b.stock - a.stock;
        }
        // Default to newest
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
    });

    const displayedProducts = processedProducts.slice(0, limit);

    return (
        <section className={id} style={{ backgroundColor: backgroundColor, fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${getVal(padding, 64)}px;
                    padding-bottom: ${getVal(padding, 64)}px;
                }
                .${id}-grid {
                    display: grid;
                    gap: 24px;
                    grid-template-columns: repeat(${getMobileVal(columns, 1)}, minmax(0, 1fr));
                }
                @media (min-width: 768px) {
                    .${id} {
                        padding-top: ${getTabletVal(padding, 48)}px;
                        padding-bottom: ${getTabletVal(padding, 48)}px;
                    }
                    .${id}-grid {
                        grid-template-columns: repeat(${getTabletVal(columns, 2)}, minmax(0, 1fr));
                    }
                }
                @media (min-width: 1024px) {
                    .${id} {
                        padding-top: ${getVal(padding, 64)}px;
                        padding-bottom: ${getVal(padding, 64)}px;
                    }
                    .${id}-grid {
                        grid-template-columns: repeat(${getVal(columns, 4)}, minmax(0, 1fr));
                    }
                }
            `}} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-12 text-center">
                    {title && (
                        <h2 
                            className="text-3xl font-extrabold tracking-tight mb-3" 
                            style={{ 
                                color: titleColor,
                                fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'
                            }}
                        >
                            {title}
                        </h2>
                    )}
                    {title && showTitleAccent !== false && (
                        <div className="h-1 w-12 rounded-full mb-4" style={{ backgroundColor: accentColor }} />
                    )}
                    {description && (
                        <p 
                            className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                            style={{ color: descriptionColor }}
                        >
                            {description}
                        </p>
                    )}
                </div>

                {loading && displayedProducts.length === 0 ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                    </div>
                ) : displayedProducts.length === 0 ? (
                    <div className="text-center py-12 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
                        <p className="text-zinc-500 dark:text-zinc-400">No products found.</p>
                    </div>
                ) : (
                    <div className={`${id}-grid`}>
                        {displayedProducts.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product}
                                showRating={showRating}
                                showStock={showStock}
                                showBadges={showBadges}
                                actionType={actionType}
                                cardBorderRadius={cardBorderRadius}
                                cardShadow={cardShadow}
                                accentColor={accentColor}
                                priceColor={priceColor}
                                cardBackgroundColor={cardBackgroundColor}
                                cardBorderColor={cardBorderColor}
                                cardTitleColor={cardTitleColor}
                                showCardBorder={showCardBorder}
                                imageAspectRatio={imageAspectRatio}
                                imageFit={imageFit}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

