"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import React from "react";
const HeroDentalRender = dynamic<HeroDentalProps>(() => import("./DentalRender").then(m => m.HeroDentalRender));
import type { HeroDentalProps } from "./types";

export type { HeroDentalProps };

export const HeroDental: ComponentConfig<HeroDentalProps> = {
    label: "Hero - Dental Clinic",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title (Part 1)" },
                titleHighlight: { type: "text", label: "Title Highlight (Part 2)" },
                subtitle: { type: "textarea", label: "Subtitle" },
                ctaText1: { type: "text", label: "Primary Button" },
                ctaLink1: { type: "text", label: "Primary Button Link" },
                ctaText2: { type: "text", label: "Secondary Button" },
                ctaLink2: { type: "text", label: "Secondary Button Link" },
                service1Title: { type: "text", label: "Service 1 Title" },
                service1Desc: { type: "textarea", label: "Service 1 Description" },
                service2Title: { type: "text", label: "Service 2 Title" },
                service2Desc: { type: "textarea", label: "Service 2 Description" },
                service3Title: { type: "text", label: "Service 3 Title" },
                service3Desc: { type: "textarea", label: "Service 3 Description" },
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
                        { label: "Poppins", value: "Poppins" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={6} step={0.1} defaultValue={3.5} />
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
                highlightColor: {
                    type: "custom", label: "Highlight Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                subtitleColor: {
                    type: "custom", label: "Subtitle Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnPrimaryColor: {
                    type: "custom", label: "Primary Button Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnPrimaryTextColor: {
                    type: "custom", label: "Primary Button Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnSecondaryColor: {
                    type: "custom", label: "Secondary Button Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnSecondaryTextColor: {
                    type: "custom", label: "Secondary Button Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={50} defaultValue="8px" />
                },
                btnPaddingVertical: {
                    type: "custom", label: "Button Padding (V)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={40} defaultValue="14px" />
                },
                btnPaddingHorizontal: {
                    type: "custom", label: "Button Padding (H)",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={80} defaultValue="40px" />
                },
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                accentColor: {
                    type: "custom", label: "Accent Color (Icons)",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                serviceCardBg: {
                    type: "custom", label: "Service Card Bg",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={60} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Your Destination For Healthy Teeth And",
            titleHighlight: "Beautiful Smile",
            subtitle: "Welcome to dental care where healthy teeth and beautiful smiles are not just aspirations, but destinations",
            ctaText1: "Book Appointment",
            ctaLink1: "#",
            ctaText2: "Our Treatments",
            ctaLink2: "#",
            service1Title: "Teeth Whitening",
            service1Desc: "Transformative Teeth Whitening Services for all ages",
            service2Title: "Precision Dental Implants",
            service2Desc: "Implants that Feel and Look Like Your Own",
            service3Title: "Gentle Sedation Dentistry",
            service3Desc: "Anxiety-free dentistry: your comfort, our priority",
        },
        typography: {
            titleFont: "Inter",
            titleSize: { desktop: 3.5 },
            titleWeight: "700",
            subtitleSize: { desktop: 1 },
        },
        styling: {
            titleColor: "#1a1a1a",
            highlightColor: "#4169E1",
            subtitleColor: "#475569",
            btnPrimaryColor: "#4169E1",
            btnPrimaryTextColor: "#ffffff",
            btnSecondaryColor: "transparent",
            btnSecondaryTextColor: "#4169E1",
            btnRadius: "8px",
            btnPaddingVertical: "14px",
            btnPaddingHorizontal: "40px",
            backgroundColor: "#ffffff",
            accentColor: "#4169E1",
            serviceCardBg: "#f8fafc",
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 60 },
        }
    },
    render: (props) => <HeroDentalRender {...props} />,
};
