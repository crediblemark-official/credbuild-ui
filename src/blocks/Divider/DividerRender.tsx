"use client";

import React, { useId } from "react";
import { DividerProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const DividerRender = ({ content, styling }: DividerProps) => {
    const { lineStyle = "solid" } = content || {};
    const {
        color = "#e2e8f0",
        height = 2,
        maxWidth,
        alignment = "center",
        paddingTop,
        paddingBottom,
        backgroundColor = "transparent"
    } = styling || {};

    const id = "divider-" + useId().replace(/:/g, "");

    return (
        <div className={`${id} w-full flex`} style={{ backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${getVal(paddingTop, 32)}px;
                    padding-bottom: ${getVal(paddingBottom, 32)}px;
                    justify-content: ${alignment === "left" ? "flex-start" : alignment === "right" ? "flex-end" : "center"};
                }
                .${id} .divider-line {
                    border-top-style: ${lineStyle};
                    border-top-color: ${color};
                    border-top-width: ${getVal(height, 2)}px;
                    width: ${getVal(maxWidth, 100)}%;
                }
                @media (max-width: 768px) {
                    .${id} {
                        padding-top: ${getTabletVal(paddingTop, 24)}px;
                        padding-bottom: ${getTabletVal(paddingBottom, 24)}px;
                    }
                    .${id} .divider-line {
                        border-top-width: ${getTabletVal(height, 2)}px;
                        width: ${getTabletVal(maxWidth, 100)}%;
                    }
                }
                @media (max-width: 640px) {
                    .${id} {
                        padding-top: ${getMobileVal(paddingTop, 16)}px;
                        padding-bottom: ${getMobileVal(paddingBottom, 16)}px;
                    }
                    .${id} .divider-line {
                        border-top-width: ${getMobileVal(height, 2)}px;
                        width: ${getMobileVal(maxWidth, 100)}%;
                    }
                }
            `}} />
            <div className="divider-line" />
        </div>
    );
};
