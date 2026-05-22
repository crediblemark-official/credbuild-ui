import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroAutoServiceProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroAutoServiceRender = ({
    content,
    media,
    typography,
    styling
}: HeroAutoServiceProps) => {
    const {
        title, highlightText, bulletPoints, ctaText, ctaLink, secondaryButtonText
    } = content;

    const { imageUrl } = media;

    const {
        titleSize, titleWeight, bulletSize
    } = typography;

    const {
        backgroundColor, primaryColor, textColor, bulletColor, secondaryBtnColor,
        btnRadius, imageRadius,
        gap, paddingTop, paddingBottom, btnPaddingHorizontal, btnPaddingVertical
    } = styling;

    const id = "auto-service-" + useId().replace(/:/g, "");

    const getVal = (obj: ResponsiveValue | undefined, key: 'desktop' | 'tablet' | 'mobile') => {
        if (typeof obj === 'number') return obj;
        if (key === 'mobile' && obj && !obj.mobile && obj.desktop) {
            return (obj.desktop as number) * 0.6;
        }
        if (key === 'tablet' && obj && !obj.tablet && obj.desktop) {
            return (obj.desktop as number) * 0.8;
        }
        return obj?.[key] ?? obj?.desktop ?? 0;
    };

    return (
        <section className={id} style={{ backgroundColor, color: textColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
            .${id} {
                padding-top: ${getVal(paddingTop, 'desktop')}px;
                padding-bottom: ${getVal(paddingBottom, 'desktop')}px;
                padding-left: 20px;
                padding-right: 20px;
                overflow-x: hidden;
            }
            .${id} .container {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: ${getVal(gap, 'desktop')}px;
                align-items: center;
            }
            .${id} h1 {
                font-size: ${getVal(titleSize, 'desktop')}rem;
                font-weight: ${titleWeight};
                line-height: 1.1;
                margin-bottom: 2rem;
                color: ${textColor};
            }
            .${id} .highlight {
                color: ${primaryColor};
            }
            .${id} .bullet-list {
                margin-bottom: 2.5rem;
            }
            .${id} .bullet-item {
                display: flex;
                gap: 12px;
                margin-bottom: 16px;
            }
            .${id} .bullet-icon {
                color: ${primaryColor};
                font-size: 1.5rem;
                flex-shrink: 0;
            }
            .${id} .bullet-text {
                font-size: ${getVal(bulletSize, 'desktop')}rem;
                color: ${bulletColor};
                line-height: 1.6;
                margin: 0;
            }
            .${id} .button-group {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
            }
            .${id} .btn-primary {
                display: inline-block;
                background-color: ${primaryColor};
                color: #0d1b2a;
                padding: ${btnPaddingVertical} ${btnPaddingHorizontal};
                border-radius: ${btnRadius}px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
                border: none;
                cursor: pointer;
                transition: opacity 0.3s;
            }
            .${id} .btn-secondary {
                background-color: transparent;
                color: ${secondaryBtnColor};
                padding: ${btnPaddingVertical} ${btnPaddingHorizontal};
                border-radius: ${btnRadius}px;
                border: 2px solid ${secondaryBtnColor};
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
            }
            .${id} .image-container {
                position: relative;
                aspect-ratio: 4/3;
                background-color: ${primaryColor}15;
                border-radius: ${imageRadius}px;
                overflow: hidden;
            }
            .${id} .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .${id} .image-placeholder {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                font-size: 5rem;
            }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} .container {
                     gap: ${getVal(gap, 'tablet')}px;
                }
                .${id} h1 {
                    font-size: ${getVal(titleSize, 'tablet')}rem;
                }
                .${id} .btn-primary,
                .${id} .btn-secondary {
                    font-size: 0.95rem;
                }
            }

            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'mobile')}px;
                    padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                    padding-left: 24px;
                    padding-right: 24px;
                }
                .${id} .container {
                    grid-template-columns: 1fr;
                    gap: ${getVal(gap, 'mobile') || 40}px;
                }
                .${id} .container > div:nth-child(2) {
                    order: -1;
                }
                .${id} h1 {
                    font-size: clamp(2rem, ${getVal(titleSize, 'mobile')}rem, 3rem);
                    text-align: center;
                    line-height: 1.2;
                    word-break: break-word;
                }
                .${id} .bullet-list {
                    margin-bottom: 2rem;
                }
                .${id} .bullet-item {
                    align-items: flex-start;
                }
                .${id} .bullet-text {
                    font-size: ${getVal(bulletSize, 'mobile')}rem;
                    line-height: 1.7;
                }
                .${id} .button-group {
                    flex-direction: column;
                    width: 100%;
                    gap: 12px;
                }
                .${id} .btn-primary,
                .${id} .btn-secondary {
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                    display: flex;
                    box-sizing: border-box;
                    font-size: 1rem;
                }
                .${id} .image-container {
                    max-height: 350px;
                }
            }
        `}} />
            <div className="container">
                <div>
                    <h1>
                        {title}<span className="highlight">{highlightText}</span>
                    </h1>

                    {bulletPoints && bulletPoints.length > 0 && (
                        <div className="bullet-list">
                            {bulletPoints.map((point: any, i: number) => (
                                <div key={i} className="bullet-item">
                                    <span className="bullet-icon">✓</span>
                                    <p className="bullet-text">{point.text}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="button-group">
                        <a href={ctaLink} className="btn-primary">
                            {ctaText}
                        </a>
                        {secondaryButtonText && (
                            <button className="btn-secondary">
                                {secondaryButtonText}
                            </button>
                        )}
                    </div>
                </div>

                <div className="image-container">
                    {imageUrl ? (
                        <Image 
                            loader={({ src, width, quality }) => getProxiedUrl(src, { w: width, q: quality || 75 })}
                            src={imageUrl} 
                            alt="Auto Service" 
                            fill 
                            className="object-cover" 
                            priority 
                            fetchPriority="high"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 501px"
                        />
                    ) : (
                        <div className="image-placeholder">🚗</div>
                    )}
                </div>
            </div>
        </section>
    );
};
