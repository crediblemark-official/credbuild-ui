import React, { useId } from "react";
import type { HeroSecurityProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroSecurityRender = ({
    content,
    typography,
    styling
}: HeroSecurityProps) => {
    const {
        title, ctaText, ctaLink, secondaryButtonText,
        feature1Icon, feature1Title, feature1Description,
        feature2Icon, feature2Title, feature2Description,
        feature3Icon, feature3Title, feature3Description
    } = content;

    const {
        titleSize, titleWeight, featureIconSize
    } = typography;

    const {
        gradientStart, gradientEnd, gradientAngle, textColor,
        primaryBtnColor, primaryBtnTextColor, secondaryBtnColor,
        cardBgColor, cardBorderColor,
        btnRadius, cardRadius,
        gap, paddingTop, paddingBottom, btnPaddingHorizontal, btnPaddingVertical
    } = styling;

    const id = "security-" + useId().replace(/:/g, "");

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
                background: linear-gradient(${gradientAngle}deg, ${gradientStart} 0%, ${gradientEnd} 100%);
                color: ${textColor};
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
            .${id} .hero-content {
                text-align: center;
                margin-bottom: 60px;
            }
            .${id} h1 {
                font-size: ${getVal(titleSize, 'desktop')}rem;
                font-weight: ${titleWeight};
                line-height: 1.1;
                margin-bottom: 2.5rem;
                color: ${textColor};
            }
            .${id} .button-group {
                display: flex;
                gap: 16px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .${id} .btn-primary {
                background-color: ${primaryBtnColor};
                color: ${primaryBtnTextColor};
                padding: ${btnPaddingVertical} ${btnPaddingHorizontal};
                border-radius: ${btnRadius}px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
                border: none;
                cursor: pointer;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                display: inline-block;
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
            .${id} .features-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: ${getVal(gap, 'desktop')}px;
            }
            .${id} .feature-card {
                background: ${cardBgColor};
                backdrop-filter: blur(10px);
                padding: 32px 24px;
                border-radius: ${cardRadius}px;
                border: 1px solid ${cardBorderColor};
            }
            .${id} .feature-icon {
                font-size: ${getVal(featureIconSize, 'desktop')}rem;
                margin-bottom: 16px;
            }
            .${id} .feature-title {
                font-size: 1.25rem;
                font-weight: 700;
                margin-bottom: 8px;
            }
            .${id} .feature-desc {
                font-size: 0.95rem;
                opacity: 0.9;
                line-height: 1.6;
            }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 {
                    font-size: ${getVal(titleSize, 'tablet')}rem;
                }
                .${id} .feature-icon {
                    font-size: ${getVal(featureIconSize, 'tablet')}rem;
                }
                .${id} .features-grid {
                    gap: ${getVal(gap, 'tablet')}px;
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
                .${id} h1 {
                    font-size: clamp(2rem, ${getVal(titleSize, 'mobile')}rem, 3rem);
                    margin-bottom: 2rem;
                    word-break: break-word;
                    line-height: 1.2;
                }
                .${id} .feature-icon {
                    font-size: ${getVal(featureIconSize, 'mobile')}rem;
                }
                .${id} .hero-content {
                    margin-bottom: 40px;
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
                .${id} .features-grid {
                    grid-template-columns: 1fr;
                    gap: ${getVal(gap, 'mobile') || 20}px;
                }
                .${id} .feature-card {
                    text-align: center;
                    padding: 24px 20px;
                }
            }
        `}} />
            <div className="container">
                <div className="hero-content">
                    <h1>{title}</h1>
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

                <div className="features-grid">
                    {[
                        { icon: feature1Icon, title: feature1Title, desc: feature1Description },
                        { icon: feature2Icon, title: feature2Title, desc: feature2Description },
                        { icon: feature3Icon, title: feature3Title, desc: feature3Description },
                    ].map((feature, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="feature-title">{feature.title}</div>
                            <div className="feature-desc">{feature.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
