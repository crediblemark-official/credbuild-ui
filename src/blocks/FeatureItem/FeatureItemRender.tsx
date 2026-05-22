"use client";

import * as React from "react";
import { useId } from "react";
import DynamicIcon from "../../DynamicIcon";
import { ArrowRight } from "lucide-react";
import { getVal, getTabletVal, getMobileVal } from "../../utils";
import type { FeatureItemProps } from "./types";

export const FeatureItemRender = ({ content, styling }: FeatureItemProps) => {
    const { items = [] } = content || {};
    const {
        layout, columns, gap, scrollBehavior, itemWidth,
        containerMaxWidth, sectionPadding, sectionBg,
        bgColor, borderColor, borderWidth,
        borderRadius, shadow, padding, paddingTop, paddingBottom,
        paddingLeft, paddingRight, maxWidth, hoverEffect,
        iconSize, iconColor, iconBg, iconShape,
        alignment, titleColor, descColor, badgeColor, badgeBg, animation
    } = styling || {} as any;

    const uniqueId = useId().replace(/:/g, "");
    const listId = `feature-list-${uniqueId}`;

    const shadowClasses = {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
    };

    const alignClasses = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    };

    const shapeClasses = {
        circle: "rounded-full",
        square: "rounded-lg",
        none: "",
    };

    const animationClasses = {
        none: "",
        fadeIn: "animate-in fade-in duration-700",
        slideUp: "animate-in slide-in-from-bottom-10 fade-in duration-700",
        zoomIn: "animate-in zoom-in-95 fade-in duration-700",
    };

    const hoverClasses = {
        none: "",
        lift: "hover:-translate-y-2 hover:shadow-xl",
        glow: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        scale: "hover:scale-[1.03]",
    };

    // Responsive Values (Card)
    const pt = Number(getVal(paddingTop || padding, 24));
    const pb = Number(getVal(paddingBottom || padding, 24));
    const pl = Number(getVal(paddingLeft || padding, 24));
    const pr = Number(getVal(paddingRight || padding, 24));

    const ptTab = Number(getTabletVal(paddingTop || padding, 24));
    const pbTab = Number(getTabletVal(paddingBottom || padding, 24));
    const plTab = Number(getTabletVal(paddingLeft || padding, 24));
    const prTab = Number(getTabletVal(paddingRight || padding, 24));

    const ptMob = Number(getMobileVal(paddingTop || padding, 20));
    const pbMob = Number(getMobileVal(paddingBottom || padding, 20));
    const plMob = Number(getMobileVal(paddingLeft || padding, 20));
    const prMob = Number(getMobileVal(paddingRight || padding, 20));

    const bw = Number(getVal(borderWidth, 0));
    const bwTab = Number(getTabletVal(borderWidth, 0));
    const bwMob = Number(getMobileVal(borderWidth, 0));

    const br = Number(getVal(borderRadius, 0));
    const brTab = Number(getTabletVal(borderRadius, 0));
    const brMob = Number(getMobileVal(borderRadius, 0));

    // Responsive Column Values
    const cols = Number(getVal(columns, 3));
    const colsTab = Number(getTabletVal(columns, 2));
    const colsMob = Number(getMobileVal(columns, 1));

    // Responsive Gap Values
    const g = Number(getVal(gap, 24));
    const gTab = Number(getTabletVal(gap, 20));
    const gMob = Number(getMobileVal(gap, 16));

    // Section Padding (Outer)
    const sp = Number(getVal(sectionPadding, 40));
    const spTab = Number(getTabletVal(sectionPadding, 24));
    const spMob = Number(getMobileVal(sectionPadding, 20));

    // Responsive Icon Size
    const isize = Number(getVal(iconSize, 24));
    const isizeTab = Number(getTabletVal(iconSize, 24));
    const isizeMob = Number(getMobileVal(iconSize, 20));

    const isScroll = scrollBehavior === "horizontal";

    return (
        <div 
            className={`w-full ${listId}`} 
            style={{ 
                background: sectionBg,
                paddingLeft: `${sp}px`,
                paddingRight: `${sp}px`
            }}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 1024px) {
                    .${listId} {
                        padding-left: ${spTab}px !important;
                    }
                    .${listId} .feature-card {
                        padding-top: ${ptTab}px !important;
                        padding-bottom: ${pbTab}px !important;
                        padding-left: ${plTab}px !important;
                        padding-right: ${prTab}px !important;
                        border-width: ${bwTab}px !important;
                        border-radius: ${brTab}px !important;
                    }
                    .${listId} .icon-wrapper {
                        width: ${isizeTab * 2}px !important;
                        height: ${isizeTab * 2}px !important;
                    }
                    .${listId} .icon-svg {
                        width: ${isizeTab}px !important;
                        height: ${isizeTab}px !important;
                    }
                }
                @media (max-width: 768px) {
                    .${listId} {
                        padding-left: ${spMob}px !important;
                        padding-right: ${spMob}px !important;
                    }
                    .${listId} .feature-card {
                        padding-top: ${ptMob}px !important;
                        padding-bottom: ${pbMob}px !important;
                        padding-left: ${plMob}px !important;
                        padding-right: ${prMob}px !important;
                        border-width: ${bwMob}px !important;
                        border-radius: ${brMob}px !important;
                    }
                    .${listId} .icon-wrapper {
                        width: ${isizeMob * 2}px !important;
                        height: ${isizeMob * 2}px !important;
                    }
                    .${listId} .icon-svg {
                        width: ${isizeMob}px !important;
                        height: ${isizeMob}px !important;
                    }
                }

                .${listId} .feature-grid {
                    display: grid;
                    grid-template-columns: repeat(${cols}, 1fr);
                    gap: ${g}px;
                }

                @media (max-width: 1024px) {
                    .${listId} .feature-grid {
                        grid-template-columns: repeat(${colsTab}, 1fr);
                        gap: ${gTab}px;
                    }
                }

                @media (max-width: 768px) {
                    .${listId} .feature-grid {
                        grid-template-columns: repeat(${colsMob}, 1fr);
                        gap: ${gMob}px;
                    }
                }

                ${isScroll ? `
                @media (max-width: 768px) {
                    .${listId} .feature-grid {
                        display: flex !important;
                        flex-wrap: nowrap !important;
                        overflow-x: auto !important;
                        scroll-snap-type: x mandatory;
                        padding-bottom: 20px;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                        gap: ${gMob}px !important;
                        width: calc(100% + ${spMob * 2}px) !important;
                        margin-left: -${spMob}px !important;
                        padding-left: ${spMob}px !important;
                        padding-right: ${spMob}px !important;
                    }
                    .${listId} .feature-grid::-webkit-scrollbar {
                        display: none;
                    }
                    .${listId} .feature-card-wrapper {
                        flex: 0 0 ${getMobileVal(itemWidth, 85)}% !important;
                        width: ${getMobileVal(itemWidth, 85)}% !important;
                        scroll-snap-align: center;
                    }
                }
                ` : ""}
            `}} />

            <div className={`mx-auto ${containerMaxWidth || 'max-w-screen-xl'}`}>
                <div className="feature-grid">
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="feature-card-wrapper">
                                <div 
                                    className={`
                                        feature-card w-full h-full ${maxWidth || 'max-w-full'} transition-all duration-300 border relative overflow-hidden group
                                        ${shadowClasses[shadow] || ''}
                                        ${animation ? animationClasses[animation] : ''}
                                        ${hoverEffect ? hoverClasses[hoverEffect] : ''}
                                    `}
                                    style={{
                                        backgroundColor: bgColor,
                                        borderColor: borderColor,
                                        borderWidth: `${bw}px`,
                                        borderRadius: `${br}px`,
                                        paddingTop: `${pt}px`,
                                        paddingBottom: `${pb}px`,
                                        paddingLeft: `${pl}px`,
                                        paddingRight: `${pr}px`,
                                    }}
                                >
                                    {item.badge && (
                                        <div 
                                            className="absolute top-4 right-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded"
                                            style={{ backgroundColor: badgeBg, color: badgeColor }}
                                        >
                                            {item.badge}
                                        </div>
                                    )}

                                    <div className={`flex ${layout === 'top' ? 'flex-col ' + alignClasses[alignment] : layout === 'left' ? 'flex-row gap-4 items-start' : 'flex-row-reverse gap-4 items-start'}`}>
                                        {/* Icon Wrapper */}
                                        {iconShape !== 'none' ? (
                                            <div 
                                                className={`icon-wrapper flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 ${shapeClasses[iconShape]} ${layout === 'top' ? 'mb-4' : ''}`}
                                                style={{
                                                    width: `${isize * 2}px`,
                                                    height: `${isize * 2}px`,
                                                    backgroundColor: iconBg,
                                                }}
                                            >
                                                <DynamicIcon name={item.icon || "HelpCircle"} className="icon-svg" size={isize} color={iconColor} />
                                            </div>
                                        ) : (
                                            <div className={`${layout === 'top' ? 'mb-4' : ''} shrink-0 transition-transform duration-500 group-hover:scale-110`}>
                                                <DynamicIcon name={item.icon || "HelpCircle"} className="icon-svg" size={isize} color={iconColor} />
                                            </div>
                                        )}

                                        {/* Text Content */}
                                        <div className={`flex-1 ${layout === 'top' ? alignClasses[alignment] : ''}`}>
                                            {item.title && (
                                                <h3 
                                                    className="text-xl font-bold mb-2 tracking-tight"
                                                    style={{ color: titleColor }}
                                                >
                                                    {item.title}
                                                </h3>
                                            )}
                                            {item.description && (
                                                <p 
                                                    className="text-base leading-relaxed mb-4"
                                                    style={{ color: descColor }}
                                                >
                                                    {item.description}
                                                </p>
                                            )}

                                            {item.buttonText && (
                                                <a 
                                                    href={item.buttonLink}
                                                    className="inline-flex items-center justify-center px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 hover:brightness-110 active:scale-95"
                                                    style={{ backgroundColor: iconColor, color: '#ffffff' }}
                                                >
                                                    {item.buttonText}
                                                    <ArrowRight size={14} className="ml-2" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
