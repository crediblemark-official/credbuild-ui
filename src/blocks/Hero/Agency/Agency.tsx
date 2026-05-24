"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroAgencyRender = dynamic<HeroAgencyProps>(() => import("./AgencyRender").then(m => m.HeroAgencyRender));
import type { HeroAgencyProps } from "./types";

export type { HeroAgencyProps };

export const HeroAgency: ComponentConfig<HeroAgencyProps> = {
    label: "Hero - Design Agency/Portfolio",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                ctaText: { type: "text", label: "CTA Button Text" },
                ctaLink: { type: "text", label: "CTA Link" },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                project1ImageUrl: { 
                    type: "custom", 
                    label: "Project 1",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                project2ImageUrl: { 
                    type: "custom", 
                    label: "Project 2",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                project3ImageUrl: { 
                    type: "custom", 
                    label: "Project 3",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleFont: {
                    type: "select", label: "Title Font",
                    options: [
                        { label: "Inter", value: "Inter" },
                        { label: "Syne", value: "Syne" },
                        { label: "Space Grotesk", value: "Space Grotesk" },
                        { label: "Montserrat", value: "Montserrat" },
                    ]
                },
                titleSize: {
                    type: "custom", label: "Title Size (rem)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={8} step={0.1} defaultValue={5} />
                },
                titleWeight: {
                    type: "select", label: "Title Weight",
                    options: [
                        { label: "Bold", value: "700" },
                        { label: "ExtraBold", value: "800" },
                        { label: "Black", value: "900" },
                    ]
                },
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                subtitleSize: {
                    type: "custom", label: "Subtitle Size (rem)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={2} step={0.1} defaultValue={1.1} />
                },
                subtitleColor: {
                    type: "custom", label: "Subtitle Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                accentColor: {
                    type: "custom", label: "Accent Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnColor: {
                    type: "custom", label: "Button Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnTextColor: {
                    type: "custom", label: "Button Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={50} defaultValue={50} />
                },
                btnOutline: {
                    type: "radio", label: "Button Style",
                    options: [{ label: "Outline", value: true }, { label: "Solid", value: false }]
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding (V)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={40} defaultValue="16px" />
                },
                btnPaddingHorizontal: {
                    type: "custom", label: "Button Padding (H)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={80} defaultValue="40px" />
                },
                projectGap: {
                    type: "custom", label: "Project Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={60} defaultValue={24} />
                },
                projectRadius: {
                    type: "custom", label: "Project Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={40} defaultValue={16} />
                },
                projectShadow: {
                    type: "radio", label: "Project Shadow",
                    options: [{ label: "On", value: true }, { label: "Off", value: false }]
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={100} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Lorem Ipsum\nDolor Sit",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ctaText: "Get In Touch",
            ctaLink: "#contact",
        },
        media: {
            project1ImageUrl: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=600&q=80",
            project2ImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            project3ImageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
        },
        typography: {
            titleFont: "Syne",
            titleSize: { desktop: 5 },
            titleWeight: "800",
            titleColor: "#ffffff",
            subtitleSize: { desktop: 1.1 },
            subtitleColor: "#94a3b8",
        },
        styling: {
            backgroundColor: "#111111",
            accentColor: "#ff6b3d",
            btnColor: "#ff6b3d",
            btnTextColor: "#ffffff",
            btnRadius: "50px",
            btnOutline: true,
            btnPaddingVertical: "16px",
            btnPaddingHorizontal: "40px",
            projectGap: { desktop: 32 },
            projectRadius: "12px",
            projectShadow: false,
            paddingTop: { desktop: 100 },
            paddingBottom: { desktop: 80 },
        }
    },
    render: (props) => <HeroAgencyRender {...props} />,
};
