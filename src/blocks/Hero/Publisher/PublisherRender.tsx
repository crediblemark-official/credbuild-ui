import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroPublisherProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroPublisherRender = ({
    content,
    media,
    typography,
    styling
}: HeroPublisherProps) => {
    const { title, description, date, author } = content;
    const { imageUrl } = media;

    const {
        titleFont, titleSize, titleWeight, subtitleFont, subtitleSize
    } = typography;

    const {
        backgroundColor, textColor, paddingTop, paddingBottom
    } = styling;

    const id = "publisher-" + useId().replace(/:/g, "");
    const getVal = (obj: ResponsiveValue | undefined, key: 'desktop' | 'tablet' | 'mobile') => {
        if (typeof obj === 'number') return obj;
        return obj?.[key] ?? obj?.desktop ?? 0;
    };

    return (
        <section className={id} style={{ backgroundColor, color: textColor }} suppressHydrationWarning>
            <style dangerouslySetInnerHTML={{
                __html: `
            .${id} {
                padding-top: ${getVal(paddingTop, 'desktop')}px;
                padding-bottom: ${getVal(paddingBottom, 'desktop')}px;
                padding-left: 20px;
                padding-right: 20px;
            }
            .${id} .grid {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                align-items: center;
            }
            .${id} h1 { font-size: ${getVal(titleSize, 'desktop')}rem; }
            .${id} p { font-size: ${getVal(subtitleSize, 'desktop')}rem; }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 { font-size: ${getVal(titleSize, 'tablet')}rem; }
                .${id} p { font-size: ${getVal(subtitleSize, 'tablet')}rem; }
            }

            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'mobile')}px;
                    padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                    padding-left: 24px;
                    padding-right: 24px;
                }
                .${id} h1 { 
                    font-size: ${getVal(titleSize, 'mobile')}rem;
                    line-height: 1.2;
                    margin-bottom: 16px;
                }
                .${id} p { 
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                    line-height: 1.7;
                    margin-bottom: 24px;
                }
                .${id} .grid { 
                    grid-template-columns: 1fr !important;
                    gap: 32px !important;
                }
                .${id} .grid > div:nth-child(2) {
                    order: -1;
                }
                .${id} .grid > div:nth-child(2) img {
                    max-height: 400px;
                    object-fit: cover;
                }
                .${id} .grid > div:first-child > div:first-child {
                    margin-bottom: 12px;
                    font-size: 0.85rem;
                    justify-content: center;
                }
                .${id} .grid > div:first-child {
                    text-align: center;
                }
                .${id} .grid > div:first-child svg {
                    margin: 0 auto;
                }
                .${id} .image-container {
                    max-height: 400px;
                }
            }
`}} />
            <div className="grid">
                <div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: textColor, opacity: 0.7, marginBottom: '16px', fontFamily: subtitleFont }}>
                        <span>{date}</span> • <span>{author}</span>
                    </div>
                    <h1 style={{
                        fontFamily: titleFont, fontWeight: titleWeight, lineHeight: '1.2', marginBottom: '24px', margin: 0
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        fontFamily: subtitleFont, lineHeight: '1.6', opacity: 0.9, marginBottom: '32px'
                    }}>
                        {description}
                    </p>

                    <svg width="100" height="10" viewBox="0 0 100 10" fill="none" style={{ display: 'block' }}>
                        <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke={textColor} strokeWidth="2" fill="none" />
                    </svg>
                </div>
                <div className="image-container" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }}>
                    <Image 
                        src={getProxiedUrl(imageUrl, { q: 75 })} 
                        alt="Hero" 
                        fill 
                        priority={true}
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover" 
                    />
                </div>
            </div>
        </section>
    );
};
