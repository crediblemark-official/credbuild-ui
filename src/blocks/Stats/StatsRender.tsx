"use client";

import React, { useId } from "react";
import { StatsProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const StatsRender = ({
    content,
    typography,
    styling
}: StatsProps) => {
    const { items } = content;
    const { valueFont = 'inherit', labelFont = 'inherit' } = typography;
    const {
        mobileLayout = 'stack',
        backgroundColor = '#ffffff',
        cardBgColor = '#fef2f2',
        cardBorderColor = '#fecaca',
        valueColor = '#dc2626',
        labelColor = '#475569',
        padding,
        cardBorderRadius
    } = styling;

    const id = "stats-" + useId().replace(/:/g, "");

    return (
        <section className={id}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${getVal(padding, 60)}px;
                    padding-bottom: ${getVal(padding, 60)}px;
                    background-color: ${backgroundColor};
                    padding-left: 20px;
                    padding-right: 20px;
                }
                .${id} .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .${id} .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
                    gap: 24px;
                }
                .${id} .card {
                    text-align: center;
                    padding: 32px 20px;
                    background-color: ${cardBgColor};
                    border-radius: ${getVal(cardBorderRadius, 16)}px;
                    border: 2px solid ${cardBorderColor};
                    transition: transform 0.3s, box-shadow 0.3s;
                    cursor: default;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .${id} .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
                }
                .${id} .value {
                    font-size: 3rem;
                    font-weight: 800;
                    color: ${valueColor};
                    margin-bottom: 8px;
                    line-height: 1.1;
                    font-family: ${valueFont !== 'inherit' ? `"${valueFont}", sans-serif` : 'inherit'};
                }
                .${id} .label {
                    font-size: 1rem;
                    color: ${labelColor};
                    font-weight: 600;
                    font-family: ${labelFont !== 'inherit' ? `"${labelFont}", sans-serif` : 'inherit'};
                }

                @media (max-width: 768px) {
                    .${id} {
                        padding-top: ${getTabletVal(padding, 40)}px;
                        padding-bottom: ${getTabletVal(padding, 40)}px;
                        padding-left: 0;
                        padding-right: 0;
                    }
                    .${id} .card {
                        border-radius: ${getTabletVal(cardBorderRadius, 12)}px;
                    }
                    .${id} .container {
                       padding-left: 20px;
                       padding-right: ${mobileLayout === 'scroll' ? '0' : '20px'};
                    }

                    .${id} .grid.mobile-scroll {
                        display: flex;
                        overflow-x: auto;
                        padding-bottom: 20px;
                        padding-right: 20px;
                        scroll-snap-type: x mandatory;
                        gap: 12px;
                        scrollbar-width: none;
                    }
                    .${id} .grid.mobile-scroll::-webkit-scrollbar {
                        display: none;
                    }
                    .${id} .grid.mobile-scroll .card {
                        min-width: calc(50% - 6px);
                        max-width: calc(50% - 6px);
                        scroll-snap-align: start;
                        padding: 20px 12px;
                    }
                    .${id} .grid.mobile-scroll .value {
                         font-size: 2rem;
                    }
                     .${id} .grid.mobile-scroll .label {
                         font-size: 0.9rem;
                    }

                     .${id} .grid.mobile-stack {
                         gap: 16px;
                     }

                    .${id} .grid.mobile-grid-2 {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                    }
                    .${id} .grid.mobile-grid-2 .card {
                        padding: 24px 12px;
                    }
                    .${id} .grid.mobile-grid-2 .value {
                        font-size: 2rem;
                    }
                    .${id} .grid.mobile-grid-2 .label {
                        font-size: 0.9rem;
                    }
                }
            `}} />
            <div className="container">
                <div className={`grid mobile-${mobileLayout}`}>
                    {items.map((item, i) => (
                        <div key={i} className="card">
                            <div className="value" style={{ color: item.valueColor ? item.valueColor : undefined }}>
                                {item.value}
                            </div>
                            <div className="label" style={{ color: item.labelColor ? item.labelColor : undefined }}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

