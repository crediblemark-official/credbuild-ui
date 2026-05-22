import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroRealEstateProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroRealEstateRender = ({
    content,
    media,
    typography,
    styling
}: HeroRealEstateProps) => {
    const {
        title, description, searchPlaceholder, searchButtonText, avatarCount,
        stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label
    } = content;

    const { imageUrl } = media;

    const {
        titleSize, titleWeight
    } = typography;

    const {
        backgroundColor, titleColor, descriptionColor, primaryColor, btnTextColor, secondaryColor, avatarRingColor,
        searchRadius, btnRadius, imageRadius,
        gap, paddingTop, paddingBottom
    } = styling;

    const id = "real-estate-" + useId().replace(/:/g, "");

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
        <section className={id}>
            <style dangerouslySetInnerHTML={{
                __html: `
            .${id} {
                background-color: ${backgroundColor};
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
                grid-template-columns: 1.2fr 0.8fr;
                gap: ${getVal(gap, 'desktop')}px;
                align-items: center;
            }
            .${id} h1 {
                font-size: ${getVal(titleSize, 'desktop')}rem;
                font-weight: ${titleWeight};
                color: ${titleColor};
                line-height: 1.1;
                margin-bottom: 1.5rem;
            }
            .${id} .description {
                font-size: 1.05rem;
                color: ${descriptionColor};
                line-height: 1.7;
                margin-bottom: 2.5rem;
            }
            .${id} .search-box {
                display: flex;
                gap: 12px;
                margin-bottom: 2rem;
                padding: 8px;
                background-color: white;
                border-radius: ${searchRadius}px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            }
            .${id} .input-wrapper {
                flex: 1;
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                background-color: #f8fafc;
                border-radius: ${searchRadius > 4 ? searchRadius - 4 : 4}px;
            }
            .${id} .search-input {
                flex: 1;
                border: none;
                background-color: transparent;
                font-size: 1rem;
                outline: none;
                color: ${titleColor};
            }
            .${id} .btn-search {
                background-color: ${primaryColor};
                color: ${btnTextColor};
                padding: 12px 32px;
                border-radius: ${btnRadius}px;
                border: none;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                box-sizing: border-box;
                transition: opacity 0.3s;
            }
            .${id} .avatar-group {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .${id} .avatars {
                display: flex;
            }
            .${id} .avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: ${secondaryColor};
                display: flex;
                align-items: center;
                justify-content: center;
                border: 3px solid ${avatarRingColor};
                font-size: 1.2rem;
                margin-left: -12px;
            }
            .${id} .avatar:first-child {
                margin-left: 0;
            }
            .${id} .image-container {
                position: relative;
                aspect-ratio: 4/3;
                background-color: ${secondaryColor};
                border-radius: ${imageRadius}px;
                overflow: hidden;
                margin-bottom: 24px;
            }
            .${id} .stats-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }
            .${id} .stat-value {
                font-size: 2rem;
                font-weight: 800;
                color: ${primaryColor};
                margin-bottom: 4px;
            }
            .${id} .stat-label {
                font-size: 0.85rem;
                color: ${descriptionColor};
            }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 {
                    font-size: ${getVal(titleSize, 'tablet')}rem;
                }
                 .${id} .container {
                    gap: ${getVal(gap, 'tablet')}px;
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
                .${id} .description {
                    text-align: center;
                }
                .${id} .search-box {
                    flex-direction: column;
                    padding: 16px;
                }
                .${id} .btn-search {
                    width: 100%;
                }
                .${id} .avatar-group {
                    justify-content: center;
                }
                .${id} .image-container {
                    margin-bottom: 24px;
                }
                .${id} .stats-grid {
                    gap: 12px;
                    text-align: center;
                }
                .${id} .stat-value {
                    font-size: 1.75rem;
                }
            }
        `}} />
            <div className="container">
                <div>
                    <h1>{title}</h1>
                    <p className="description">{description}</p>

                    <div className="search-box">
                        <div className="input-wrapper">
                            <span style={{ fontSize: '1.2rem' }}>📍</span>
                            <input type="text" placeholder={searchPlaceholder} className="search-input" />
                        </div>
                        <button className="btn-search">
                            {searchButtonText}
                        </button>
                    </div>

                    {avatarCount && (
                        <div className="avatar-group">
                            <div className="avatars">
                                {['👤', '👤', '👤', '👤'].map((avatar, i) => (
                                    <div key={i} className="avatar">
                                        {avatar}
                                    </div>
                                ))}
                            </div>
                            <span style={{ fontSize: '0.95rem', color: descriptionColor, fontWeight: '600' }}>{avatarCount}</span>
                        </div>
                    )}
                </div>

                <div>
                    <div className="image-container">
                        {imageUrl ? (
                            <Image 
                                src={getProxiedUrl(imageUrl, { q: 75 })} 
                                alt="House" 
                                fill 
                                className="object-cover" 
                                priority 
                                fetchPriority="high"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            />
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '6rem' }}>🏘️</div>
                        )}
                    </div>

                    <div className="stats-grid">
                        {[
                            { value: stat1Value, label: stat1Label },
                            { value: stat2Value, label: stat2Label },
                            { value: stat3Value, label: stat3Label },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
