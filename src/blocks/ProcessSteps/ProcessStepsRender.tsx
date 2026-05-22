"use client";

import React, { useId } from "react";
import { getVal, getMobileVal } from "../../utils";
import { ProcessStepsProps } from "./types";

export const ProcessStepsRender = ({ content, typography, styling }: ProcessStepsProps) => {
    const { title, steps } = content;
    const { titleSize, titleColor, stepTitleSize, stepDescriptionSize, textColor } = typography;
    const { backgroundColor, padding, stepColor, stepNumberColor, layout } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `steps-${id}`;

    return (
        <section className={uniqueClass} style={{ background: backgroundColor, color: textColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 80)}px 20px;
                    }
                    .${uniqueClass} .steps-title {
                        font-size: ${getVal(titleSize, 48)}px;
                        color: ${titleColor};
                        text-align: center;
                        margin-bottom: 60px;
                        font-weight: 800;
                        letter-spacing: -0.02em;
                    }
                    .${uniqueClass} .steps-container {
                        display: flex;
                        flex-direction: ${layout === "horizontal" ? "row" : "column"};
                        gap: 40px;
                        max-width: 1200px;
                        margin: 0 auto;
                        justify-content: center;
                        align-items: ${layout === "horizontal" ? "flex-start" : "center"};
                    }
                    .${uniqueClass} .step-item {
                        flex: 1;
                        display: flex;
                        flex-direction: ${layout === "horizontal" ? "column" : "row"};
                        align-items: ${layout === "horizontal" ? "center" : "flex-start"};
                        text-align: ${layout === "horizontal" ? "center" : "left"};
                        gap: 20px;
                        position: relative;
                    }
                    .${uniqueClass} .step-number {
                        width: 64px;
                        height: 64px;
                        border-radius: 50%;
                        background: ${stepColor};
                        color: ${stepNumberColor};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                        font-weight: 800;
                        flex-shrink: 0;
                        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    }
                    .${uniqueClass} .step-content h3 {
                        font-size: ${getVal(stepTitleSize, 24)}px;
                        margin-bottom: 12px;
                        font-weight: 700;
                    }
                    .${uniqueClass} .step-content p {
                        font-size: ${getVal(stepDescriptionSize, 16)}px;
                        opacity: 0.8;
                        line-height: 1.6;
                    }

                    @media (max-width: 1024px) {
                        .${uniqueClass} .steps-container {
                            flex-direction: column;
                            align-items: center;
                        }
                        .${uniqueClass} .step-item {
                            flex-direction: row;
                            text-align: left;
                            width: 100%;
                            max-width: 600px;
                        }
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 40)}px 20px;
                        }
                        .${uniqueClass} .steps-title {
                            font-size: ${getMobileVal(titleSize, 32)}px;
                            margin-bottom: 40px;
                        }
                        .${uniqueClass} .step-number {
                            width: 48px;
                            height: 48px;
                            font-size: 18px;
                        }
                    }
                `
            }} />
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {title && <h2 className="steps-title">{title}</h2>}
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">
                                {step.icon ? (
                                     step.icon?.includes('fa-') ? <i className={step.icon}></i> : step.icon
                                ) : (index + 1)}
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
