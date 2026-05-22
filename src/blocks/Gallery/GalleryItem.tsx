import React from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";

interface GalleryItemProps {
    item: { title: string; url: string; description: string };
    variant: "red" | "white" | "theme";
    paddingBottom: string;
    fit: "cover" | "contain";
    borderRadius?: string;
    isFlex?: boolean;
    onClick?: () => void;
}

export const GalleryItem = ({ item, variant, paddingBottom, fit, borderRadius, isFlex, onClick }: GalleryItemProps) => {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: variant === "red" ? "rgba(153, 27, 27, 0.4)" : variant === "theme" ? "var(--primary)" : "#ffffff",
                borderRadius: borderRadius || '16px',
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                border: variant === "red" ? '1px solid rgba(255, 255, 255, 0.1)' : variant === "theme" ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: (variant === "red" || variant === "theme") ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                ...(isFlex && {
                    flexShrink: 0,
                    width: 'clamp(280px, 85vw, 400px)',
                    scrollSnapAlign: 'center',
                })
            }}
            className="group hover:scale-[1.02] hover:shadow-2xl"
        >
            <div style={{
                width: '100%',
                paddingTop: paddingBottom,
                backgroundColor: variant === "red" ? "#7f1d1d" : variant === "theme" ? "rgba(0,0,0,0.1)" : "#f1f5f9",
                position: 'relative',
                overflow: 'hidden'
            }}>
                {item.url ? (
                    <Image
                        src={getProxiedUrl(item.url)}
                        alt={item.title || "Gallery Image"}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className={`object-${fit} transition-transform duration-700 group-hover:scale-110`}
                    />
                ) : (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        opacity: 0.5,
                    }}>
                        🖼️
                    </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div style={{ 
                padding: '16px',
                textAlign: 'center',
                background: variant === "red" ? 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' : 'transparent'
            }}>
                <p style={{ 
                    fontWeight: '700', 
                    fontSize: '0.9rem',
                    color: (variant === "red" || variant === "theme") ? 'white' : '#1e293b',
                    margin: 0,
                    letterSpacing: '-0.01em'
                }}>
                    {item.title || "Untitled"}
                </p>
                {item.description && (
                    <p style={{
                        fontSize: '0.75rem',
                        color: (variant === "red" || variant === "theme") ? 'rgba(255,255,255,0.6)' : '#475569',
                        marginTop: '4px',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {item.description}
                    </p>
                )}
            </div>
        </div>
    );
};
