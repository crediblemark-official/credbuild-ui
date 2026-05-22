"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
const ComparisonTableRender = dynamic<ComparisonTableProps>(() => import("./ComparisonTableRender").then(m => m.ComparisonTableRender));
import type { ComparisonTableProps } from "./types";

export type { ComparisonTableProps };

export const ComparisonTable: ComponentConfig<ComparisonTableProps> = {
    label: "Comparison Table",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                plans: {
                    type: "array",
                    label: "Plans/Packages",
                    arrayFields: {
                        name: { type: "text", label: "Plan Name" },
                    },
                    getItemSummary: (item) => item.name || "Plan",
                },
                features: {
                    type: "array",
                    label: "Features",
                    arrayFields: {
                        name: { type: "text", label: "Feature Name" },
                        values: {
                            type: "array",
                            label: "Values (per plan)",
                            arrayFields: {
                                value: { type: "text", label: "Value (true/false or text)" },
                            },
                        },
                    },
                    getItemSummary: (item) => item.name || "Feature",
                },
            },
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                backgroundColor: {
                    type: "custom", label: "Section Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                padding: {
                    type: "custom", label: "Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />,
                },
                headerColor: {
                    type: "custom", label: "Header Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                headerTextColor: {
                    type: "custom", label: "Header Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                rowAlternateColor: {
                    type: "custom", label: "Alternate Row Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                textColor: {
                    type: "custom", label: "Main Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                accentColor: {
                    type: "custom", label: "Checkmark Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
            },
        },
    },
    defaultProps: {
        content: {
            title: "Pilih Paket Terbaik",
            plans: [{ name: "Starter" }, { name: "Pro" }, { name: "Business" }],
            features: [
                { name: "Penerbitan ISBN", values: [{ value: "true" }, { value: "true" }, { value: "true" }] },
                { name: "Desain Cover", values: [{ value: "Standar" }, { value: "Custom" }, { value: "Premium" }] },
                { name: "Distribusi Toko Buku", values: [{ value: "false" }, { value: "true" }, { value: "true" }] },
                { name: "Marketing Kit", values: [{ value: "false" }, { value: "false" }, { value: "true" }] },
            ],
        },
        styling: {
            backgroundColor: "#f8fafc",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            headerColor: "#1e293b",
            headerTextColor: "#ffffff",
            rowAlternateColor: "#f1f5f9",
            textColor: "#334155",
            accentColor: "#22c55e",
        },
    },
    render: (props) => <ComparisonTableRender {...props} />,
};
