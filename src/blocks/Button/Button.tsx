"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { ButtonProps } from "./types";

const ButtonRender = dynamic<ButtonProps>(() => import("./ButtonRender").then(m => m.ButtonRender));

export const Button: ComponentConfig<ButtonProps> = {
    label: "Custom Button",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                text: { type: "text", label: "Button Text" },
                link: { type: "text", label: "Button Link" },
                pixelEvent: { 
                    type: "text", 
                    label: "Tracking Pixel Event", 
                    placeholder: "e.g., Lead, AddToCart, WhatsAppClick (Optional)" 
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                align: {
                    type: "select",
                    label: "Alignment",
                    options: [
                        { value: "left", label: "Left" },
                        { value: "center", label: "Center" },
                        { value: "right", label: "Right" },
                    ]
                },
                buttonColor: {
                    type: "custom",
                    label: "Button Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom",
                    label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                paddingX: {
                    type: "custom",
                    label: "Padding Horizontal (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={2} />
                },
                paddingY: {
                    type: "custom",
                    label: "Padding Vertical (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={2} />
                },
                fontSize: {
                    type: "custom",
                    label: "Font Size (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={64} step={1} />
                },
                borderRadius: {
                    type: "custom",
                    label: "Border Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={1} />
                },
                marginTop: {
                    type: "custom",
                    label: "Margin Top (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                marginBottom: {
                    type: "custom",
                    label: "Margin Bottom (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            text: "Hubungi Kami",
            link: "https://wa.me/628123456789",
            pixelEvent: "Lead",
        },
        styling: {
            align: "center",
            buttonColor: "#0ea5e9",
            textColor: "#ffffff",
            paddingX: { desktop: 24, tablet: 22, mobile: 20 },
            paddingY: { desktop: 12, tablet: 12, mobile: 10 },
            fontSize: { desktop: 16, tablet: 15, mobile: 14 },
            borderRadius: { desktop: 6, tablet: 6, mobile: 6 },
            marginTop: { desktop: 16, tablet: 16, mobile: 12 },
            marginBottom: { desktop: 16, tablet: 16, mobile: 12 },
        }
    },
    render: (props) => <ButtonRender {...props} />,
};
