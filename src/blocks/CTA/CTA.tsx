"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { CTAProps } from "./types";

const CTARender = dynamic<CTAProps>(() => import("./CTARender").then(m => m.CTARender));
export const CTA: ComponentConfig<CTAProps> = {
    label: "Call to Action",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                buttonText: { type: "text", label: "Button Text" },
                buttonLink: { type: "text", label: "Button Link" },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleSize: {
                    type: "custom",
                    label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={16} max={96} step={2} />
                },
                descriptionSize: {
                    type: "custom",
                    label: "Description Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={48} step={1} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom",
                    label: "Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descriptionColor: {
                    type: "custom",
                    label: "Description Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                buttonColor: {
                    type: "custom",
                    label: "Button Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                buttonTextColor: {
                    type: "custom",
                    label: "Button Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Ready to get started?",
            subtitle: "Contact us today to learn more about how we can help you.",
            buttonText: "Mulai Sekarang",
            buttonLink: "#contact",
        },
        typography: {
            titleSize: { desktop: 56, tablet: 48, mobile: 32 },
            descriptionSize: { desktop: 20, tablet: 18, mobile: 16 },
        },
        styling: {
            backgroundColor: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
            padding: { desktop: 100, tablet: 80, mobile: 60 },
            titleColor: "#ffffff",
            descriptionColor: "rgba(255, 255, 255, 0.95)",
            buttonColor: "#ffffff",
            buttonTextColor: "#dc2626",
        }
    },
    render: (props) => <CTARender {...props} />,
};
