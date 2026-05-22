"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroRealEstateRender = dynamic<HeroRealEstateProps>(() => import("./RealEstateRender").then(m => m.HeroRealEstateRender));
import type { HeroRealEstateProps } from "./types";

export type { HeroRealEstateProps };

export const HeroRealEstate: ComponentConfig<HeroRealEstateProps> = {
    label: "Hero - Real Estate",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Main Title" },
                description: { type: "textarea", label: "Description" },
                searchPlaceholder: { type: "text", label: "Search Placeholder" },
                searchButtonText: { type: "text", label: "Search Button" },
                avatarCount: { type: "text", label: "Satisfied Buyers Count" },
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
                    label: "House Image",
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
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descriptionColor: {
                    type: "custom", label: "Description Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                primaryColor: {
                    type: "custom", label: "Primary/Search Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnTextColor: {
                    type: "custom", label: "Button Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                secondaryColor: {
                    type: "custom", label: "Secondary/Avatar Bg",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                avatarRingColor: {
                    type: "custom", label: "Avatar Ring Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                searchRadius: {
                    type: "custom", label: "Search Box Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v))} unit="px" max={50} defaultValue={12} />
                },
                btnRadius: {
                    type: "custom", label: "Btn Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v))} unit="px" max={50} defaultValue={8} />
                },
                imageRadius: {
                    type: "custom", label: "Image Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v))} unit="px" max={50} defaultValue={24} />
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
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Start Your Journey To Home",
            description: "Guiding you through the process of finding your home, we understand that this journey is more than just a transaction.",
            searchPlaceholder: "Location",
            searchButtonText: "Search",
            avatarCount: "1,618 Satisfied Buyers",
            stat1Value: "15k+",
            stat1Label: "Happy Customer",
            stat2Value: "1200+",
            stat2Label: "Listed Properties",
            stat3Value: "2000+",
            stat3Label: "Expert Agents",
        },
        media: {
            imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
        },
        typography: {
            titleSize: { desktop: 3.5 },
            titleWeight: "800",
        },
        styling: {
            backgroundColor: "#ffffff",
            titleColor: "#1a2332",
            descriptionColor: "#475569",
            primaryColor: "#3b5bdb",
            btnTextColor: "#ffffff",
            secondaryColor: "#e0e7ff",
            avatarRingColor: "#ffffff",
            searchRadius: 12,
            btnRadius: 8,
            imageRadius: 24,
            gap: { desktop: 60 },
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 80 },
        }
    },
    render: (props) => <HeroRealEstateRender {...props} />,
};
