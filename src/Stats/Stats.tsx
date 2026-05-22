"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
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
                cardBgColor: {
                    type: "custom", label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderColor: {
                    type: "custom", label: "Card Border",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                valueColor: {
                    type: "custom", label: "Default Value Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                labelColor: {
                    type: "custom", label: "Default Label Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                paddingTop: { type: "text", label: "Padding Top", placeholder: "60px" },
                paddingBottom: { type: "text", label: "Padding Bottom", placeholder: "60px" },
            }
        }
    },
    defaultProps: {
        content: {
            items: [
                { value: "100+", label: "Judul Buku" },
                { value: "500+", label: "Eksemplar" },
                { value: "50+", label: "Penulis Puas" },
            ],
        },
        typography: {},
        styling: {
            mobileLayout: 'stack',
            backgroundColor: "#ffffff",
            cardBgColor: "#fef2f2",
            cardBorderColor: "#fecaca",
            valueColor: "#dc2626",
            labelColor: "#475569",
            paddingTop: "60px",
            paddingBottom: "60px",
        }
    },
    render: (props) => <StatsRender {...props} />,
};
