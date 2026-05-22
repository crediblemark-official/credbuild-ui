import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroWeddingProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroWeddingRender = ({
    content,
    media,
    typography,
    styling
}: HeroWeddingProps) => {
    const {
        title, subtitle, ctaText, ctaLink, secondaryButtonText, happyClientsText,
        stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label
    } = content;

    const {
        imageUrl1, imageUrl2
    } = media;

    const {
        titleFont, titleSize, titleWeight, subtitleSize
    } = typography;

    const {
        titleColor, subtitleColor, backgroundColor, accentColor, secondaryColor,
        btnPaddingVertical, btnPaddingHorizontal, paddingTop, paddingBottom, imageOverlap
    } = styling;

    const id = "wedding-" + useId().replace(/:/g, "");
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
                padding-left: 24px;
                padding-right: 24px;
            }
            .${id} .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            .${id} .header-row {
                display: grid;
                grid-template-columns: 1.2fr 0.8fr;
                gap: 60px;
                margin-bottom: 60px;
                align-items: flex-start;
            }
            .${id} h1 {
                font-size: ${getVal(titleSize, 'desktop')}rem;
                line-height: 1.1;
                margin: 0;
            }
            .${id} .subtitle {
                font-size: ${getVal(subtitleSize, 'desktop')}rem;
                line-height: 1.6;
                margin: 0;
                margin-top: 10px;
            }
            .${id} .content-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                align-items: center;
            }
            .${id} .left-column {
                display: flex;
                flex-direction: column;
                gap: 48px;
            }
            .${id} .button-group {
                display: flex;
                gap: 16px;
            }
            .${id} .clients-section {
                display: flex;
                align-items: center;
                gap: 16px;
            }
            .${id} .client-avatars {
                display: flex;
            }
            .${id} .client-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #ddd;
                border: 2px solid white;
                margin-left: -12px;
                position: relative;
            }
            .${id} .client-avatar:first-child {
                margin-left: 0;
            }
            .${id} .stats-grid {
                display: flex;
                gap: 40px;
                padding-top: 20px;
            }
            .${id} .overlap-img-1 { transform: translate(0, ${getVal(imageOverlap, 'desktop')}px); }
            .${id} .overlap-img-2 { transform: translate(20%, -${getVal(imageOverlap, 'desktop')}px); }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 { font-size: ${getVal(titleSize, 'tablet')}rem; }
                .${id} .subtitle { font-size: ${getVal(subtitleSize, 'tablet')}rem; }
                .${id} .overlap-img-1 { transform: translate(0, ${getVal(imageOverlap, 'tablet')}px); }
                .${id} .overlap-img-2 { transform: translate(20%, -${getVal(imageOverlap, 'tablet')}px); }
            }

            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'mobile')}px;
                    padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                    padding-left: 24px;
                    padding-right: 24px;
                }
                .${id} .header-row {
                    grid-template-columns: 1fr;
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .${id} .content-row {
                    grid-template-columns: 1fr;
                    gap: 40px;
                }
                .${id} .content-row > div:nth-child(2) {
                    order: -1; 
                }
                .${id} h1 { 
                    font-size: ${getVal(titleSize, 'mobile')}rem;
                    line-height: 1.2;
                }
                .${id} .subtitle { 
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                }
                .${id} .button-group {
                    flex-direction: column;
                    width: 100%;
                }
                .${id} .button-group > * {
                    width: 100%;
                    text-align: center;
                }
                .${id} .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    text-align: center;
                }
                .${id} .overlap-img-1 { 
                    transform: translate(0, 0);
                    margin: 0 auto;
                    position: relative;
                    width: 85%;
                }
                .${id} .overlap-img-2 { 
                    transform: translate(0, -30px);
                    margin: 0 auto;
                    width: 85%;
                }
                .${id} .image-container { 
                    display: flex;
                    flex-direction: column-reverse;
                }
            }
            `}} />

            <div className="container">
                <div className="header-row">
                    <h1 style={{ fontFamily: titleFont, fontWeight: titleWeight, color: titleColor }}>
                        {title}
                    </h1>
                    <p className="subtitle" style={{ fontFamily: 'Montserrat', color: subtitleColor }}>
                        {subtitle}
                    </p>
                </div>

                <div className="content-row">
                    <div className="left-column">
                        <div className="button-group">
                            <a href={ctaLink} style={{
                                display: 'inline-block', backgroundColor: accentColor, color: 'white', padding: `${btnPaddingVertical} ${btnPaddingHorizontal}`, borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', letterSpacing: '0.05em', transition: 'opacity 0.2s', border: 'none', cursor: 'pointer', boxSizing: 'border-box'
                            }}>
                                {ctaText}
                            </a>
                            {secondaryButtonText && (
                                <button style={{
                                    backgroundColor: 'transparent', color: secondaryColor, padding: `${btnPaddingVertical} ${btnPaddingHorizontal}`, borderRadius: '4px', border: `1px solid ${secondaryColor}`, cursor: 'pointer', fontWeight: '600', fontSize: '1rem', letterSpacing: '0.05em', boxSizing: 'border-box'
                                }}>
                                    {secondaryButtonText}
                                </button>
                            )}
                        </div>

                        <div className="clients-section">
                            <div className="client-avatars">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="client-avatar">
                                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Client ${i}`} fill className="object-cover rounded-full"  />
                                    </div>
                                ))}
                                <div className="client-avatar" style={{ backgroundColor: accentColor, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>2k+</div>
                            </div>
                            <span style={{ fontSize: '0.9rem', color: subtitleColor, fontWeight: '500' }}>{happyClientsText}</span>
                        </div>

                        <div className="stats-grid">
                            {[
                                { value: stat1Value, label: stat1Label },
                                { value: stat2Value, label: stat2Label },
                                { value: stat3Value, label: stat3Label },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontFamily: titleFont, fontSize: '2rem', fontWeight: '700', color: secondaryColor, marginBottom: '4px' }}>{stat.value}</div>
                                    <div style={{ fontFamily: 'Montserrat', fontSize: '0.8rem', color: subtitleColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="image-container" style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="overlap-img-2" style={{
                            position: 'relative', width: '65%', aspectRatio: '3/4', borderRadius: '100px 100px 0 0', overflow: 'hidden', zIndex: 1, border: `4px solid white`, boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                        }}>
                            {imageUrl2 ? (
                                <Image 
                                    src={getProxiedUrl(imageUrl2, { q: 75 })} 
                                    alt="Wedding 2" 
                                    fill 
                                    className="object-cover" 
                                    priority 
                                    fetchPriority="high"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', backgroundColor: '#eee' }} />
                            )}
                        </div>

                        <div className="overlap-img-1" style={{
                            position: 'absolute', left: 0, bottom: 0, width: '60%', aspectRatio: '1', borderRadius: '4px', overflow: 'hidden', zIndex: 2, border: `8px solid white`, boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            {imageUrl1 ? (
                                <Image 
                                    src={getProxiedUrl(imageUrl1, { q: 75 })} 
                                    alt="Wedding 1" 
                                    fill 
                                    className="object-cover" 
                                    priority 
                                    fetchPriority="high"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', backgroundColor: '#e2e8f0' }} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
