"use client";

import React, { useId } from "react";
import DynamicIcon from "@/components/credbuild/DynamicIcon";
import { getVal, getTabletVal, getMobileVal } from "@/components/credbuild/utils";
import type { InfoGridProps } from "./types";

export const InfoGridRender = ({ content, styling }: InfoGridProps) => {
    const id = useId().replace(/:/g, '');
    const uniqueClass = `info-grid-${id}`;
    
    const { title, items = [] } = content;
    const s = styling;

    return (
        <section className={`${uniqueClass} overflow-hidden`} style={{ backgroundColor: s.sectionBg }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding-top: ${getVal(s.sectionPadding, 40)}px;
                        padding-bottom: ${getVal(s.sectionPadding, 40)}px;
                        padding-left: 16px;
                        padding-right: 16px;
                    }
                    .${uniqueClass} .main-container {
                        background-color: ${s.containerBg};
                        border: ${getVal(s.containerBorderWidth, 1)}px solid ${s.containerBorderColor};
                        border-radius: ${getVal(s.containerRadius, 24)}px;
                        padding: ${getVal(s.containerPadding, 40)}px;
                    }
                    .${uniqueClass} .grid-container {
                        display: grid;
                        grid-template-columns: repeat(${getVal(s.columns, 2)}, minmax(0, 1fr));
                        gap: ${getVal(s.gap, 24)}px;
                    }
                    .${uniqueClass} .info-card {
                        background-color: ${s.cardBg};
                        border: ${getVal(s.cardBorderWidth, 1)}px solid ${s.cardBorderColor};
                        border-radius: ${getVal(s.cardRadius, 16)}px;
                        padding: ${getVal(s.cardPadding, 24)}px;
                        display: flex;
                        align-items: flex-start;
                        gap: 16px;
                    }
                    .${uniqueClass} .icon-box {
                        background-color: ${s.iconBg};
                        color: ${s.iconColor};
                        border-radius: ${getVal(s.iconRadius, 12)}px;
                        width: ${getVal(s.iconSize, 48)}px;
                        height: ${getVal(s.iconSize, 48)}px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }
                    .${uniqueClass} .icon-box svg {
                        width: ${Number(getVal(s.iconSize, 48)) * 0.5}px;
                        height: ${Number(getVal(s.iconSize, 48)) * 0.5}px;
                    }

                    @media (max-width: 1024px) {
                        .${uniqueClass} {
                            padding-top: ${getTabletVal(s.sectionPadding, 32)}px;
                            padding-bottom: ${getTabletVal(s.sectionPadding, 32)}px;
                        }
                        .${uniqueClass} .main-container {
                            padding: ${getTabletVal(s.containerPadding, 32)}px;
                            border-radius: ${getTabletVal(s.containerRadius, 20)}px;
                        }
                        .${uniqueClass} .grid-container {
                            grid-template-columns: repeat(${getTabletVal(s.columns, 2)}, minmax(0, 1fr));
                            gap: ${getTabletVal(s.gap, 20)}px;
                        }
                        .${uniqueClass} .info-card {
                            padding: ${getTabletVal(s.cardPadding, 20)}px;
                            border-radius: ${getTabletVal(s.cardRadius, 14)}px;
                        }
                        .${uniqueClass} .icon-box {
                            width: ${getTabletVal(s.iconSize, 40)}px;
                            height: ${getTabletVal(s.iconSize, 40)}px;
                        }
                        .${uniqueClass} .icon-box svg {
                            width: ${Number(getTabletVal(s.iconSize, 40)) * 0.5}px;
                            height: ${Number(getTabletVal(s.iconSize, 40)) * 0.5}px;
                        }
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding-top: ${getMobileVal(s.sectionPadding, 24)}px;
                            padding-bottom: ${getMobileVal(s.sectionPadding, 24)}px;
                        }
                        .${uniqueClass} .main-container {
                            padding: ${getMobileVal(s.containerPadding, 24)}px;
                            border-radius: ${getMobileVal(s.containerRadius, 16)}px;
                        }
                        .${uniqueClass} .grid-container {
                            grid-template-columns: repeat(${getMobileVal(s.columns, 1)}, minmax(0, 1fr));
                            gap: ${getMobileVal(s.gap, 16)}px;
                        }
                        .${uniqueClass} .info-card {
                            padding: ${getMobileVal(s.cardPadding, 16)}px;
                            border-radius: ${getMobileVal(s.cardRadius, 12)}px;
                        }
                        .${uniqueClass} .icon-box {
                            width: ${getMobileVal(s.iconSize, 36)}px;
                            height: ${getMobileVal(s.iconSize, 36)}px;
                        }
                        .${uniqueClass} .icon-box svg {
                            width: ${Number(getMobileVal(s.iconSize, 36)) * 0.5}px;
                            height: ${Number(getMobileVal(s.iconSize, 36)) * 0.5}px;
                        }
                    }
                `
            }} />

            <div className={`mx-auto ${s.containerMaxWidth} main-container`}>
                {title && (
                    <h2 
                        className="text-2xl md:text-3xl font-bold mb-8 md:mb-12" 
                        style={{ color: s.titleColor, textAlign: s.alignment }}
                    >
                        {title}
                    </h2>
                )}

                <div className="grid-container">
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="info-card">
                                <div className="icon-box">
                                    <DynamicIcon name={item.icon || "Info"} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 
                                        className="text-sm font-semibold uppercase tracking-wider mb-1 opacity-80"
                                        style={{ color: s.labelColor }}
                                    >
                                        {item.label}
                                    </h3>
                                    <p 
                                        className="text-base md:text-lg font-medium leading-snug"
                                        style={{ color: s.valueColor }}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
