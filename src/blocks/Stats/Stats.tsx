"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import React from "react";
import { Hash, Type } from "lucide-react";

import { StatsProps } from "./types";

const StatsRender = dynamic<StatsProps>(() => import("./StatsRender").then(m => m.StatsRender));
export const Stats: ComponentConfig<StatsProps> = {
    label: "Statistics",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                items: {
                    type: "array",
                    label: "Items",
                    arrayFields: {
                        value: { 
                            type: "text", 
                            label: "Value", 
                            placeholder: "e.g. 100+",
                            labelIcon: <Hash size={14} />
                        },
                        label: { 
                            type: "text", 
                            label: "Label", 
                            placeholder: "e.g. Happy Users",
                            labelIcon: <Type size={14} />
                        },
                        valueColor: { type: "custom", label: "Value Color", render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} /> },
                        labelColor: { type: "custom", label: "Label Color", render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} /> }
                    },
                    getItemSummary: (item) => item.label || "Item",
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                valueFont: {
                    type: "select",
                    label: "Value Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                labelFont: {
                    type: "select",
                    label: "Label Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                mobileLayout: {
                    type: "select",
                    label: "Mobile Layout",
                    options: [
                        { label: "Stack (Vertical)", value: "stack" },
                        { label: "Scroll (Horizontal)", value: "scroll" },
                        { label: "Grid (2 Columns)", value: "grid-2" },
                    ]
                },
                backgroundColor: {
                    type: "custom", label: "Section Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom",
                    label: "Section Padding (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                cardBgColor: {
                    type: "custom", label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderColor: {
                    type: "custom", label: "Card Border",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderRadius: {
                    type: "custom",
                    label: "Card Border Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={48} step={2} />
                },
                valueColor: {
                    type: "custom", label: "Default Value Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                labelColor: {
                    type: "custom", label: "Default Label Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            items: [
                { value: "100+", label: "Lorem Ipsum" },
                { value: "500+", label: "Dolor Sit" },
                { value: "50+", label: "Amet Consectetur" },
            ],
        },
        typography: {},
        styling: {
            mobileLayout: 'stack',
            backgroundColor: "#ffffff",
            padding: { desktop: 60, tablet: 40, mobile: 40 },
            cardBgColor: "#fef2f2",
            cardBorderColor: "#fecaca",
            cardBorderRadius: { desktop: 16, tablet: 16, mobile: 12 },
            valueColor: "#dc2626",
            labelColor: "#475569",
        }
    },
    render: (props) => <StatsRender {...props} />,
};
