import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroYogaProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroYogaRender = ({
    content,
    media,
    typography,
    styling
}: HeroYogaProps) => {
    const {
        tag, title, subtitle, ctaText, ctaLink, secondaryButtonText,
        stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label
    } = content;

    const { imageUrl } = media;

    const {
        titleSize, titleWeight, subtitleSize
    } = typography;

    const {
        subtitleColor, backgroundColor, primaryColor, btnTextColor, secondaryBtnColor, iconBackgroundColor, imageBackgroundColor,
        btnRadius, imageRadius,
        gap, paddingTop, paddingBottom, btnPaddingHorizontal, btnPaddingVertical
    } = styling;

    const id = "yoga-" + useId().replace(/:/g, "");

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
        <section className={id} style={{ backgroundColor }}>
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
            }
            .${id} .hero-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: ${getVal(gap, 'desktop')}px;
                align-items: center;
                margin-bottom: 60px;
            }
            .${id} .tag {
                color: ${primaryColor};
                font-size: 0.95rem;
                font-weight: 600;
                margin-bottom: 16px;
            }
            .${id} h1 {
                font-size: ${getVal(titleSize, 'desktop')}rem;
                font-weight: ${titleWeight};
                color: #1a2332;
                line-height: 1.1;
                margin-bottom: 1.5rem;
            }
            .${id} .subtitle {
                font-size: ${getVal(subtitleSize, 'desktop')}rem;
                color: ${subtitleColor};
                line-height: 1.6;
                margin-bottom: 2rem;
            }
            .${id} .button-group {
                display: flex;
                gap: 16px;
                align-items: center;
                flex-wrap: wrap;
            }
            .${id} .btn-primary {
                display: inline-block;
                background-color: ${primaryColor};
                color: ${btnTextColor};
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
                display: flex;
                align-items: center;
                gap: 8px;
                background-color: transparent;
                color: ${secondaryBtnColor};
                padding: ${btnPaddingVertical} ${btnPaddingHorizontal};
                border-radius: ${btnRadius}px;
                border: none;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
            }
            .${id} .play-icon {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: ${iconBackgroundColor};
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${secondaryBtnColor};
            }
            .${id} .image-container {
                position: relative;
                aspect-ratio: 1;
                background-color: ${imageBackgroundColor};
                border-radius: ${imageRadius}px;
                overflow: hidden;
            }
            .${id} .image-placeholder {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                font-size: 5rem;
            }
            .${id} .stats-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
            }
            .${id} .stat-value {
                font-size: 2.5rem;
                font-weight: 800;
                color: #1a2332;
                margin-bottom: 8px;
            }
            .${id} .stat-label {
                font-size: 1rem;
                color: ${subtitleColor};
            }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} .hero-grid {
                    gap: ${getVal(gap, 'tablet')}px;
                }
                .${id} h1 {
                    font-size: ${getVal(titleSize, 'tablet')}rem;
                }
            }

            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'mobile')}px;
                    padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                    padding-left: 24px;
                    padding-right: 24px;
                }
                .${id} .hero-grid {
                    grid-template-columns: 1fr;
                    gap: ${getVal(gap, 'mobile') || 40}px;
                    margin-bottom: 40px;
                }
                .${id} .hero-grid > div:nth-child(2) {
                    order: -1;
                }
                .${id} h1 {
                    font-size: clamp(2rem, ${getVal(titleSize, 'mobile')}rem, 3rem);
                    line-height: 1.2;
                    text-align: center;
                    word-break: break-word;
                }
                .${id} .tag {
                    text-align: center;
                    display: block;
                }
                .${id} .subtitle {
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                    text-align: center;
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
                    justify-content: center;
                    box-sizing: border-box; 
                }
                .${id} .image-container {
                    max-height: 400px;
                }
                .${id} .stats-grid {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    text-align: center;
                }
                .${id} .stat-value {
                    font-size: 1.75rem;
                }
                .${id} .stat-label {
                    font-size: 0.85rem;
                }
            }
        `}} />
            <div className="container">
                <div className="hero-grid">
                    <div>
                        {tag && <div className="tag">{tag}</div>}
                        <h1 style={{ color: '#1a2332' }}>{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                        <div className="button-group">
                            <a href={ctaLink} className="btn-primary">
                                {ctaText}
                            </a>
                            {secondaryButtonText && (
                                <button className="btn-secondary">
                                    <span className="play-icon">▶</span>
                                    {secondaryButtonText}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="image-container">
                        {imageUrl ? (
                            <Image 
                                src={getProxiedUrl(imageUrl, { q: 75 })} 
                                alt="Hero" 
                                fill 
                                className="object-cover" 
                                priority 
                                fetchPriority="high"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            />
                        ) : (
                            <div className="image-placeholder">🧘‍♀️</div>
                        )}
                    </div>
                </div>

                <div className="stats-grid">
                    {[
                        { value: stat1Value, label: stat1Label },
                        { value: stat2Value, label: stat2Label },
                        { value: stat3Value, label: stat3Label },
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
