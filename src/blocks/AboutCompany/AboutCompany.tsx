"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";

import { AboutCompanyProps } from "./types";

const AboutCompanyRender = dynamic<AboutCompanyProps>(() => import("./AboutCompanyRender").then(m => m.AboutCompanyRender));
export const AboutCompany: ComponentConfig<AboutCompanyProps> = {
    label: "About Company",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                content: { type: "textarea", label: "Content" },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                imageUrl: { 
                    type: "custom", 
                    label: "Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
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
                textColor: {
                    type: "custom",
                    label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom",
                    label: "Section Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                gap: {
                    type: "custom",
                    label: "Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={4} defaultValue={{ desktop: 32, tablet: 24, mobile: 16 }} />
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                fontSize: {
                    type: "custom",
                    label: "Font Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={40} step={1} defaultValue={{ desktop: 18, tablet: 16, mobile: 16 }} />
                },
            }
        },
    },
    defaultProps: {
        content: {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        media: {
            imageUrl: "https://via.placeholder.com/600x400",
        },
        styling: {
            backgroundColor: "#ffffff",
            padding: { desktop: 48, tablet: 32, mobile: 24 },
            textColor: "#374151",
            gap: { desktop: 32, tablet: 24, mobile: 16 },
        },
        typography: {
            fontSize: { desktop: 18, tablet: 16, mobile: 16 },
        }
    },
    render: (props) => <AboutCompanyRender {...props} />,
};

