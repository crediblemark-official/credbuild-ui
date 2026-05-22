"use client";

import React, { useId } from "react";
import { getVal, getMobileVal } from "../utils";
import type { ComparisonTableProps } from "./types";

export const ComparisonTableRender = ({ content, styling }: ComparisonTableProps) => {
    const { title, plans, features } = content;
    const { backgroundColor, padding, headerColor, headerTextColor, rowAlternateColor, textColor, accentColor } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `comparison-${id}`;

    return (
        <section className={uniqueClass} style={{ background: backgroundColor, color: textColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 80)}px 20px;
                    }
                    .${uniqueClass} .comp-title {
                        text-align: center;
                        font-size: 40px;
                        font-weight: 800;
                        margin-bottom: 60px;
                        letter-spacing: -0.02em;
                    }
                    .${uniqueClass} .table-wrapper {
                        max-width: 1000px;
                        margin: 0 auto;
                        overflow-x: auto;
                        background: white;
                        border-radius: 20px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                        border: 1px solid rgba(0,0,0,0.05);
                    }
                    .${uniqueClass} table {
                        width: 100%;
                        border-collapse: collapse;
                        min-width: 600px;
                    }
                    .${uniqueClass} th {
                        background: ${headerColor};
                        color: ${headerTextColor};
                        padding: 24px;
                        text-align: center;
                        font-weight: 800;
                        font-size: 18px;
                    }
                    .${uniqueClass} th:first-child {
                        text-align: left;
                        width: 40%;
                    }
                    .${uniqueClass} td {
                        padding: 20px 24px;
                        border-bottom: 1px solid rgba(0,0,0,0.05);
                        text-align: center;
                    }
                    .${uniqueClass} td:first-child {
                        text-align: left;
                        font-weight: 600;
                    }
                    .${uniqueClass} tr:nth-child(even) td {
                        background: ${rowAlternateColor};
                    }
                    .${uniqueClass} .check-icon {
                        color: ${accentColor};
                        font-weight: 900;
                        font-size: 20px;
                    }
                    .${uniqueClass} .cross-icon {
                        color: #cbd5e1;
                        font-weight: 400;
                        font-size: 18px;
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 40)}px 16px;
                        }
                        .${uniqueClass} .comp-title {
                            font-size: 28px;
                            margin-bottom: 30px;
                        }
                        .${uniqueClass} th {
                            padding: 12px 10px;
                            font-size: 14px;
                        }
                        .${uniqueClass} td {
                            padding: 12px 10px;
                            font-size: 14px;
                        }
                    }
                `
            }} />
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 className="comp-title">{title}</h2>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Fitur</th>
                                {plans.map((plan, i) => (
                                    <th key={i}>{plan.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, i) => (
                                <tr key={i}>
                                    <td>{feature.name}</td>
                                    {feature.values.map((item: any, j) => (
                                        <td key={j}>
                                            {String(item.value) === "true" ? (
                                                <span className="check-icon">✓</span>
                                            ) : String(item.value) === "false" ? (
                                                <span className="cross-icon">✕</span>
                                            ) : (
                                                item.value
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
