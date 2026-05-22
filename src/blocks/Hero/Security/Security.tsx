"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import React from "react";
const HeroSecurityRender = dynamic<HeroSecurityProps>(() => import("./SecurityRender").then(m => m.HeroSecurityRender));
import type { HeroSecurityProps } from "./types";

export type { HeroSecurityProps };

export const HeroSecurity: ComponentConfig<HeroSecurityProps> = {
    label: "Hero - Security/Tech",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Main Title" },
                ctaText: { type: "text", label: "Primary Button" },
                ctaLink: { type: "text", label: "Primary Button Link" },
                secondaryButtonText: { type: "text", label: "Secondary Button" },
                feature1Icon: { type: "text", label: "Feature 1 Icon" },
                feature1Title: { type: "text", label: "Feature 1 Title" },
                feature1Description: { type: "text", label: "Feature 1 Description" },
                feature2Icon: { type: "text", label: "Feature 2 Icon" },
                feature2Title: { type: "text", label: "Feature 2 Title" },
                feature2Description: { type: "text", label: "Feature 2 Description" },
                feature3Icon: { type: "text", label: "Feature 3 Icon" },
                feature3Title: { type: "text", label: "Feature 3 Title" },
                feature3Description: { type: "text", label: "Feature 3 Description" },
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
                featureIconSize: {
                    type: "custom", label: "Feature Icon Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={5} step={0.1} defaultValue={3} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                gradientStart: {
                    type: "custom", label: "Gradient Start",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                gradientEnd: {
                    type: "custom", label: "Gradient End",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                gradientAngle: {
                    type: "custom", label: "Gradient Angle",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="deg" max={360} defaultValue={135} />
                },
                textColor: {
                    type: "custom", label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                primaryBtnColor: {
                    type: "custom", label: "Primary Btn Bg",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                primaryBtnTextColor: {
                    type: "custom", label: "Primary Btn Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                secondaryBtnColor: {
                    type: "custom", label: "Secondary Btn Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBgColor: {
                    type: "custom", label: "Card Bg",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderColor: {
                    type: "custom", label: "Card Border",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                btnRadius: {
                    type: "custom", label: "Button Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="px" max={50} defaultValue={12} />
                },
                cardRadius: {
                    type: "custom", label: "Card Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(typeof v === "number" ? v : parseFloat(v))} unit="px" max={50} defaultValue={16} />
                },
                gap: {
                    type: "custom", label: "Grid Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} defaultValue={32} />
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
            title: "Safeguard Your Data With Our Expert Solutions",
            ctaText: "Defend My Data",
            ctaLink: "#",
            secondaryButtonText: "Free Trial",
            feature1Icon: "🛡️",
            feature1Title: "Threat Detection",
            feature1Description: "Our technology constantly scans for potential threats",
            feature2Icon: "⏰",
            feature2Title: "24/7 Monitoring",
            feature2Description: "All-time monitoring of your data to keep it safe",
            feature3Icon: "🔐",
            feature3Title: "Data Encryption",
            feature3Description: "Rest easy knowing your sensitive information is shielded",
        },
        typography: {
            titleSize: { desktop: 3.5 },
            titleWeight: "800",
            featureIconSize: { desktop: 3 },
        },
        styling: {
            gradientStart: "#667eea",
            gradientEnd: "#764ba2",
            gradientAngle: 135,
            textColor: "#ffffff",
            primaryBtnColor: "#ffffff",
            primaryBtnTextColor: "#667eea",
            secondaryBtnColor: "#ffffff",
            cardBgColor: "rgba(255, 255, 255, 0.1)",
            cardBorderColor: "rgba(255, 255, 255, 0.2)",
            btnRadius: 12,
            cardRadius: 16,
            gap: { desktop: 32 },
            paddingTop: { desktop: 80 },
            paddingBottom: { desktop: 60 },
            btnPaddingHorizontal: "40px",
            btnPaddingVertical: "14px",
        }
    },
    render: (props) => <HeroSecurityRender {...props} />,
};
