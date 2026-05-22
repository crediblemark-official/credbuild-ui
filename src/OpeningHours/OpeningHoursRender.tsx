"use client";

import React, { useId } from "react";
import { getVal, getMobileVal } from "../utils";
import { OpeningHoursProps } from "./types";

export const OpeningHoursRender = ({ content, styling }: OpeningHoursProps) => {
    const { title, hours } = content;
    const { backgroundColor, padding, cardBackgroundColor, titleColor, textColor, highlightColor, borderRadius } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `hours-${id}`;

    return (
        <section className={uniqueClass} style={{ background: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 80)}px 20px;
                    }
                    .${uniqueClass} .hours-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: ${cardBackgroundColor};
                        padding: 40px;
                        border-radius: ${borderRadius}px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    }
                    .${uniqueClass} .hours-title {
                        font-size: 32px;
                        font-weight: 800;
                        color: ${titleColor};
                        text-align: center;
                        margin-bottom: 32px;
                        letter-spacing: -0.02em;
                    }
                    .${uniqueClass} .hours-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .${uniqueClass} .hours-row {
                        display: flex;
                        justify-content: space-between;
                        padding: 12px 0;
                        border-bottom: 1px solid rgba(0,0,0,0.05);
                        color: ${textColor};
                        font-size: 16px;
                    }
                    .${uniqueClass} .hours-row:last-child {
                        border-bottom: none;
                    }
                    .${uniqueClass} .day-name {
                        font-weight: 700;
                    }
                    .${uniqueClass} .time-val {
                        font-weight: 500;
                    }
                    .${uniqueClass} .status-closed {
                        color: ${highlightColor};
                        font-weight: 800;
                        text-transform: uppercase;
                        font-size: 14px;
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 40)}px 16px;
                        }
                        .${uniqueClass} .hours-container {
                            padding: 20px;
                        }
                        .${uniqueClass} .hours-title {
                            font-size: 24px;
                            margin-bottom: 24px;
                        }
                    }
                `
            }} />
            <div className="hours-container">
                <h2 className="hours-title">{title}</h2>
                <ul className="hours-list">
                    {hours.map((item, index) => (
                        <li key={index} className="hours-row">
                            <span className="day-name">{item.day}</span>
                            <span className="time-val">
                                {String(item.isClosed) === "true" ? (
                                    <span className="status-closed">Tutup</span>
                                ) : (
                                    item.time
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
