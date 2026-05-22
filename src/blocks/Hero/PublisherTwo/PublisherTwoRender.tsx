import React, { useId } from "react";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import type { HeroPublisherTwoProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const HeroPublisherTwoRender = ({
    content,
    media,
    typography,
    styling
}: HeroPublisherTwoProps) => {
    const { title, description } = content;
    const { imageUrl } = media;

    const {
        titleSize, titleWeight, subtitleSize, titleFont = 'inherit', descFont = 'inherit'
    } = typography;

    const {
        backgroundColor, textColor, descriptionColor, waveColor,
        imageRadius, imageWidth = "100%",
        imageAspectRatio = "4/3",
        imageObjectFit = "cover",
        imageShadow = "none",
        imageAlign = "right",
        gap, paddingTop, paddingBottom
    } = styling;

    const id = "publisher-two-" + useId().replace(/:/g, "");

    // Smart scaling helper
    const getVal = (obj: ResponsiveValue | undefined, key: 'desktop' | 'tablet' | 'mobile') => {
        if (typeof obj === 'number') return obj;
        if (key === 'mobile' && obj && !obj.mobile && obj.desktop) {
            return (obj.desktop as number) * 0.6; // Scale down fallback
        }
        if (key === 'tablet' && obj && !obj.tablet && obj.desktop) {
            return (obj.desktop as number) * 0.8; // Scale down fallback
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
                position: relative;
            }
            .${id} .container {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: ${getVal(gap, 'desktop')}px;
                align-items: center;
                position: relative;
                z-index: 2;
            }
            .${id} h1 {
                font-size: ${getVal(titleSize, 'desktop')}rem;
                font-weight: ${titleWeight};
                color: ${textColor};
                line-height: 1.1;
                margin-bottom: 1.5rem;
                font-family: ${titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'};
            }
            .${id} .description {
                font-size: ${getVal(subtitleSize, 'desktop')}rem;
                color: ${descriptionColor};
                line-height: 1.6;
                max-width: 500px;
                font-family: ${descFont !== 'inherit' ? `"${descFont}", sans-serif` : 'inherit'};
            }
            .${id} .image-container {
                 overflow: hidden;
                 display: flex;
                 justify-content: ${imageAlign === 'left' ? 'flex-start' : imageAlign === 'center' ? 'center' : 'flex-end'};
            }
            .${id} .wave-divider {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                overflow: hidden;
                line-height: 0;
                transform: rotate(180deg);
                z-index: 1;
            }
            .${id} .wave-divider svg {
                position: relative;
                display: block;
                width: calc(100% + 1.3px);
                height: 80px;
                transform: rotateY(180deg);
            }
            .${id} .wave-divider .shape-fill {
                fill: ${waveColor};
            }

            @media (max-width: 1024px) {
                .${id} {
                    padding-top: ${getVal(paddingTop, 'tablet')}px;
                    padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                }
                .${id} h1 {
                    font-size: ${getVal(titleSize, 'tablet')}rem;
                }
                .${id} .description {
                    font-size: ${getVal(subtitleSize, 'tablet')}rem;
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
                    text-align: center;
                }
                .${id} h1 {
                    font-size: clamp(2rem, ${getVal(titleSize, 'mobile')}rem, 3rem);
                    line-height: 1.2;
                    word-break: break-word;
                }
                .${id} .description {
                    font-size: ${getVal(subtitleSize, 'mobile')}rem;
                    margin: 0 auto;
                    text-align: center;
                }
                .${id} .image-container {
                    justify-content: center;
                }
                 .${id} .wave-divider svg {
                    height: 50px;
                 }
            }
        `}} />
            <div className="container">
                <div>
                    <h1>{title}</h1>
                    <p className="description">{description}</p>
                </div>

                <div className="image-container">
                    {imageUrl ? (
                        <div style={{
                            position: 'relative',
                            width: imageWidth,
                            aspectRatio: imageAspectRatio,
                            borderRadius: `${imageRadius}px`,
                            overflow: 'hidden',
                            boxShadow: imageShadow === 'sm' ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' :
                                imageShadow === 'md' ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' :
                                    imageShadow === 'lg' ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' :
                                        imageShadow === 'xl' ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' :
                                            'none'
                        }}>
                            <Image 
                                src={getProxiedUrl(imageUrl, { q: 75 })} 
                                alt="Publisher" 
                                fill 
                                priority={true}
                                fetchPriority="high"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                className={imageObjectFit === 'cover' ? 'object-cover' : 'object-contain'} 
                            />
                        </div>
                    ) : (
                        <div style={{ height: '300px', width: '100%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>📚</div>
                    )}
                </div>
            </div>

            <div className="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};
