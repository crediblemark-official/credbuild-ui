"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
const SectionHeaderRender = dynamic<SectionHeaderProps>(() => import("./SectionHeaderRender").then(m => m.SectionHeaderRender));
import type { SectionHeaderProps } from "./types";

export type { SectionHeaderProps };

export const SectionHeader: ComponentConfig<SectionHeaderProps> = {
    label: "Section Header",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                badge: { type: "text", label: "Badge (Small Text Above)" },
                title: { type: "text", label: "Main Title" },
                subtitle: { type: "textarea", label: "Subtitle / Description" },
            },
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                alignment: {
                    type: "select",
                    label: "Alignment",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                    ],
                },
                backgroundColor: {
                    type: "custom", label: "Background Color",
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
                subtitleColor: {
                    type: "custom", label: "Subtitle Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                badgeColor: {
                    type: "custom", label: "Accent/Badge Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                badgeTextColor: {
                    type: "custom", label: "Badge Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                maxWidth: { type: "number", label: "Max Content Width (px)", min: 400, max: 1400 },
                showAccent: { 
                    type: "select", 
                    label: "Show Accent Line?", 
                    options: [
                        { label: "No", value: "false" },
                        { label: "Yes", value: "true" },
                    ]
                },
            },
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleSize: {
                    type: "custom", label: "Title Font Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={16} max={96} step={2} />,
                },
                subtitleSize: {
                    type: "custom", label: "Subtitle Font Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={40} step={1} />,
                },
            },
        },
    },
    defaultProps: {
        content: {
            badge: "Featured Service",
            title: "The Best Solution For Your Needs",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        styling: {
            alignment: "center",
            backgroundColor: "#ffffff",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            titleColor: "#0f172a",
            subtitleColor: "#475569",
            badgeColor: "#3b82f6",
            badgeTextColor: "#ffffff",
            maxWidth: 800,
            showAccent: "true",
        },
        typography: {
            titleSize: { desktop: 48, tablet: 40, mobile: 32 },
            subtitleSize: { desktop: 18, tablet: 17, mobile: 16 },
        },
    },
    render: (props) => <SectionHeaderRender {...props} />,
};
