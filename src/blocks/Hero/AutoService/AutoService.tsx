"use client";

import dynamic from "next/dynamic";
import { ColorPickerField, ResponsiveSliderField, SliderField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroAutoServiceRender = dynamic<HeroAutoServiceProps>(() => import("./AutoServiceRender").then(m => m.HeroAutoServiceRender));
import type { HeroAutoServiceProps } from "./types";

export type { HeroAutoServiceProps };

export const HeroAutoService: ComponentConfig<HeroAutoServiceProps> = {
    label: "Hero - Auto/Service",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                highlightText: { type: "text", label: "Highlight" },
                bulletPoints: {
                    type: "array",
                    label: "Bullet Points",
                    arrayFields: {
                        text: { type: "text", label: "Point" },
                    },
                    getItemSummary: (item: any) => item.text || "Bullet point",
                },
                ctaText: { type: "text", label: "Primary Button Text" },
                ctaLink: { type: "text", label: "Primary Link" },
                secondaryButtonText: { type: "text", label: "Secondary Button Text" },
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
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleSize: {
                    type: "custom", label: "Title Size (rem)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={6} step={0.1} defaultValue={3.5} />
                },
                titleWeight: {
                    type: "select", label: "Title Weight",
                    options: [
                        { label: "Normal", value: "400" },
                        { label: "Semibold", value: "600" },
                        { label: "Bold", value: "700" },
                        { label: "ExtraBold", value: "800" },
                    ]
                },
                bulletSize: {
                    type: "custom", label: "Bullet Text Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={2} step={0.1} defaultValue={1} />
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
                primaryColor: {
                    type: "custom", label: "Primary Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom", label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                bulletColor: {
                    type: "custom", label: "Bullet Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                secondaryBtnColor: {
                    type: "custom", label: "Secondary Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v))} unit="px" max={50} defaultValue={8} />
                },
                imageRadius: {
                    type: "custom", label: "Image Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v))} unit="px" max={100} defaultValue={24} />
                },
                gap: {
                    type: "custom", label: "Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} defaultValue={60} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={60} />
                },
                btnPaddingHorizontal: {
                    type: "custom", label: "Button Padding X",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={60} defaultValue={40} />
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding Y",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={30} defaultValue={14} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Lorem Ipsum Dolor Sit ",
            highlightText: "Amet Consectetur",
            bulletPoints: [
                { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ],
            ctaText: "Contact Us",
            ctaLink: "#",
            secondaryButtonText: "Get Appointment",
        },
        media: {
            imageUrl: "https://images.unsplash.com/photo-1486006396193-4710368a0b44?auto=format&fit=crop&q=80&w=800",
        },
        typography: {
            titleSize: { desktop: 3.5 },
            titleWeight: "800",
            bulletSize: { desktop: 1 },
        },
        styling: {
            backgroundColor: "#0d1b2a",
            primaryColor: "#ffd700",
            textColor: "#ffffff",
            bulletColor: "#cbd5e1",
            secondaryBtnColor: "#ffd700",
            btnRadius: 8,
            imageRadius: 24,
            gap: { desktop: 60 },
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 60 },
            btnPaddingHorizontal: "40px",
            btnPaddingVertical: "14px",
        }
    },
    render: (props) => <HeroAutoServiceRender {...props} />,
};
