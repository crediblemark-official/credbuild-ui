import React, { useId } from "react";
import type { HeroDentalProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroDentalRender = ({
    content,
    typography,
    styling
}: HeroDentalProps) => {
    const {
        title, titleHighlight, subtitle, ctaText1, ctaLink1, ctaText2, ctaLink2,
        service1Title, service1Desc, service2Title, service2Desc, service3Title, service3Desc
    } = content;

    const {
        titleFont, titleSize, titleWeight, subtitleSize
    } = typography;

    const {
        titleColor, highlightColor, subtitleColor,
        btnPrimaryColor, btnPrimaryTextColor, btnSecondaryColor, btnSecondaryTextColor,
        btnRadius, btnPaddingVertical, btnPaddingHorizontal,
        backgroundColor, accentColor, serviceCardBg,
        paddingTop, paddingBottom
    } = styling;

    const id = "dental-" + useId().replace(/:/g, "");
    const getVal = (obj: ResponsiveValue | undefined, key: 'desktop' | 'tablet' | 'mobile') => {
        if (typeof obj === 'number') return obj;
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
            }
            .${id} .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            .${id} .hero-content {
                text-align: center;
                margin-bottom: 60px;
                position: relative;
            }
            .${id} h1 { 
                font-size: ${getVal(titleSize, 'desktop')}rem;
                font-family: ${titleFont};
                font-weight: ${titleWeight};
                color: ${titleColor};
                line-height: 1.2;
                margin-bottom: 20px;
            }
            .${id} .highlight { color: ${highlightColor}; }
            .${id} .subtitle { 
                font-size: ${getVal(subtitleSize, 'desktop')}rem;
                color: ${subtitleColor};
                margin-bottom: 32px;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
            }
            .${id} .button-group {
                display: flex;
                gap: 16px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .${id} .services-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }
            .${id} .service-card {
                background: ${serviceCardBg};
                padding: 32px 24px;
                border-radius: 12px;
                border: 1px solid #e2e8f0;
            }
            .${id} .service-number {
                font-size: 1.5rem;
                font-weight: 700;
                color: ${accentColor};
                margin-bottom: 12px;
            }
            .${id} .service-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: ${accentColor};
                margin-bottom: 8px;
            }
            .${id} .service-desc {
                font-size: 0.9rem;
                color: ${subtitleColor};
                line-height: 1.5;
            }
            .${id} .icon-tooth {
                position: absolute;
                font-size: 3rem;
                opacity: 0.2;
            }
            .${id} .icon-left { left: 10%; top: 20px; }
            .${id} .icon-right { right: 10%; top: 20px; }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 { font-size: ${getVal(titleSize, 'tablet')}rem; }
                .${id} .subtitle { font-size: ${getVal(subtitleSize, 'tablet')}rem; }
            }

            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'mobile')}px;
                    padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                    padding-left: 24px;
                    padding-right: 24px;
                }
                .${id} .hero-content {
                    margin-bottom: 40px;
                }
                .${id} h1 { 
                    font-size: ${getVal(titleSize, 'mobile')}rem;
                    line-height: 1.2;
                    margin-bottom: 16px;
                }
                .${id} .subtitle { 
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                    margin-bottom: 24px;
                    line-height: 1.6;
                }
                .${id} .button-group {
                    flex-direction: column;
                    width: 100%;
                    gap: 12px;
                }
                .${id} .button-group a {
                    width: 100%;
                    text-align: center;
                    display: block;
                    box-sizing: border-box;
                }
                .${id} .services-grid {
                    grid-template-columns: 1fr;
                    gap: 16px;
                }
                .${id} .service-card {
                    padding: 24px 20px;
                }
                .${id} .service-number {
                    font-size: 1.25rem;
                    margin-bottom: 8px;
                }
                .${id} .service-title {
                    font-size: 1.1rem;
                    margin-bottom: 6px;
                }
                .${id} .service-desc {
                    font-size: 0.875rem;
                    line-height: 1.6;
                }
                .${id} .icon-tooth {
                    display: none;
                }
            }
        `}} />
            <div className="container">
                <div className="hero-content">
                    <div className="icon-tooth icon-left">🦷</div>
                    <h1>
                        {title} <span className="highlight">{titleHighlight}</span>
                    </h1>
                    <p className="subtitle">{subtitle}</p>
                    <div className="button-group">
                        <a href={ctaLink1} style={{
                            backgroundColor: btnPrimaryColor,
                            color: btnPrimaryTextColor,
                            padding: `${btnPaddingVertical} ${btnPaddingHorizontal}`,
                            borderRadius: btnRadius,
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'opacity 0.2s',
                            display: 'inline-block'
                        }}>
                            {ctaText1}
                        </a>
                        <a href={ctaLink2} style={{
                            backgroundColor: btnSecondaryColor,
                            color: btnSecondaryTextColor,
                            padding: `${btnPaddingVertical} ${btnPaddingHorizontal}`,
                            borderRadius: btnRadius,
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: `2px solid ${btnSecondaryTextColor}`,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'inline-block'
                        }}>
                            {ctaText2}
                        </a>
                    </div>
                    <div className="icon-tooth icon-right">🦷</div>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-number">01</div>
                        <div className="service-title">{service1Title}</div>
                        <div className="service-desc">{service1Desc}</div>
                    </div>
                    <div className="service-card">
                        <div className="service-number">02</div>
                        <div className="service-title">{service2Title}</div>
                        <div className="service-desc">{service2Desc}</div>
                    </div>
                    <div className="service-card">
                        <div className="service-number">03</div>
                        <div className="service-title">{service3Title}</div>
                        <div className="service-desc">{service3Desc}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
