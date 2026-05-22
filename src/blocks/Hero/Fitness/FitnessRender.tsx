import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroFitnessProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroFitnessRender = ({
    content,
    media,
    typography,
    styling
}: HeroFitnessProps) => {
    const {
        title, subtitle, ctaText
    } = content;

    const {
        imageUrl1, imageUrl2, imageUrl3, imageUrl4
    } = media;

    const {
        titleFont, titleSize, titleWeight, subtitleSize
    } = typography;

    const {
        titleColor, subtitleColor,
        btnPrimaryColor, btnPrimaryTextColor, btnSecondaryColor, btnSecondaryTextColor,
        btnRadius, btnPaddingVertical, btnPaddingHorizontal,
        backgroundColor, accentColor1, accentColor2,
        paddingTop, paddingBottom, gap
    } = styling;

    const id = "fitness-" + useId().replace(/:/g, "");
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
        <section className={id} style={{ backgroundColor, position: 'relative' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
            .${id} {
                padding-top: ${getVal(paddingTop, 'desktop')}px;
                padding-bottom: ${getVal(paddingBottom, 'desktop')}px;
                padding-left: 20px;
                padding-right: 20px;
            }
            .${id} .main-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: ${getVal(gap, 'desktop')}px;
                align-items: center;
            }
            .${id} h1 { font-size: ${getVal(titleSize, 'desktop')}rem; }
            .${id} p { font-size: ${getVal(subtitleSize, 'desktop')}rem; }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} .main-grid {
                    gap: ${getVal(gap, 'tablet')}px;
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
                    overflow-x: hidden;
                }
                .${id} .main-grid {
                    grid-template-columns: 1fr !important;
                    gap: 40px !important;
                }
                .${id} h1 { 
                    font-size: clamp(2.5rem, ${getVal(titleSize, 'mobile')}rem, 3.5rem);
                    line-height: 1.1;
                    margin-bottom: 16px;
                    word-break: break-word;
                }
                .${id} p { 
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                    line-height: 1.6;
                    max-width: 100%;
                }
                .${id} .image-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 12px !important;
                }
                .${id} .main-grid > div:first-child > div:last-child {
                    flex-direction: column;
                    gap: 12px;
                }
                .${id} .main-grid > div:first-child > div:last-child > * {
                    width: 100%;
                    text-align: center;
                    padding: 16px 24px;
                    box-sizing: border-box;
                }
                .${id} .main-grid > div:last-child {
                    order: 2;
                }
            }
`}} />
            <div className="main-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div>
                    <h1 style={{
                        fontFamily: titleFont, fontWeight: titleWeight, color: titleColor, lineHeight: '1.1', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px'
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        color: subtitleColor, marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '500px'
                    }}>
                        {subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: btnPrimaryColor, color: btnPrimaryTextColor, padding: `${btnPaddingVertical} ${btnPaddingHorizontal}`, borderRadius: btnRadius, border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s', boxSizing: 'border-box'
                        }}>
                            {ctaText}
                        </button>
                        <button style={{
                            backgroundColor: btnSecondaryColor, color: btnSecondaryTextColor, padding: `${btnPaddingVertical} ${btnPaddingHorizontal}`, borderRadius: btnRadius, border: `2px solid ${btnSecondaryTextColor}`, cursor: 'pointer', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', boxSizing: 'border-box'
                        }}>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1f2937' }}>
                        <Image 
                            src={getProxiedUrl(imageUrl1, { q: 75 })} 
                            alt="Gym 1" 
                            fill 
                            className="object-cover" 
                            priority 
                            fetchPriority="high"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                        />
                    </div>
                    <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1f2937', marginTop: '40px' }}>
                        <Image 
                            src={getProxiedUrl(imageUrl2, { q: 75 })} 
                            alt="Gym 2" 
                            fill 
                            className="object-cover" 
                            priority 
                            fetchPriority="high"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                        />
                    </div>
                    <div style={{ position: 'relative', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#1f2937', border: `4px solid ${accentColor1} `, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image 
                            src={getProxiedUrl(imageUrl3, { q: 80 })} 
                            alt="Gym 3" 
                            fill 
                            className="object-cover" 
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                        />
                    </div>
                    <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1f2937', borderBottom: `8px solid ${accentColor2} `, borderRight: `8px solid ${accentColor2} ` }}>
                        <Image 
                            src={getProxiedUrl(imageUrl4, { q: 80 })} 
                            alt="Gym 4" 
                            fill 
                            className="object-cover" 
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
