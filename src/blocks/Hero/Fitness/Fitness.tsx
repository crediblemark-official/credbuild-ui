"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroFitnessRender = dynamic<HeroFitnessProps>(() => import("./FitnessRender").then(m => m.HeroFitnessRender));
import type { HeroFitnessProps } from "./types";

export type { HeroFitnessProps };

export const HeroFitness: ComponentConfig<HeroFitnessProps> = {
    label: "Hero - Fitness/Gym",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                ctaText: { type: "text", label: "CTA Button" },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                imageUrl1: { 
                    type: "custom", 
                    label: "Image 1",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                imageUrl2: { 
                    type: "custom", 
                    label: "Image 2",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                imageUrl3: { 
                    type: "custom", 
                    label: "Image 3",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                imageUrl4: { 
                    type: "custom", 
                    label: "Image 4",
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
                        { label: "Oswald", value: "Oswald" },
                        { label: "Inter", value: "Inter" },
                        { label: "Roboto Condensed", value: "Roboto Condensed" },
                        { label: "Montserrat", value: "Montserrat" },
                    ]
                },
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={8} step={0.1} defaultValue={4.5} />
                },
                titleWeight: {
                    type: "select", label: "Title Weight",
                    options: [
                        { label: "Bold", value: "700" },
                        { label: "ExtraBold", value: "800" },
                        { label: "Black", value: "900" },
                    ]
                },
                subtitleSize: {
                    type: "custom", label: "Subtitle Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={3} step={0.1} defaultValue={1.2} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                subtitleColor: {
                    type: "custom", label: "Subtitle Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnPrimaryColor: {
                    type: "custom", label: "Primary Btn Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnPrimaryTextColor: {
                    type: "custom", label: "Primary Btn Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnSecondaryColor: {
                    type: "custom", label: "Secondary Btn Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnSecondaryTextColor: {
                    type: "custom", label: "Secondary Btn Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={50} defaultValue="50px" />
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding (V)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={40} defaultValue="16px" />
                },
                btnPaddingHorizontal: {
                    type: "custom", label: "Button Padding (H)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={80} defaultValue="40px" />
                },
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                accentColor1: {
                    type: "custom", label: "Accent Circle",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                accentColor2: {
                    type: "custom", label: "Accent Border",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                gap: {
                    type: "custom", label: "Grid Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} defaultValue={40} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
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
            title: "LOREM IPSUM DOLOR SIT",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ctaText: "Get Started Now",
        },
        media: {
            imageUrl1: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
            imageUrl2: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=600&q=80",
            imageUrl3: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
            imageUrl4: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
        },
        typography: {
            titleFont: "Oswald",
            titleSize: { desktop: 4.5 },
            titleWeight: "800",
            subtitleSize: { desktop: 1.2 },
        },
        styling: {
            titleColor: "#ffffff",
            subtitleColor: "#9ca3af",
            btnPrimaryColor: "#e11d48",
            btnPrimaryTextColor: "#ffffff",
            btnSecondaryColor: "transparent",
            btnSecondaryTextColor: "#ffffff",
            btnRadius: "50px",
            btnPaddingVertical: "16px",
            btnPaddingHorizontal: "40px",
            backgroundColor: "#111827",
            accentColor1: "#e11d48",
            accentColor2: "#ffffff",
            gap: { desktop: 40 },
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 80 },
        }
    },
    render: (props) => <HeroFitnessRender {...props} />,
};
