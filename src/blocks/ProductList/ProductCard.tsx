import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Star, Eye } from "lucide-react";
import type { Product } from "./types";
import { useCurrency } from "@/hooks/use-currency";

interface ProductCardProps {
    product: Product;
    showRating?: boolean;
    showStock?: boolean;
    showBadges?: boolean;
    actionType?: 'details' | 'none';
    cardBorderRadius?: 'none' | 'md' | 'lg' | 'xl' | '2xl';
    cardShadow?: 'none' | 'sm' | 'md' | 'lg' | 'hover-only' | 'always-sm' | 'always-md' | 'always-lg';
    accentColor?: string;
    priceColor?: string;
    cardBackgroundColor?: string;
    cardBorderColor?: string;
    cardTitleColor?: string;
    showCardBorder?: boolean;
    imageAspectRatio?: 'aspect-[4/5]' | 'aspect-[2/3]' | 'aspect-[1/1]' | 'aspect-[16/9]';
    imageFit?: 'cover' | 'contain';
}

export const ProductCard = ({ 
    product,
    showRating = true,
    showStock = true,
    showBadges = true,
    actionType = "details",
    cardBorderRadius = "lg",
    cardShadow = "hover-only",
    accentColor = "#10b981",
    priceColor = "#047857",
    cardBackgroundColor = "#ffffff",
    cardBorderColor = "#e4e4e7",
    cardTitleColor = "#1f2937",
    showCardBorder = true,
    imageAspectRatio = "aspect-[4/5]",
    imageFit = "cover"
}: ProductCardProps) => {
    const { formatPrice } = useCurrency();
    const hasStock = product.stock > 0;

    const borderRadiusClasses = {
        none: "rounded-none",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl"
    };
    const radiusClass = borderRadiusClasses[cardBorderRadius] || "rounded-2xl";

    const shadowClasses = {
        none: "shadow-none",
        sm: "shadow-sm hover:shadow-md",
        md: "shadow-md hover:shadow-lg",
        lg: "shadow-lg hover:shadow-2xl",
        "hover-only": "shadow-none hover:shadow-xl",
        "always-sm": "shadow-sm hover:shadow-sm",
        "always-md": "shadow-md hover:shadow-md",
        "always-lg": "shadow-lg hover:shadow-lg"
    };
    const shadowClass = shadowClasses[cardShadow] || "shadow-none hover:shadow-xl";

    const borderClass = showCardBorder !== false ? "border" : "border-0";
    const aspectClass = imageAspectRatio || "aspect-[4/5]";
    const fitClass = imageFit === "contain" ? "object-contain" : "object-cover";

    return (
        <div 
            className={`group relative overflow-hidden transition-all duration-300 flex flex-col h-full ${borderClass} ${radiusClass} ${shadowClass}`}
            style={{ 
                backgroundColor: cardBackgroundColor, 
                borderColor: cardBorderColor 
            }}
        >
            {/* Image Section */}
            <div className={`${aspectClass} relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 flex-shrink-0`}>
                {product.images && product.images[0] ? (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={`${fitClass} group-hover:scale-105 transition-transform duration-700 ease-out`}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-700">
                        <ShoppingCart size={40} className="stroke-[1.5]" />
                    </div>
                )}

                {/* Floating Badges */}
                {showBadges && (
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                        {hasStock && product.stock <= 5 && (
                            <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-white rounded-md shadow-sm">
                                Limited
                            </span>
                        )}
                        {!hasStock && (
                            <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-rose-500 text-white rounded-md shadow-sm">
                                Sold Out
                            </span>
                        )}
                    </div>
                )}

                {/* Premium Hover Overlay */}
                {actionType === "details" && (
                    <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <Link 
                            href={`/products/${product.slug}`} 
                            className="font-semibold py-2.5 px-5 rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all text-xs flex items-center gap-2 border border-white/20"
                            style={{ backgroundColor: accentColor, color: "#ffffff" }}
                        >
                            <Eye size={14} className="stroke-[2.5]" />
                            Lihat Detail
                        </Link>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Micro Label */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 block">
                    {hasStock ? "Koleksi Unggulan" : "Arsip Produk"}
                </span>
                
                {/* Title */}
                <h3 
                    className="font-semibold mb-2 line-clamp-2 transition-colors duration-200 text-sm leading-snug"
                    style={{ color: cardTitleColor }}
                >
                    <Link 
                        href={`/products/${product.slug}`}
                        className="hover:opacity-85 transition-opacity"
                        style={{ color: 'inherit' }}
                    >
                        {product.name}
                    </Link>
                </h3>

                {/* Rating Stars */}
                {showRating && (
                    <div className="flex items-center gap-0.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 ml-1.5 font-medium">(5.0)</span>
                    </div>
                )}

                {/* Footer Info: Price & Stock Status */}
                <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">Harga</span>
                        <span className="text-base font-extrabold tracking-tight" style={{ color: priceColor }}>
                            {formatPrice(product.price)}
                        </span>
                    </div>

                    {showStock && (
                        <div className="flex items-center gap-1.5">
                            <span 
                                className={`h-1.5 w-1.5 rounded-full ${hasStock ? 'animate-pulse' : ''}`} 
                                style={{ backgroundColor: hasStock ? accentColor : '#f43f5e' }}
                            />
                            <span 
                                className="text-[10px] font-bold tracking-wide uppercase"
                                style={{ color: hasStock ? accentColor : '#f43f5e' }}
                            >
                                {hasStock ? 'Tersedia' : 'Habis'}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
