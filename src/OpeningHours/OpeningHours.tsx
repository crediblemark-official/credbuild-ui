"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { OpeningHoursProps } from "./types";

const OpeningHoursRender = dynamic<OpeningHoursProps>(() => import("./OpeningHoursRender").then(m => m.OpeningHoursRender));
export const OpeningHours: ComponentConfig<OpeningHoursProps> = {
    label: "Opening Hours",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                hours: {
                    type: "array",
                    label: "Hours List",
                    arrayFields: {
                        day: { type: "text", label: "Day" },
                        time: { type: "text", label: "Hours (e.g. 08:00 - 17:00)" },
                        isClosed: { 
                            type: "select", 
                            label: "Closed?", 
                            options: [
                                { label: "No", value: "false" },
                                { label: "Yes", value: "true" },
                            ]
                        },
                    },
                    getItemSummary: (item) => `${item.day}: ${String(item.isClosed) === "true" ? "Closed" : item.time}`,
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
                cardBackgroundColor: {
                    type: "custom", label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                padding: {
                    type: "custom", label: "Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />,
                },
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                textColor: {
                    type: "custom", label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                highlightColor: {
                    type: "custom", label: "Closed Status Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                borderRadius: { type: "number", label: "Corner Radius" },
            },
        },
    },
    defaultProps: {
        content: {
            title: "Jam Operasional",
            hours: [
                { day: "Senin", time: "09:00 - 18:00", isClosed: "false" },
                { day: "Selasa", time: "09:00 - 18:00", isClosed: "false" },
                { day: "Rabu", time: "09:00 - 18:00", isClosed: "false" },
                { day: "Kamis", time: "09:00 - 18:00", isClosed: "false" },
                { day: "Jumat", time: "09:00 - 18:00", isClosed: "false" },
                { day: "Sabtu", time: "10:00 - 15:00", isClosed: "false" },
                { day: "Minggu", time: "-", isClosed: "true" },
            ],
        },
        styling: {
            backgroundColor: "#f1f5f9",
            cardBackgroundColor: "#ffffff",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            titleColor: "#0f172a",
            textColor: "#334155",
            highlightColor: "#ef4444",
            borderRadius: 24,
        },
    },
    render: (props) => <OpeningHoursRender {...props} />,
};
