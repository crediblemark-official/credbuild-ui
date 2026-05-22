"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroMedicalRender = dynamic<HeroMedicalProps>(() => import("./MedicalRender").then(m => m.HeroMedicalRender));
import type { HeroMedicalProps } from "./types";

export type { HeroMedicalProps };

export const HeroMedical: ComponentConfig<HeroMedicalProps> = {
    label: "Hero - Medical/Health",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Main Title" },
                description: { type: "textarea", label: "Description" },
                ctaText: { type: "text", label: "Primary Button" },
                ctaLink: { type: "text", label: "Primary Button Link" },
                secondaryButtonText: { type: "text", label: "Secondary Button" },
                secondaryButtonLink: { type: "text", label: "Secondary Button Link" },
                badge1Text: { type: "text", label: "Badge 1 Text" },
                badge2Text: { type: "text", label: "Badge 2 Text" },
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
                    type: "custom", label: "Primary/Blob Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnTextColor: {
                    type: "custom", label: "Primary Btn Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                secondaryColor: {
                    type: "custom", label: "Secondary Btn Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                blobColor: {
                    type: "custom", label: "Blob Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                badgeBgColor: {
                    type: "custom", label: "Badge Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                badgeTextColor: {
                    type: "custom", label: "Badge Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="px" max={50} defaultValue={12} />
                },
                imageRadius: {
                    type: "custom", label: "Image Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="px" max={50} defaultValue={24} />
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
                btnPaddingHorizontal: {
                    type: "custom", label: "Button Padding (H)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={60} defaultValue="40px" />
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding (V)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={30} defaultValue="14px" />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Get Virtual Consultations For A Healthier You",
            description: "Discover the convenience of expert medical guidance from the comfort of your surroundings. Our team of dedicated and experienced doctors is here to help you.",
            ctaText: "Contact Us",
            ctaLink: "#",
            secondaryButtonText: "Get Consultation",
            secondaryButtonLink: "/services",
            badge1Text: "Get Expert's Consultation",
            badge2Text: "24 Hour Support From The Doctors",
        },
        media: {
            imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        },
        typography: {
            titleSize: { desktop: 3.5 },
            titleWeight: "800",
        },
        styling: {
            backgroundColor: "#ffffff",
            titleColor: "#1a2332",
            descriptionColor: "#475569",
            primaryColor: "#6366f1",
            btnTextColor: "#ffffff",
            secondaryColor: "#6366f1",
            blobColor: "#ffd700",
            badgeBgColor: "#ffffff",
            badgeTextColor: "#1a2332",
            btnRadius: 12,
            imageRadius: 24,
            gap: { desktop: 60 },
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 80 },
            btnPaddingHorizontal: "40px",
            btnPaddingVertical: "14px",
        }
    },
    render: (props) => <HeroMedicalRender {...props} />,
};
