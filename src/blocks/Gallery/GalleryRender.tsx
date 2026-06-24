"use client";

import React, { useState, useId } from "react";
import { GalleryItem } from "./GalleryItem";
import type { GalleryProps } from "./types";
import Portal from "@/components/ui/Portal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getProxiedUrl } from "@/lib/media/utils";
import Image from "next/image";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const GalleryRender = ({
    content,
    typography,
    styling,
    initialItems
}: GalleryProps) => {
    const { title, description } = content;
    const { titleFont = 'inherit', titleColor } = typography;
    const {
        variant, scrollMode, columnsDesktop, columnsTablet, columnsMobile, columns,
        backgroundColor, aspectRatio, imageFit, gap, borderRadius, padding
    } = styling;
    
    const id = "gallery-" + useId().replace(/:/g, "");
    const [items, setItems] = useState<{ title: string; url: string; description: string }[]>(initialItems || []);
    const [loading, setLoading] = useState(!initialItems);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    React.useEffect(() => {
        if (initialItems && initialItems.length > 0) {
            return;
        }

        fetch("/api/gallery")
            .then(res => res.json())
            .then(resData => {
                const actualData = resData.data || resData;
                setItems(Array.isArray(actualData) ? actualData : []);
                setLoading(false);
            })
            .catch(() => {
                setItems([]);
                setLoading(false);
            });
    }, [initialItems]);

    const nextImage = React.useCallback(() => {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % items.length : null));
    }, [items.length]);

    const prevImage = React.useCallback(() => {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
    }, [items.length]);

    // Keyboard Navigation for Lightbox
    React.useEffect(() => {
        if (selectedIdx === null) return;
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedIdx(null);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIdx, nextImage, prevImage]);

    const isHorizontal = scrollMode === "horizontal";
    const isMasonry = scrollMode === "masonry";

    const defaultBg = variant === "red" ? "#7f1d1d" : variant === "theme" ? "white" : "#ffffff";
    const finalBg = backgroundColor || defaultBg;

    let paddingBottom = "140%"; // Default Portrait
    if (aspectRatio === "square") paddingBottom = "100%";
    if (aspectRatio === "landscape") paddingBottom = "75%";
    if (aspectRatio === "video") paddingBottom = "56.25%";
    if (aspectRatio === "original") paddingBottom = "0"; // For Masonry

    const fit = imageFit || "cover";

    // Backwards Compatibility mapping for columns, padding, gap, and border radius
    const colDesktop = getVal(columns, columnsDesktop || 5);
    const colTablet = getTabletVal(columns, columnsTablet || 3);
    const colMobile = getMobileVal(columns, columnsMobile || 2);

    const gapDesktop = getVal(gap, 24);
    const gapTablet = getTabletVal(gap, 16);
    const gapMobile = getMobileVal(gap, 12);

    const radiusDesktop = getVal(borderRadius, 16);
    const radiusTablet = getTabletVal(borderRadius, 16);
    const radiusMobile = getMobileVal(borderRadius, 8);

    const padDesktop = getVal(padding, 80);
    const padTablet = getTabletVal(padding, 60);
    const padMobile = getMobileVal(padding, 40);

    if (loading) return (
        <div className="py-20 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-sm font-bold text-muted-foreground animate-pulse">MEMUAT GALERI...</p>
        </div>
    );
    
    if (items.length === 0) return (
        <div className="py-20 text-center text-gray-400 border-2 border-dashed border-border/50 rounded-2xl mx-4">
            No images found. Please add them in the Dashboard.
        </div>
    );

    return (
        <section className={id} style={{
            backgroundColor: finalBg,
            color: (variant === "red" || variant === "theme") ? "inherit" : "#1e293b",
            position: 'relative',
            overflow: 'hidden'
        }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${padDesktop}px;
                    padding-bottom: ${padDesktop}px;
                }
                .${id} .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(${colMobile}, 1fr);
                    gap: ${gapMobile}px;
                }
                .${id} .gallery-masonry {
                    columns: ${colMobile};
                    column-gap: ${gapMobile}px;
                }
                .${id} .gallery-masonry > div {
                    margin-bottom: ${gapMobile}px;
                    break-inside: avoid;
                }
                .${id} .gallery-grid > div, .${id} .gallery-masonry > div, .${id} .no-scrollbar > div > div {
                    border-radius: ${radiusMobile}px !important;
                }
                @media (min-width: 768px) {
                    .${id} {
                        padding-top: ${padTablet}px;
                        padding-bottom: ${padTablet}px;
                    }
                    .${id} .gallery-grid {
                        grid-template-columns: repeat(${colTablet}, 1fr);
                        gap: ${gapTablet}px;
                    }
                    .${id} .gallery-masonry {
                        columns: ${colTablet};
                        column-gap: ${gapTablet}px;
                    }
                    .${id} .gallery-masonry > div {
                        margin-bottom: ${gapTablet}px;
                    }
                    .${id} .gallery-grid > div, .${id} .gallery-masonry > div, .${id} .no-scrollbar > div > div {
                        border-radius: ${radiusTablet}px !important;
                    }
                }
                @media (min-width: 1024px) {
                    .${id} {
                        padding-top: ${padDesktop}px;
                        padding-bottom: ${padDesktop}px;
                    }
                    .${id} .gallery-grid {
                        grid-template-columns: repeat(${colDesktop}, 1fr);
                        gap: ${gapDesktop}px;
                    }
                    .${id} .gallery-masonry {
                        columns: ${colDesktop};
                        column-gap: ${gapDesktop}px;
                    }
                    .${id} .gallery-masonry > div {
                        margin-bottom: ${gapDesktop}px;
                    }
                    .${id} .gallery-grid > div, .${id} .gallery-masonry > div, .${id} .no-scrollbar > div > div {
                        border-radius: ${radiusDesktop}px !important;
                    }
                }
                .${id} .no-scrollbar::-webkit-scrollbar { display: none; }
            `}} />

            {/* Background Decoration */}
            {variant === "red" && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-black/20 blur-[120px] rounded-full"></div>
                </div>
            )}

            <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1280px', position: 'relative' }}>
                <div className="flex flex-col items-center mb-16 text-center">
                    <div style={{ 
                        width: '60px', 
                        height: '4px', 
                        backgroundColor: (variant === "red" || variant === "theme") ? 'var(--primary)' : '#0ea5e9',
                        marginBottom: '24px',
                        borderRadius: '2px'
                    }}></div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                        fontWeight: '900',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        color: titleColor || 'inherit',
                        fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit',
                        margin: 0,
                        textTransform: 'uppercase'
                    }}>
                        {title}
                    </h2>
                    {description && (
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: variant === "red" ? 'rgba(255,255,255,0.7)' : '#475569',
                            marginTop: '20px',
                            maxWidth: '700px',
                            lineHeight: 1.6,
                            fontWeight: '500'
                        }}>
                            {description}
                        </p>
                    )}
                </div>

                {isHorizontal ? (
                    <div style={{
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        paddingBottom: '20px',
                        marginLeft: '-20px',
                        marginRight: '-20px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                    }} className="no-scrollbar">
                        <div style={{
                            display: 'flex',
                            gap: `${gapMobile}px`,
                            minWidth: 'min-content',
                            margin: '0 auto',
                            justifyContent: 'center'
                        }}>
                            {items.map((item, i) => (
                                <GalleryItem 
                                    key={i} 
                                    item={item} 
                                    variant={variant} 
                                    paddingBottom={paddingBottom} 
                                    fit={fit} 
                                    isFlex 
                                    onClick={() => setSelectedIdx(i)}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="gallery-container">
                        <div className={isMasonry ? "gallery-masonry" : "gallery-grid"}>
                            {items.map((item, i) => (
                                <GalleryItem 
                                    key={i} 
                                    item={item} 
                                    variant={variant} 
                                    paddingBottom={isMasonry ? "0" : paddingBottom} 
                                    fit={isMasonry ? "contain" : fit} 
                                    onClick={() => setSelectedIdx(i)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedIdx !== null && (
                <Portal>
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
                        {/* Background Click to Close — letakkan pertama agar tombol di atasnya */}
                        <div className="absolute inset-0 z-[10000]" onClick={() => setSelectedIdx(null)}></div>

                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedIdx(null)}
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[10002]"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation */}
                        <button 
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-6 w-14 h-14 hidden md:flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-[10002]"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button 
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-6 w-14 h-14 hidden md:flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-[10002]"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Main Image — z di atas backdrop tapi di bawah tombol */}
                        <div className="relative w-[90vw] h-[80vh] flex flex-col items-center justify-center z-[10001]" onClick={(e) => e.stopPropagation()}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={getProxiedUrl(items[selectedIdx].url)}
                                    alt={items[selectedIdx].title || "Gallery"}
                                    fill
                                    sizes="100vw"
                                    className="object-contain animate-in zoom-in-95 duration-500"
                                />
                            </div>
                            
                            {/* Info */}
                            <div className="mt-8 text-center max-w-2xl px-4 animate-in slide-in-from-bottom-4 duration-700">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{items[selectedIdx].title}</h3>
                                {items[selectedIdx].description && (
                                    <p className="text-white/60 mt-2 text-sm leading-relaxed">{items[selectedIdx].description}</p>
                                )}
                                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                    {selectedIdx + 1} / {items.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>

            )}
        </section>
    );
};

