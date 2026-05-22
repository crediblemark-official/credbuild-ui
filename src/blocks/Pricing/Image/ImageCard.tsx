import React from "react";
import Image from "next/image";
import type { PricingImageItem } from "./types";

interface ImagePricingCardProps {
    item: PricingImageItem;
    isHorizontal: boolean;
    cardRadius?: number;
    cardAspectRatio?: string;
    cardObjectFit?: "cover" | "contain";
    cardShadow?: "none" | "sm" | "md" | "lg";
    hoverLift?: number;
}

export const ImagePricingCard = ({
    item,
    isHorizontal,
    cardRadius = 16,
    cardAspectRatio = "2/3",
    cardObjectFit = "cover",
    cardShadow = "none",
    hoverLift = 6
}: ImagePricingCardProps) => {
    const Wrapper = item.link ? 'a' : 'div';
    const wrapperProps = item.link ? { href: item.link } : {};

    const shadows = {
        none: 'none',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
    };

    return (
        <Wrapper
            {...wrapperProps as any}
            className="pricing-image-card"
            style={{
                display: 'block',
                borderRadius: `${cardRadius}px`,
                overflow: 'hidden',
                cursor: item.link ? 'pointer' : 'default',
                transition: 'transform 0.3s, box-shadow 0.3s',
                textDecoration: 'none',
                position: 'relative',
                boxShadow: shadows[cardShadow],
                ...(isHorizontal && {
                    flexShrink: 0,
                    width: 'clamp(260px, 35vw, 350px)',
                    scrollSnapAlign: 'start',
                }),
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = `translateY(-${hoverLift}px)`;
                if (cardShadow === 'none') {
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = shadows[cardShadow];
            }}
        >
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                aspectRatio: cardAspectRatio === 'auto' ? 'unset' : cardAspectRatio,
            }}>
                {item.imageUrl ? (
                    <Image
                        src={item.imageUrl}
                        alt={item.altText || "Pricing Package"}
                        fill={cardAspectRatio !== 'auto'}
                        width={cardAspectRatio === 'auto' ? 800 : undefined}
                        height={cardAspectRatio === 'auto' ? 800 : undefined}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={cardObjectFit === 'cover' ? 'object-cover' : 'object-contain'}
                        style={cardAspectRatio === 'auto' ? { width: '100%', height: 'auto', display: 'block' } : {}}
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-6 text-center text-slate-400" style={cardAspectRatio === 'auto' ? { width: '100%', height: '250px' } : { position: 'absolute', inset: 0 }}>
                        <span className="text-4xl mb-2">📷</span>
                        <p className="text-xs font-semibold">Gambar Paket Kosong</p>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};
