"use client";

import React, { useId } from "react";
import { IconGridProps } from "./types";
import { ResponsiveValue } from "@/components/credbuild/utils";

export const IconGridRender = ({
    content,
    typography,
    styling
}: IconGridProps) => {
    const { title, items } = content;
    const { titleSize, titleColor, iconSize, iconColor, itemTitleSize, itemDescriptionSize, itemTextColor } = typography;
    const { columns, mobileLayout, backgroundColor, padding, cardBackgroundColor, cardBorderColor } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `icon-grid-${id}`;

    const getVal = (val: ResponsiveValue | undefined, fallback: number) => {
        if (typeof val === 'number') return val;
        return val?.desktop ?? fallback;
    };
    const getTabletVal = (val: ResponsiveValue | undefined, fallback: number) => {
        if (typeof val === 'number') return val;
        return val?.tablet ?? val?.desktop ?? fallback;
    };
    const getMobileVal = (val: ResponsiveValue | undefined, fallback: number) => {
        if (typeof val === 'number') return val;
        return val?.mobile ?? val?.tablet ?? val?.desktop ?? fallback;
    };

    return (
        <section className={uniqueClass} style={{
            background: backgroundColor,
            color: 'white',
            position: 'relative',
        }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${uniqueClass} {
                    padding: ${getVal(padding, 80)}px 20px;
                }
                .${uniqueClass} .grid-title {
                    font-size: ${getVal(titleSize, 48)}px;
                }
                .${uniqueClass} .grid-icon {
                    font-size: ${getVal(iconSize, 56)}px;
                }
                .${uniqueClass} .grid-item-title {
                    font-size: ${getVal(itemTitleSize, 24)}px;
                }
                .${uniqueClass} .grid-item-desc {
                    font-size: ${getVal(itemDescriptionSize, 16)}px;
                }
                
                .${uniqueClass} .icon-grid-container {
                    display: grid;
                    grid-template-columns: repeat(${columns}, 1fr);
                    gap: 20px;
                }

                @media (max-width: 1024px) {
                    .${uniqueClass} {
                        padding: ${getTabletVal(padding, 60)}px 20px;
                    }
                    .${uniqueClass} .grid-title {
                        font-size: ${getTabletVal(titleSize, 40)}px;
                    }
                    .${uniqueClass} .grid-icon {
                        font-size: ${getTabletVal(iconSize, 48)}px;
                    }
                    .${uniqueClass} .grid-item-title {
                        font-size: ${getTabletVal(itemTitleSize, 20)}px;
                    }
                    .${uniqueClass} .grid-item-desc {
                        font-size: ${getTabletVal(itemDescriptionSize, 15)}px;
                    }
                }

                @media (max-width: 768px) {
                    .${uniqueClass} {
                        padding: ${getMobileVal(padding, 40)}px 20px;
                    }
                    .${uniqueClass} .grid-title {
                        font-size: ${getMobileVal(titleSize, 28)}px;
                    }
                     .${uniqueClass} .grid-icon {
                        font-size: ${getMobileVal(iconSize, 40)}px;
                    }
                    .${uniqueClass} .grid-item-title {
                        font-size: ${getMobileVal(itemTitleSize, 18)}px;
                    }
                    .${uniqueClass} .grid-item-desc {
                        font-size: ${getMobileVal(itemDescriptionSize, 14)}px;
                    }

                    .${uniqueClass} .icon-grid-container {
                        ${mobileLayout === "scroll" ? `
                            display: flex;
                            overflow-x: auto;
                            overflow-y: hidden;
                            scroll-snap-type: x mandatory;
                            -webkit-overflow-scrolling: touch;
                            padding-bottom: 20px;
                            margin-left: -20px;
                            margin-right: -20px;
                            padding-left: 20px;
                            padding-right: 20px;
                        ` : `
                            grid-template-columns: 1fr;
                        `}
                    }
                    
                    ${mobileLayout === "scroll" ? `
                    .${uniqueClass} .icon-grid-item {
                        min-width: 280px;
                        scroll-snap-align: center;
                    }
                    ` : ''}
                }
            `
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <h2 className="grid-title" style={{
                    textAlign: 'center',
                    color: titleColor,
                    marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                }}>
                    {title}
                </h2>
                <div className="icon-grid-container">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="icon-grid-item"
                            style={{
                                backgroundColor: cardBackgroundColor,
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${cardBorderColor}`,
                                borderRadius: '16px',
                                padding: 'clamp(28px, 5vw, 40px) clamp(20px, 4vw, 30px)',
                                textAlign: 'center',
                                transition: 'transform 0.3s, background-color 0.3s',
                                cursor: 'default',
                                color: itemTextColor,
                            }}
                        >
                            <div className="grid-icon" style={{
                                color: iconColor || 'inherit',
                                marginBottom: '1.5rem',
                                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                            }}>
                                {item.icon && (item.icon.includes('fa-') || item.icon.includes('fas ') || item.icon.includes('far ') || item.icon.includes('fab ')) ? (
                                    <i className={item.icon}></i>
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <h3 className="grid-item-title" style={{
                                marginBottom: '1rem',
                                fontWeight: '700',
                            }}>
                                {item.title}
                            </h3>
                            <p className="grid-item-desc" style={{
                                opacity: 0.95,
                                lineHeight: '1.6',
                            }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
