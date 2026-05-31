"use client";

import React, { useId } from "react";
import { getVal, getTabletVal, getMobileVal } from "../../utils";
import type { SectionHeaderProps } from "./types";

export const SectionHeaderRender = ({ content, styling, typography }: SectionHeaderProps) => {
    const { badge, title, subtitle } = content;
    const { alignment, backgroundColor, padding, titleColor, subtitleColor, badgeColor, badgeTextColor, maxWidth, showAccent } = styling;
    const { titleSize, subtitleSize } = typography;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `header-${id}`;

    const alignMap = {
        left: "flex-start",
        center: "center",
        right: "flex-end"
    };

    const textAlignMap = {
        left: "left",
        center: "center",
        right: "right"
    };

    return (
        <section className={uniqueClass} style={{ background: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 60)}px 24px;
                        display: flex;
                        flex-direction: column;
                        align-items: ${alignMap[alignment]};
                        text-align: ${textAlignMap[alignment]};
                    }
                    .${uniqueClass} .header-wrapper {
                        max-width: ${getVal(maxWidth, 800)}px;
                        width: 100%;
                    }
                    .${uniqueClass} .badge {
                        display: inline-block;
                        padding: 6px 16px;
                        background: ${badgeColor};
                        color: ${badgeTextColor};
                        border-radius: 99px;
                        font-size: 12px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        margin-bottom: 20px;
                    }
                    .${uniqueClass} .title {
                        font-size: ${getVal(titleSize, 48)}px;
                        color: ${titleColor};
                        font-weight: 800;
                        line-height: 1.1;
                        letter-spacing: -0.03em;
                        margin-bottom: 24px;
                        position: relative;
                    }
                    .${uniqueClass} .title .accent {
                        display: ${String(showAccent) === "true" ? "block" : "none"};
                        width: 60px;
                        height: 4px;
                        background: ${badgeColor};
                        margin: ${alignment === "center" ? "16px auto 0" : "16px 0 0"};
                        border-radius: 2px;
                    }
                    .${uniqueClass} .subtitle {
                        font-size: ${getVal(subtitleSize, 18)}px;
                        color: ${subtitleColor};
                        line-height: 1.6;
                        opacity: 0.8;
                    }

                    @media (max-width: 1024px) {
                        .${uniqueClass} {
                            padding: ${getTabletVal(padding, 60)}px 24px;
                        }
                        .${uniqueClass} .header-wrapper {
                            max-width: ${getTabletVal(maxWidth, 700)}px;
                        }
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 40)}px 20px;
                        }
                        .${uniqueClass} .header-wrapper {
                            max-width: ${getMobileVal(maxWidth, 500)}px;
                        }
                        .${uniqueClass} .title {
                            font-size: ${getMobileVal(titleSize, 32)}px;
                        }
                        .${uniqueClass} .subtitle {
                            font-size: ${getMobileVal(subtitleSize, 16)}px;
                        }
                    }
                `
            }} />
            <div className="header-wrapper">
                {badge && <span className="badge">{badge}</span>}
                <h2 className="title">
                    {title}
                    <div className="accent"></div>
                </h2>
                {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
        </section>
    );
};

