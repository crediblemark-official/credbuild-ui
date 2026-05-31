"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { CustomEmbedProps } from "./types";

const CustomEmbedRender = dynamic<CustomEmbedProps>(() => import("./CustomEmbedRender").then(m => m.CustomEmbedRender));
export const CustomEmbed: ComponentConfig<CustomEmbedProps> = {
    label: "Custom HTML / Embed",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                html: { type: "textarea", label: "HTML Code (Iframe, Widgets, etc.)" },
                script: { type: "textarea", label: "JavaScript (Optional)" },
                renderMode: {
                    type: "select",
                    label: "Mode Rendering",
                    options: [
                        { label: "Iframe Terisolasi Aman (Sandboxed)", value: "sandboxed" },
                        { label: "Iframe Kompatibilitas Penuh (Iframe Open)", value: "iframe-open" },
                        { label: "Sisipkan Langsung ke Halaman (Direct DOM)", value: "direct" }
                    ]
                },
            },
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                padding: {
                    type: "custom", label: "Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />,
                },
                maxWidth: {
                    type: "custom", label: "Max Width (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={200} max={1400} step={20} />,
                },
                alignment: {
                    type: "select",
                    label: "Alignment",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                    ],
                },
            },
        },
    },
    defaultProps: {
        content: {
            html: '<div style="padding: 20px; background: #eee; border: 2px dashed #ccc; text-align: center; border-radius: 8px;"><strong>Custom Embed</strong><br/>Tempelkan kode HTML/iframe di sini.</div>',
            renderMode: "sandboxed",
        },
        styling: {
            backgroundColor: "transparent",
            padding: { desktop: 64, tablet: 48, mobile: 32 },
            maxWidth: { desktop: 1200, tablet: 1000, mobile: 600 },
            alignment: "center",
        },
    },
    render: (props) => <CustomEmbedRender {...props} />,
};
