"use client";

import React, { useId } from "react";
import { CTAProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "@/components/credbuild/utils";

export const CTARender = ({
    content,
    typography,
    styling
}: CTAProps) => {
    const { title, subtitle, buttonText, buttonLink } = content;
    const { titleSize = { desktop: 56, tablet: 48, mobile: 32 }, descriptionSize = { desktop: 20, tablet: 18, mobile: 16 } } = typography;
    const {
        backgroundColor = "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
        padding = { desktop: 100, tablet: 80, mobile: 60 },
        titleColor = "#ffffff",
        descriptionColor = "rgba(255, 255, 255, 0.95)",
        buttonColor = "#ffffff",
        buttonTextColor = "#dc2626",
    } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `cta-${id}`;

    return (
        <section className={uniqueClass} style={{
            background: backgroundColor,
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                        .${uniqueClass} {
                            padding: ${getVal(padding, 100)}px 20px;
                        }
                        .${uniqueClass} .cta-title {
                            font-size: ${getVal(titleSize, 56)}px;
                        }
                        .${uniqueClass} .cta-desc {
                            font-size: ${getVal(descriptionSize, 20)}px;
                        }

                        @media (max-width: 1024px) {
                            .${uniqueClass} {
                                padding: ${getTabletVal(padding, 80)}px 20px;
                            }
                            .${uniqueClass} .cta-title {
                                font-size: ${getTabletVal(titleSize, 48)}px;
                            }
                            .${uniqueClass} .cta-desc {
                                font-size: ${getTabletVal(descriptionSize, 18)}px;
                            }
                        }

                        @media (max-width: 640px) {
                            .${uniqueClass} {
                                padding: ${getMobileVal(padding, 60)}px 20px;
                            }
                            .${uniqueClass} .cta-title {
                                font-size: ${getMobileVal(titleSize, 32)}px;
                            }
                            .${uniqueClass} .cta-desc {
                                font-size: ${getMobileVal(descriptionSize, 16)}px;
                            }
                        }
                    `
            }} />

            <div style={{
                position: 'absolute',
                width: 'clamp(300px, 50vw, 500px)',
                height: 'clamp(300px, 50vw, 500px)',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                top: '-250px',
                left: '-100px',
            }} />
            <div style={{
                position: 'absolute',
                width: 'clamp(250px, 40vw, 400px)',
                height: 'clamp(250px, 40vw, 400px)',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                bottom: '-200px',
                right: '-100px',
            }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <h2 className="cta-title" style={{
                    color: titleColor,
                    marginBottom: '1.5rem',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                }}>
                    {title}
                </h2>
                <p className="cta-desc" style={{
                    color: descriptionColor,
                    marginBottom: 'clamp(2rem, 5vw, 3rem)',
                    lineHeight: '1.6',
                }}>
                    {subtitle}
                </p>
                <a
                    href={buttonLink}
                    style={{
                        display: 'inline-block',
                        backgroundColor: buttonColor,
                        color: buttonTextColor,
                        padding: 'clamp(14px, 3vw, 18px) clamp(32px, 8vw, 56px)',
                        minHeight: '48px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontWeight: '800',
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        cursor: 'pointer',
                    }}
                >
                    {buttonText} →
                </a>
            </div>
        </section>
    );
};
