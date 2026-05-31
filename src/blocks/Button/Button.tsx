"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";

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
                paddingX: { type: "number", label: "Padding Horizontal (px)" },
                paddingY: { type: "number", label: "Padding Vertical (px)" },
                fontSize: { type: "number", label: "Font Size (px)" },
                borderRadius: { type: "number", label: "Border Radius (px)" },
                marginTop: { type: "number", label: "Margin Top (px)" },
                marginBottom: { type: "number", label: "Margin Bottom (px)" },
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
            paddingX: 24,
            paddingY: 12,
            fontSize: 16,
            borderRadius: 6,
            marginTop: 16,
            marginBottom: 16,
        }
    },
    render: (props) => <ButtonRender {...props} />,
};
