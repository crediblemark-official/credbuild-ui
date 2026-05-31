"use client";

import React, { useId } from "react";
import { getVal, getMobileVal, getTabletVal } from "../../utils";
import type { HeadingBlockProps } from "./types";

export const HeadingBlockRender = (props: HeadingBlockProps | any) => {
    // Normalize props for backward compatibility
    const content = props.content || { title: props.title || "Heading", level: "h1" };
    const styling = props.styling || {
        font: props.font || "inherit",
        fontWeight: "800",
        textAlign: "left",
        textColor: "#000000",
        backgroundColor: "transparent",
        paddingTop: props.paddingTop !== undefined ? { desktop: props.paddingTop } : { desktop: 64, tablet: 48, mobile: 32 },
        paddingBottom: props.paddingBottom !== undefined ? { desktop: props.paddingBottom } : { desktop: 64, tablet: 48, mobile: 32 },
        paddingLeft: { desktop: 24, tablet: 20, mobile: 16 },
        paddingRight: { desktop: 24, tablet: 20, mobile: 16 },
        marginTop: { desktop: 0, tablet: 0, mobile: 0 },
        marginBottom: { desktop: 0, tablet: 0, mobile: 0 },
        lineHeight: 1.2,
        letterSpacing: 0,
        textTransform: "none",
        maxWidth: 1200,
        animation: "none",
    };

    const typography = props.typography || {
        fontSize: { desktop: 48, tablet: 40, mobile: 32 },
    };

    const { title, level: Tag = "h1" } = content;
    const {
        font, fontWeight, textAlign, textColor, backgroundColor,
        paddingTop, paddingBottom, paddingLeft, paddingRight,
        marginTop, marginBottom,
        lineHeight, letterSpacing, textTransform, maxWidth, animation
    } = styling;
    const { fontSize } = typography;


    const id = useId().replace(/:/g, '');
    const uniqueClass = `heading-${id}`;

    const animationClasses = {
        none: "",
        fadeIn: "animate-in fade-in duration-700",
        slideUp: "animate-in slide-in-from-bottom-10 fade-in duration-700",
        zoomIn: "animate-in zoom-in-95 fade-in duration-700",
        slideRight: "animate-in slide-in-from-left-10 fade-in duration-700",
    };

    const maxWidthDesktop = getVal(maxWidth, 1200);
    const maxWidthTablet = getTabletVal(maxWidth, 1000);
    const maxWidthMobile = getMobileVal(maxWidth, 600);

    return (
        <div className={`${uniqueClass} ${animation ? (animationClasses[animation as keyof typeof animationClasses] || '') : ''}`} style={{ backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding-top: ${getVal(paddingTop, 64)}px;
                        padding-bottom: ${getVal(paddingBottom, 64)}px;
                        padding-left: ${getVal(paddingLeft, 24)}px;
                        padding-right: ${getVal(paddingRight, 24)}px;
                        margin-top: ${getVal(marginTop, 0)}px;
                        margin-bottom: ${getVal(marginBottom, 0)}px;
                        display: flex;
                        justify-content: ${textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start'};
                    }
                    .${uniqueClass} .heading-element {
                        font-family: ${font !== 'inherit' ? `"${font}", sans-serif` : 'inherit'};
                        font-size: ${getVal(fontSize, 48)}px;
                        font-weight: ${fontWeight};
                        color: ${textColor};
                        text-align: ${textAlign};
                        line-height: ${lineHeight};
                        letter-spacing: ${letterSpacing}em;
                        text-transform: ${textTransform};
                        max-width: ${maxWidthDesktop}px;
                        width: 100%;
                        margin: 0;
                    }

                    @media (max-width: 768px) {
                        .${uniqueClass} {
                            padding-top: ${getTabletVal(paddingTop, 48)}px;
                            padding-bottom: ${getTabletVal(paddingBottom, 48)}px;
                            padding-left: ${getTabletVal(paddingLeft, 20)}px;
                            padding-right: ${getTabletVal(paddingRight, 20)}px;
                        }
                        .${uniqueClass} .heading-element {
                            font-size: ${getTabletVal(fontSize, 40)}px;
                            max-width: ${maxWidthTablet}px;
                        }
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding-top: ${getMobileVal(paddingTop, 32)}px;
                            padding-bottom: ${getMobileVal(paddingBottom, 32)}px;
                            padding-left: ${getMobileVal(paddingLeft, 16)}px;
                            padding-right: ${getMobileVal(paddingRight, 16)}px;
                        }
                        .${uniqueClass} .heading-element {
                            font-size: ${getMobileVal(fontSize, 32)}px;
                            max-width: ${maxWidthMobile}px;
                        }
                    }
                `
            }} />
            <Tag className="heading-element">{title}</Tag>
        </div>
    );
};
