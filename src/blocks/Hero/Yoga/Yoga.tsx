"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroYogaRender = dynamic<HeroYogaProps>(() => import("./YogaRender").then(m => m.HeroYogaRender));
import type { HeroYogaProps } from "./types";

export type { HeroYogaProps };

export const HeroYoga: ComponentConfig<HeroYogaProps> = {
    label: "Hero - Yoga/Wellness",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                tag: { type: "text", label: "Tag/Category", placeholder: "Yoga Classes" },
                title: { type: "text", label: "Main Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                ctaText: { type: "text", label: "Primary Button" },
                ctaLink: { type: "text", label: "Primary Button Link" },
                secondaryButtonText: { type: "text", label: "Secondary Button" },
                stat1Value: { type: "text", label: "Stat 1 Value" },
                stat1Label: { type: "text", label: "Stat 1 Label" },
                stat2Value: { type: "text", label: "Stat 2 Value" },
                stat2Label: { type: "text", label: "Stat 2 Label" },
                stat3Value: { type: "text", label: "Stat 3 Value" },
                stat3Label: { type: "text", label: "Stat 3 Label" },
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
                    type: "custom", label: "Title Size",
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
                subtitleSize: {
                    type: "custom", label: "Subtitle Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={3} step={0.1} defaultValue={1.1} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                subtitleColor: {
                    type: "custom", label: "Subtitle/Stat Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                backgroundColor: {
                    type: "custom", label: "Section Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                primaryColor: {
                    type: "custom", label: "Primary/Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnTextColor: {
                    type: "custom", label: "Primary Btn Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                secondaryBtnColor: {
                    type: "custom", label: "Secondary Btn/Icon Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                iconBackgroundColor: {
                    type: "custom", label: "Play Icon Bg",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                imageBackgroundColor: {
                    type: "custom", label: "Image Placeholder Bg",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="px" max={50} defaultValue={8} />
                },
                imageRadius: {
                    type: "custom", label: "Image Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="px" max={100} defaultValue={24} />
                },
                gap: {
                    type: "custom", label: "Grid Gap",
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
                    type: "custom", label: "Button Padding (H)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={60} defaultValue="32px" />
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding (V)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={30} defaultValue="12px" />
                },
            }
        }
    },
    defaultProps: {
        content: {
            tag: "Lorem Ipsum",
            title: "Lorem Ipsum Dolor: Unwind And Transform",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            ctaText: "Register Now",
            ctaLink: "#",
            secondaryButtonText: "Class Preview",
            stat1Value: "150+",
            stat1Label: "Expert Trainers",
            stat2Value: "300+",
            stat2Label: "Active Students",
            stat3Value: "500+",
            stat3Label: "Class Videos",
        },
        media: {
            imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
        },
        typography: {
            titleSize: { desktop: 3.5 },
            titleWeight: "800",
            subtitleSize: { desktop: 1.1 },
        },
        styling: {
            subtitleColor: "#475569",
            backgroundColor: "#fef5f0",
            primaryColor: "#ff6b3d",
            btnTextColor: "#ffffff",
            secondaryBtnColor: "#ff6b3d",
            iconBackgroundColor: "#ffebe5",
            imageBackgroundColor: "#f0e5dc",
            btnRadius: 8,
            imageRadius: 24,
            gap: { desktop: 60 },
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 60 },
            btnPaddingHorizontal: "32px",
            btnPaddingVertical: "12px",
        }
    },
    render: (props) => <HeroYogaRender {...props} />,
};
