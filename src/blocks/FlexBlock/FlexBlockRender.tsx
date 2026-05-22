"use client";

import React, { useId } from "react";
import Image from "next/image";
import type { FlexBlockProps } from "./types";

export const FlexBlockRender = ({
    content,
    media,
    typography,
    styling
}: FlexBlockProps) => {
    const { title, description } = content;
    const { image, backgroundImage } = media;
    const { titleFontFamily, titleSize, titleWeight, titleColor, descFontFamily, descSize, descColor } = typography;
    const {
        alignContent, width, minHeight,
        paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom,
        backgroundColor, borderRadius, borderWidth, borderColor
    } = styling;

    const getVal = (prop: any, key: 'desktop' | 'tablet' | 'mobile', def: number = 0) => {
        if (!prop) return def;
        if (typeof prop === 'number') return prop;
        if (key === 'mobile') return prop.mobile ?? prop.tablet ?? prop.desktop ?? def;
        if (key === 'tablet') return prop.tablet ?? prop.desktop ?? def;
        return prop.desktop ?? def;
    };

    const uniqueId = `flex-${useId().replace(/:/g, "")}`;

    return (
        <div className={uniqueId} style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');

                .${uniqueId} {
                    margin-top: ${getVal(marginTop, 'desktop')}px;
                    margin-bottom: ${getVal(marginBottom, 'desktop')}px;
                }
                .${uniqueId} .inner-container {
                    width: ${getVal(width, 'desktop')}%;
                    min-height: ${getVal(minHeight, 'desktop')}px;
                    padding-top: ${getVal(paddingTop, 'desktop')}px;
                    padding-bottom: ${getVal(paddingBottom, 'desktop')}px;
                    padding-left: ${getVal(paddingLeft, 'desktop')}px;
                    padding-right: ${getVal(paddingRight, 'desktop')}px;
                }
                .${uniqueId} h2 { font-size: ${getVal(titleSize, 'desktop')}rem; }
                .${uniqueId} p { font-size: ${getVal(descSize, 'desktop')}rem; }

                /* Tablet */
                @media (max-width: 1024px) {
                    .${uniqueId} {
                        margin-top: ${getVal(marginTop, 'tablet')}px;
                        margin-bottom: ${getVal(marginBottom, 'tablet')}px;
                    }
                    .${uniqueId} .inner-container {
                        width: ${getVal(width, 'tablet')}%;
                        min-height: ${getVal(minHeight, 'tablet')}px;
                        padding-top: ${getVal(paddingTop, 'tablet')}px;
                        padding-bottom: ${getVal(paddingBottom, 'tablet')}px;
                        padding-left: ${getVal(paddingLeft, 'tablet')}px;
                        padding-right: ${getVal(paddingRight, 'tablet')}px;
                    }
                    .${uniqueId} h2 { font-size: ${getVal(titleSize, 'tablet')}rem; }
                    .${uniqueId} p { font-size: ${getVal(descSize, 'tablet')}rem; }
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .${uniqueId} {
                        margin-top: ${getVal(marginTop, 'mobile')}px;
                        margin-bottom: ${getVal(marginBottom, 'mobile')}px;
                    }
                    .${uniqueId} .inner-container {
                        width: ${getVal(width, 'mobile')}%;
                        min-height: ${getVal(minHeight, 'mobile')}px;
                        padding-top: ${getVal(paddingTop, 'mobile')}px;
                        padding-bottom: ${getVal(paddingBottom, 'mobile')}px;
                        padding-left: ${getVal(paddingLeft, 'mobile')}px;
                        padding-right: ${getVal(paddingRight, 'mobile')}px;
                    }
                    .${uniqueId} h2 { font-size: ${getVal(titleSize, 'mobile')}rem; }
                    .${uniqueId} p { font-size: ${getVal(descSize, 'mobile')}rem; }
                }
            `}} />

            <div className="inner-container" style={{
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: borderRadius,
                border: `${borderWidth} solid ${borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: alignContent === 'center' ? 'center' : alignContent === 'right' ? 'flex-end' : 'flex-start',
                textAlign: alignContent,
                transition: 'all 0.3s ease'
            }}>
                {image && (
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        marginBottom: '1.5rem',
                    }}>
                        <Image
                            src={image}
                            alt={title}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                            style={{
                                borderRadius: 'calc(' + borderRadius + ' / 2)'
                            }}
                            
                        />
                    </div>
                )}

                <h2 style={{
                    fontFamily: titleFontFamily,
                    fontWeight: titleWeight,
                    color: titleColor,
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                    margin: 0,
                    paddingBottom: '1rem'
                }}>
                    {title}
                </h2>

                <p style={{
                    fontFamily: descFontFamily,
                    color: descColor,
                    lineHeight: 1.6,
                    maxWidth: '65ch',
                    whiteSpace: 'pre-line',
                    margin: 0
                }}>
                    {description}
                </p>
            </div>
        </div>
    );
};
