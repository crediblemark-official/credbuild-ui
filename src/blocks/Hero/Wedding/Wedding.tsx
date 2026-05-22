"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroWeddingRender = dynamic<HeroWeddingProps>(() => import("./WeddingRender").then(m => m.HeroWeddingRender));
import type { HeroWeddingProps } from "./types";

export type { HeroWeddingProps };

export const HeroWedding: ComponentConfig<HeroWeddingProps> = {
    label: "Hero - Wedding Planner",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                ctaText: { type: "text", label: "Primary Button" },
                ctaLink: { type: "text", label: "Primary Link" },
                secondaryButtonText: { type: "text", label: "Secondary Button" },
                happyClientsText: { type: "text", label: "Happy Clients Text" },
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
                imageUrl1: { 
                    type: "custom", 
                    label: "Main Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                imageUrl2: { 
                    type: "custom", 
                    label: "Secondary Image",
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
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Cinzel", value: "Cinzel" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Lora", value: "Lora" },
                        { label: "Merriweather", value: "Merriweather" },
                    ]
                },
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={6} step={0.1} defaultValue={3.5} />
                },
                titleWeight: {
                    type: "select", label: "Title Weight",
                    options: [
                        { label: "Regular", value: "400" },
                        { label: "Medium", value: "500" },
                        { label: "SemiBold", value: "600" },
                        { label: "Bold", value: "700" },
                    ]
                },
                subtitleSize: {
                    type: "custom", label: "Subtitle Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={2} step={0.1} defaultValue={1} />
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
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                accentColor: {
                    type: "custom", label: "Accent Color (Btn)",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                secondaryColor: {
                    type: "custom", label: "Secondary Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding (V)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={40} defaultValue="14px" />
                },
                btnPaddingHorizontal: {
                    type: "custom", label: "Button Padding (H)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={80} defaultValue="32px" />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={60} />
                },
                imageOverlap: {
                    type: "custom", label: "Image Overlap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} defaultValue={40} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Creating Forever New Beginning",
            subtitle: "We Believe That Crafting The Perfect Wedding Goes Beyond Mere Coordination - It's About Curating An Experience That Echoes Your Unique Love Story.",
            ctaText: "Book Now",
            ctaLink: "#booking",
            secondaryButtonText: "Contact Us",
            happyClientsText: "2,718 Happy Clients",
            stat1Value: "500+",
            stat1Label: "Event Organized",
            stat2Value: "24/7",
            stat2Label: "We're Available",
            stat3Value: "100+",
            stat3Label: "Team Members",
        },
        media: {
            imageUrl1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
            imageUrl2: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=600&q=80",
        },
        typography: {
            titleFont: "Playfair Display",
            titleSize: { desktop: 3.5 },
            titleWeight: "700",
            subtitleSize: { desktop: 1 },
        },
        styling: {
            titleColor: "#6b4423",
            subtitleColor: "#475569",
            backgroundColor: "#fff9f5",
            accentColor: "#d4a574",
            secondaryColor: "#6b4423",
            btnPaddingVertical: "14px",
            btnPaddingHorizontal: "32px",
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 60 },
            imageOverlap: { desktop: 40 },
        }
    },
    render: (props) => <HeroWeddingRender {...props} />,
};
