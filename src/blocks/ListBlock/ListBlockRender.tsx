"use client";

import React, { useId } from "react";
import { ListBlockProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";
import DynamicIcon from "../../DynamicIcon";

export const ListBlockRender = ({ content, styling }: ListBlockProps) => {
    const { title, items = [], iconName = "CheckCircle" } = content || {};
    const {
        titleColor = "#111827",
        textColor = "#374151",
        iconColor = "#22c55e",
        iconSize = 22,
        fontSize = 16,
        backgroundColor = "#ffffff",
        alignment = "left",
        padding,
        borderRadius,
        maxWidth
    } = styling || {};

    const id = "list-block-" + useId().replace(/:/g, "");

    return (
        <section className={`${id} w-full px-4`} style={{ display: "flex", justifyContent: alignment === "center" ? "center" : "flex-start" }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} .list-container {
                    padding-top: ${getVal(padding, 32)}px;
                    padding-bottom: ${getVal(padding, 32)}px;
                    padding-left: ${getVal(padding, 32)}px;
                    padding-right: ${getVal(padding, 32)}px;
                    border-radius: ${getVal(borderRadius, 12)}px;
                    background-color: ${backgroundColor};
                    width: 100%;
                    max-width: ${getVal(maxWidth, 800)}px;
                    box-sizing: border-box;
                }
                .${id} .list-item {
                    font-size: ${getVal(fontSize, 16)}px;
                    color: ${textColor};
                }
                .${id} .list-item span svg {
                    width: ${getVal(iconSize, 22)}px;
                    height: ${getVal(iconSize, 22)}px;
                }
                @media (max-width: 768px) {
                    .${id} .list-container {
                        padding-top: ${getTabletVal(padding, 24)}px;
                        padding-bottom: ${getTabletVal(padding, 24)}px;
                        padding-left: ${getTabletVal(padding, 24)}px;
                        padding-right: ${getTabletVal(padding, 24)}px;
                        border-radius: ${getTabletVal(borderRadius, 12)}px;
                        max-width: ${getTabletVal(maxWidth, 600)}px;
                    }
                    .${id} .list-item {
                        font-size: ${getTabletVal(fontSize, 16)}px;
                    }
                    .${id} .list-item span svg {
                        width: ${getTabletVal(iconSize, 22)}px;
                        height: ${getTabletVal(iconSize, 22)}px;
                    }
                }
                @media (max-width: 640px) {
                    .${id} .list-container {
                        padding-top: ${getMobileVal(padding, 16)}px;
                        padding-bottom: ${getMobileVal(padding, 16)}px;
                        padding-left: ${getMobileVal(padding, 16)}px;
                        padding-right: ${getMobileVal(padding, 16)}px;
                        border-radius: ${getMobileVal(borderRadius, 8)}px;
                        max-width: ${getMobileVal(maxWidth, 400)}px;
                    }
                    .${id} .list-item {
                        font-size: ${getMobileVal(fontSize, 14)}px;
                    }
                    .${id} .list-item span svg {
                        width: ${getMobileVal(iconSize, 18)}px;
                        height: ${getMobileVal(iconSize, 18)}px;
                    }
                }
            `}} />
            <div className="list-container border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
                {title && (
                    <h3 className="text-lg font-bold mb-4 tracking-tight" style={{ color: titleColor }}>
                        {title}
                    </h3>
                )}
                {items.length > 0 ? (
                    <ul className="space-y-3.5">
                        {items.map((item, idx) => (
                            <li key={idx} className="list-item flex items-start gap-3 leading-relaxed">
                                <span className="flex-shrink-0 mt-0.5" style={{ color: iconColor }}>
                                    <DynamicIcon name={iconName} size={getVal(iconSize, 22)} />
                                </span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-xs text-zinc-400 font-normal italic">Belum ada item daftar.</p>
                )}
            </div>
        </section>
    );
};
