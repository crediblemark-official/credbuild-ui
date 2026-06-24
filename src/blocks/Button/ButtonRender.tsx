"use client";

import React, { useId } from "react";
import { ButtonProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

// Sanitasi URL agar tidak rentan XSS via javascript: protocol
const safeHref = (url: string): string => {
    if (!url || typeof url !== 'string') return '#';
    const trimmed = url.trim().toLowerCase();
    const allowed = ['https://', 'http://', 'mailto:', 'tel:', '/', '#'];
    if (allowed.some(prefix => trimmed.startsWith(prefix))) return url.trim();
    return '#';
};

export const ButtonRender = ({
    content,
    styling
}: ButtonProps) => {
    const { text = "Click Me", link = "#", pixelEvent = "" } = content;
    const {
        align = "center",
        buttonColor = "#0ea5e9",
        textColor = "#ffffff",
        paddingX,
        paddingY,
        fontSize,
        borderRadius,
        marginTop,
        marginBottom,
    } = styling;

    const id = useId().replace(/:/g, "");
    const uniqueClass = `btn-${id}`;

    return (
        <div className={uniqueClass} style={{
            display: "flex",
            justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
            width: "100%",
        }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${uniqueClass} a {
                    display: inline-block;
                    text-decoration: none;
                    font-weight: 600;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                    transition: opacity 0.2s;
                    background-color: ${buttonColor};
                    color: ${textColor};
                    padding: ${getVal(paddingY, 12)}px ${getVal(paddingX, 24)}px;
                    font-size: ${getVal(fontSize, 16)}px;
                    border-radius: ${getVal(borderRadius, 6)}px;
                    margin-top: ${getVal(marginTop, 16)}px;
                    margin-bottom: ${getVal(marginBottom, 16)}px;
                }
                .${uniqueClass} a:hover {
                    opacity: 0.9;
                }
                @media (max-width: 1024px) {
                    .${uniqueClass} a {
                        padding: ${getTabletVal(paddingY, 12)}px ${getTabletVal(paddingX, 22)}px;
                        font-size: ${getTabletVal(fontSize, 15)}px;
                        border-radius: ${getTabletVal(borderRadius, 6)}px;
                        margin-top: ${getTabletVal(marginTop, 16)}px;
                        margin-bottom: ${getTabletVal(marginBottom, 16)}px;
                    }
                }
                @media (max-width: 640px) {
                    .${uniqueClass} a {
                        padding: ${getMobileVal(paddingY, 10)}px ${getMobileVal(paddingX, 20)}px;
                        font-size: ${getMobileVal(fontSize, 14)}px;
                        border-radius: ${getMobileVal(borderRadius, 6)}px;
                        margin-top: ${getMobileVal(marginTop, 12)}px;
                        margin-bottom: ${getMobileVal(marginBottom, 12)}px;
                    }
                }
            `}} />
            <a
                href={safeHref(link)}
                data-pixel-event={pixelEvent || undefined}
            >
                {text}
            </a>
        </div>
    );
};
