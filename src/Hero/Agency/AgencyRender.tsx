import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroAgencyProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroAgencyRender = ({
    content,
    media,
    typography,
    styling
}: HeroAgencyProps) => {
    const {
        title, subtitle, ctaText, ctaLink,
    } = content;

    const {
        project1ImageUrl, project2ImageUrl, project3ImageUrl
    } = media;

    const {
        titleFont, titleSize, titleWeight, titleColor,
        subtitleSize, subtitleColor
    } = typography;

    const {
        backgroundColor, accentColor,
        btnColor, btnTextColor, btnRadius, btnOutline, btnPaddingVertical, btnPaddingHorizontal,
        projectGap, projectRadius, projectShadow,
        paddingTop, paddingBottom
    } = styling;

    const id = "agency-" + useId().replace(/:/g, "");
    const getVal = (obj: ResponsiveValue | undefined, key: 'desktop' | 'tablet' | 'mobile') => {
        if (typeof obj === 'number') return obj;
        if (key === 'mobile' && obj && !obj.mobile && obj.desktop) {
            return (obj.desktop as number) * 0.5;
        }
        if (key === 'tablet' && obj && !obj.tablet && obj.desktop) {
            return (obj.desktop as number) * 0.8;
        }
        return obj?.[key] ?? obj?.desktop ?? 0;
    };

    return (
        <section className={id} style={{ backgroundColor, color: titleColor, position: 'relative', overflow: 'hidden' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
            .${id} {
                padding-top: ${getVal(paddingTop, 'desktop')}px;
                padding-bottom: ${getVal(paddingBottom, 'desktop')}px;
                padding-left: 24px;
                padding-right: 24px;
            }
            .${id} .container {
                max-width: 1280px;
                margin: 0 auto;
            }
            .${id} .main-content-grid {
                display: grid;
                grid-template-columns: 1.5fr 1fr;
                gap: 60px;
                align-items: flex-start;
                margin-bottom: 80px;
            }
            .${id} h1 { 
                font-family: ${titleFont};
                font-weight: ${titleWeight};
                font-size: ${getVal(titleSize, 'desktop')}rem;
                line-height: 1.1;
                margin: 0;
                position: relative;
            }
            .${id} .subtitle-container {
                padding-top: 10px;
                border-top: 2px solid ${accentColor};
                max-width: 500px;
                margin-left: auto;
            }
            .${id} p { 
                font-family: 'Inter', sans-serif;
                font-size: ${getVal(subtitleSize, 'desktop')}rem;
                line-height: 1.6;
                color: ${subtitleColor};
                margin-bottom: 32px;
                margin-top: 24px;
            }
            .${id} .cta-btn {
                display: inline-block;
                background-color: ${btnOutline ? 'transparent' : btnColor};
                color: ${btnTextColor};
                padding: ${btnPaddingVertical} ${btnPaddingHorizontal};
                border-radius: ${btnRadius};
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
                border: ${btnOutline ? `1px solid ${btnTextColor}` : 'none'};
                transition: all 0.3s ease;
                box-sizing: border-box;
                font-family: 'Inter', sans-serif;
            }
            .${id} .section-title {
                font-family: 'Inter', sans-serif;
                font-size: 1.25rem;
                color: ${accentColor};
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 32px;
            }
            .${id} .section-title::after {
                content: '';
                height: 2px;
                width: 60px;
                background-color: ${accentColor};
            }
            .${id} .project-grid { 
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: ${getVal(projectGap, 'desktop')}px;
            }
            .${id} .project-card {
                position: relative;
                aspect-ratio: 16/10;
                border-radius: ${projectRadius};
                overflow: hidden;
                background-color: #2a3142;
                box-shadow: ${projectShadow ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'};
                transition: transform 0.3s ease;
                cursor: pointer;
            }
            .${id} .project-card:hover {
                transform: translateY(-8px);
            }
            .${id} .project-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            .${id} .project-card:hover .project-img {
                transform: scale(1.05);
            }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 { font-size: ${getVal(titleSize, 'tablet')}rem; }
                .${id} .subtitle-container { 
                    margin-left: 0; 
                    padding-top: 0;
                    border-top: none;
                }
                .${id} p { font-size: ${getVal(subtitleSize, 'tablet')}rem; }
                .${id} .project-grid { 
                    grid-template-columns: repeat(2, 1fr);
                    gap: ${getVal(projectGap, 'tablet')}px; 
                }
            }

            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'mobile')}px;
                    padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                    overflow-x: hidden;
                }
                .${id} .main-content-grid {
                    grid-template-columns: 1fr;
                    gap: 32px;
                    margin-bottom: 48px;
                }
                .${id} h1 { 
                    font-size: clamp(2.5rem, ${getVal(titleSize, 'mobile')}rem, 3.5rem);
                    white-space: normal;
                    word-break: break-word;
                    overflow-wrap: break-word;
                    hyphens: auto;
                    max-width: 100%;
                }
                .${id} .subtitle-container {
                    width: 100%;
                    border-top: 2px solid ${accentColor};
                    padding-top: 24px;
                    margin-top: 16px;
                }
                .${id} p { 
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                    margin-top: 0;
                    margin-bottom: 24px;
                }
                .${id} .cta-btn {
                    display: block;
                    width: 100%;
                    text-align: center;
                    padding: 16px 32px;
                    box-sizing: border-box; 
                }
                .${id} .project-grid { 
                    grid-template-columns: 1fr;
                    gap: 24px;
                }
                .${id} .project-card {
                    aspect-ratio: 16/9;
                }
            }
        `}} />

            <div className="container">
                <div className="main-content-grid">
                    <div style={{ position: 'relative' }}>
                        <h1>
                            {title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}<br />
                                </React.Fragment>
                            ))}
                        </h1>
                        <svg width="100" height="50" viewBox="0 0 100 50" style={{ position: 'absolute', bottom: '0', left: '0', transform: 'translateY(80%)', opacity: 0.8 }}>
                            <path d="M10,25 Q30,5 50,25 T90,25" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="subtitle-container">
                        <p>{subtitle}</p>
                        <a href={ctaLink} className="cta-btn">
                            {ctaText}
                        </a>
                    </div>
                </div>

                <div>
                    <div className="section-title">
                        Recent Projects
                    </div>
                    <div className="project-grid">
                        {[project1ImageUrl, project2ImageUrl, project3ImageUrl].map((url, i) => (
                            <div key={i} className="project-card">
                                {url ? (
                                    <Image 
                                        src={getProxiedUrl(url, { q: 75 })} 
                                        alt={`Project ${i + 1}`} 
                                        fill 
                                        className="project-img object-cover" 
                                        priority={i === 0} 
                                        fetchPriority={i === 0 ? "high" : "low"}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                    />
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '3rem', color: '#4b5563' }}>
                                        {i === 0 ? '🎨' : i === 1 ? '💻' : '🚀'}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
