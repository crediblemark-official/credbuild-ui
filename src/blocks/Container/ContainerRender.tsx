"use client";

import React, { useId } from "react";
import { DropZone } from "@crediblemark/build";
import { getVal, getTabletVal, getMobileVal } from "../../utils";
import type { ContainerProps } from "./types";

export const ContainerRender = ({
    content,
    media,
    styling
}: ContainerProps) => {
    const { contentWidth, width } = content;
    const { backgroundImage } = media;
    const {
        containerLayout, minHeight,
        flexDirection, flexWrap, justifyContent, alignItems, justifyItems,
        gridColumns, gridTemplate, gridRows, gridAutoFlow,
        columnGap, rowGap,
        mobileBehavior, scrollBehavior, itemWidth,
        backgroundColor, backgroundGradient, backgroundSize, backgroundPosition, backgroundRepeat, backgroundAttachment,
        backdropBlur, overlayColor,
        borderStyle, borderWidth, borderColor, borderRadius,
        boxShadow,
        textColor, textAlign,
        marginTop, marginBottom, marginLeft, marginRight,
        paddingTop, paddingBottom, paddingLeft, paddingRight,
        zIndex, overflow, cssId, cssClass,
        position, top, animation
    } = styling;

    // Helper for legacy string props
    const s = (val: any) => {
        if (typeof val === 'string') return parseInt(val) || 0;
        return val;
    }

    const isBoxed = contentWidth === 'boxed';
    const innerWidth = isBoxed ? (width || '1140px') : '100%';
    const isGrid = containerLayout === 'grid';
    const isScroll = scrollBehavior === 'horizontal';

    const computedMinHeight = minHeight === '100vh' ? '100vh' : minHeight;

    const cols = parseInt(String(gridColumns || "3"));
    let safeColumns = !isNaN(cols) && cols > 0 ? `repeat(${cols}, 1fr)` : gridColumns;
    
    if (gridColumns === 'custom' && gridTemplate) {
        safeColumns = gridTemplate;
    }

    const rows = parseInt(String(gridRows || "1"));
    const safeRows = !isNaN(rows) && rows > 0 ? `repeat(${rows}, 1fr)` : gridRows;

    const uniqueId = `cnt-${useId().replace(/:/g, "")}`;
    const combinedClass = cssClass ? `${cssClass} ${uniqueId}` : uniqueId;

    const animationClasses = {
        none: "",
        fadeIn: "animate-in fade-in duration-700",
        slideUp: "animate-in slide-in-from-bottom-10 fade-in duration-700",
        zoomIn: "animate-in zoom-in-95 fade-in duration-700",
        slideRight: "animate-in slide-in-from-left-10 fade-in duration-700",
    };

    const commonStyles = `
        column-gap: ${columnGap || '20px'} !important;
        row-gap: ${rowGap || '20px'} !important;
        justify-content: ${justifyContent || 'flex-start'} !important;
        align-items: ${alignItems || 'stretch'} !important;
    `;

    const gridStyles = `
        display: grid !important;
        grid-template-columns: ${safeColumns} !important;
        grid-template-rows: ${safeRows} !important;
        grid-auto-flow: ${gridAutoFlow || 'row'} !important;
        justify-items: ${justifyItems || 'stretch'} !important;
        width: 100% !important;
        ${commonStyles}
    `;

    const flexStyles = `
        display: flex !important;
        flex-direction: ${flexDirection || 'row'} !important;
        flex-wrap: ${flexWrap || 'wrap'} !important;
        width: 100% !important;
        ${commonStyles}
    `;

    const getScrollStyles = () => {
        
        return `
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            justify-content: flex-start !important;
            padding-bottom: 20px !important;
            -webkit-overflow-scrolling: touch;
            grid-template-columns: none !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar { display: none; }
        `;
    };

    const getScrollItemStyles = (isMobile: boolean) => {
        const iWidth = isMobile ? getMobileVal(itemWidth, 85) : getVal(itemWidth, 85);
        return `
            flex: 0 0 ${iWidth}% !important;
            width: ${iWidth}% !important;
            max-width: ${iWidth}% !important;
            scroll-snap-align: center;
            margin-right: ${columnGap || '20px'} !important;
            margin-bottom: 0 !important;
        `;
    }

    const scrollCss = isScroll ? `
        .${uniqueId} .credbuild-dropzone > div {
            ${getScrollStyles()}
        }
        .${uniqueId} .credbuild-dropzone > div > * {
            ${getScrollItemStyles(false)}
        }
        .${uniqueId} .credbuild-dropzone > div > *:last-child {
            margin-right: 0 !important;
        }
    ` : "";

    const mobileScrollCss = mobileBehavior === 'scroll' ? `
        @media (max-width: 768px) {
            .${uniqueId} .credbuild-dropzone > div {
                ${getScrollStyles()}
            }
            .${uniqueId} .credbuild-dropzone > div > * {
                ${getScrollItemStyles(true)}
            }
            .${uniqueId} .credbuild-dropzone > div > *:last-child {
                margin-right: 0 !important;
            }
        }
    ` : `
        @media (max-width: 768px) {
            .${uniqueId} .credbuild-dropzone > div {
                ${isGrid ? `
                    grid-template-columns: 1fr !important;
                    grid-auto-flow: row !important;
                ` : `
                    flex-direction: column !important;
                    flex-wrap: nowrap !important;
                `}
            }
            .${uniqueId} .credbuild-dropzone > div > * {
                width: 100% !important;
                max-width: 100% !important;
                margin-right: 0 !important;
            }
        }
    `;

    return (
        <div
            id={cssId}
            className={`${combinedClass} ${animation ? animationClasses[animation] : ''}`}
            style={{
                position: position || 'relative',
                top: top || 'auto',
                width: '100%',
                minHeight: computedMinHeight,
                backgroundColor: backgroundColor || 'transparent',
                backgroundImage: backgroundGradient || (backgroundImage ? `url(${backgroundImage})` : undefined),
                backgroundSize: backgroundSize || 'cover',
                backgroundPosition: backgroundPosition || 'center',
                backgroundRepeat: backgroundRepeat || 'no-repeat',
                backgroundAttachment: backgroundAttachment || 'scroll',
                backdropFilter: backdropBlur ? `blur(${backdropBlur})` : undefined,
                WebkitBackdropFilter: backdropBlur ? `blur(${backdropBlur})` : undefined,
                borderStyle: borderStyle || 'none',
                borderWidth: borderWidth || '0',
                borderColor: borderColor || 'transparent',
                borderRadius: borderRadius || '0',
                boxShadow: boxShadow || 'none',
                marginTop: getVal(s(marginTop), 0),
                marginBottom: getVal(s(marginBottom), 0),
                marginLeft: getVal(s(marginLeft), 0) === 0 ? 'auto' : getVal(s(marginLeft), 0),
                marginRight: getVal(s(marginRight), 0) === 0 ? 'auto' : getVal(s(marginRight), 0),
                zIndex: zIndex || 0,
                overflow: overflow || 'visible',
                display: 'flex',
                justifyContent: 'center',
                color: textColor,
                textAlign,
            }}
        >
            <style>{`
                .${uniqueId} .credbuild-dropzone > div {
                    ${isGrid ? gridStyles : flexStyles}
                }
                ${scrollCss}
                ${mobileScrollCss}

                @media (max-width: 1024px) {
                    .${uniqueId} {
                        margin-top: ${getTabletVal(s(marginTop), 0)}px !important;
                        margin-bottom: ${getTabletVal(s(marginBottom), 0)}px !important;
                    }
                }
                @media (max-width: 640px) {
                    .${uniqueId} {
                        margin-top: ${getMobileVal(s(marginTop), 0)}px !important;
                        margin-bottom: ${getMobileVal(s(marginBottom), 0)}px !important;
                    }
                }
            `}</style>

            {overlayColor && (
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: overlayColor,
                    zIndex: -1,
                    pointerEvents: 'none',
                    borderRadius: borderRadius || '0',
                }} />
            )}

            <div 
                className="credbuild-dropzone" 
                style={{
                    width: innerWidth,
                    maxWidth: '100%',
                    paddingTop: getVal(s(paddingTop), 20),
                    paddingBottom: getVal(s(paddingBottom), 20),
                    paddingLeft: getVal(s(paddingLeft), 0),
                    paddingRight: getVal(s(paddingRight), 0),
                    display: 'block',
                    minHeight: (isGrid || containerLayout === 'flex') ? '80px' : 'auto', 
                }}
            >
                <style>{`
                    @media (max-width: 1024px) {
                        .${uniqueId} .credbuild-dropzone {
                            padding-top: ${getTabletVal(s(paddingTop), 20)}px !important;
                            padding-bottom: ${getTabletVal(s(paddingBottom), 20)}px !important;
                            padding-left: ${getTabletVal(s(paddingLeft), 0)}px !important;
                            padding-right: ${getTabletVal(s(paddingRight), 0)}px !important;
                        }
                    }
                    @media (max-width: 640px) {
                        .${uniqueId} .credbuild-dropzone {
                            padding-top: ${getMobileVal(s(paddingTop), 20)}px !important;
                            padding-bottom: ${getMobileVal(s(paddingBottom), 20)}px !important;
                            padding-left: ${getMobileVal(s(paddingLeft), 0)}px !important;
                            padding-right: ${getMobileVal(s(paddingRight), 0)}px !important;
                        }
                    }
                `}</style>
                <DropZone zone="default" />
            </div>
        </div>
    );
};
