"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { GoogleMapsProps } from "./types";

const GoogleMapsRender = dynamic<GoogleMapsProps>(() => import("./GoogleMapsRender").then(m => m.GoogleMapsRender));
export const GoogleMaps: ComponentConfig<GoogleMapsProps> = {
    label: "Google Maps",
    fields: {
        content: {
            type: "object",
            label: "Location",
            objectFields: {
                address: { type: "text", label: "Address or Place Name" },
                zoom: { type: "number", label: "Zoom Level (1-20)", min: 1, max: 20 },
            },
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                height: {
                    type: "custom",
                    label: "Map Height (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={200} max={800} step={10} />,
                },
                padding: {
                    type: "custom",
                    label: "Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />,
                },
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                borderRadius: { type: "number", label: "Corner Radius" },
                grayscale: { 
                    type: "select", 
                    label: "Dark/Grayscale Mode",
                    options: [
                        { label: "Yes", value: "true" },
                        { label: "No", value: "false" },
                    ]
                },
            },
        },
    },
    defaultProps: {
        content: {
            address: "Monas, Jakarta, Indonesia",
            zoom: 15,
        },
        styling: {
            height: { desktop: 450, tablet: 400, mobile: 350 },
            padding: { desktop: 64, tablet: 48, mobile: 32 },
            backgroundColor: "transparent",
            borderRadius: 16,
            grayscale: "false",
        },
    },
    render: (props) => <GoogleMapsRender {...props} />,
};
