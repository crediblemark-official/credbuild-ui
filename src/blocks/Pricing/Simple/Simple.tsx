"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import React from "react";
const SimplePricingRender = dynamic<PricingSimpleProps>(() => import("./SimpleRender").then(m => m.SimplePricingRender));
import type { PricingSimpleProps } from "./types";

export type { PricingSimpleProps };

export const PricingSimple: ComponentConfig<PricingSimpleProps> = {
    label: "Pricing Simple",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                items: {
                    type: "array",
                    label: "Packages",
                    arrayFields: {
                        highlightLabel: { type: "text", label: "Highlight Label" },
                        name: { type: "text", label: "Package Name" },
                        subtitle: { type: "text", label: "Package Subtitle" },
                        pricePrefix: { type: "text", label: "Price Prefix" },
                        price: { type: "text", label: "Price" },
                        priceSuffix: { type: "text", label: "Price Suffix" },
                        buttonText: { type: "text", label: "Button Text" },
                        buttonUrl: { type: "text", label: "Button URL" },
                        buttonDesc: { type: "text", label: "Button Description" },
                        features: {
                            type: "array",
                            label: "Features",
                            arrayFields: {
                                feature: { type: "text", label: "Feature" },
                                available: {
                                    type: "radio",
                                    label: "Status",
                                    options: [
                                        { label: "Available", value: true },
                                        { label: "Unavailable", value: false }
                                    ]
                                }
                            },
                        },
                    },
                    getItemSummary: (item) => item.name || "Package",
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom",
                    label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                titleFont: {
                    type: "select",
                    label: "Title Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                bodyFont: {
                    type: "select",
                    label: "Body Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                cardFontSize: {
                    type: "custom",
                    label: "Card Font Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={24} min={12} step={1} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                mainColor: {
                    type: "custom",
                    label: "Main Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                sectionBg: {
                    type: "custom",
                    label: "Section Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBg: {
                    type: "custom",
                    label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                scrollMode: {
                    type: "select",
                    label: "Layout Mode",
                    options: [
                        { label: "Responsive Grid", value: "grid" },
                        { label: "Horizontal Scroll", value: "horizontal" },
                    ],
                },
                columns: {
                    type: "custom",
                    label: "Columns",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={1} max={4} step={1} />
                },
                gap: {
                    type: "custom",
                    label: "Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} min={0} step={4} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Pricing Plans",
            items: [
                {
                    name: "Basic Plan",
                    subtitle: "For Beginners",
                    price: "$99",
                    priceSuffix: "/month",
                    buttonText: "Choose Basic",
                    buttonUrl: "#",
                    features: [{ feature: "Core Features", available: true }]
                },
                {
                    highlightLabel: "Most Popular",
                    name: "Pro Plan",
                    subtitle: "For Professionals",
                    price: "$199",
                    priceSuffix: "/month",
                    buttonText: "Choose Pro",
                    buttonUrl: "#",
                    buttonDesc: "* Limited time offer",
                    features: [{ feature: "All Basic Features + Premium", available: true }]
                },
            ],
        },
        typography: {
            titleColor: "#1e293b",
            textColor: "#475569",
            titleFont: "inherit",
            bodyFont: "inherit",
            cardFontSize: { desktop: 16, tablet: 16, mobile: 16 },
        },
        styling: {
            mainColor: "#dc2626",
            sectionBg: "#f8fafc",
            cardBg: "#ffffff",
            scrollMode: "grid",
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            gap: { desktop: 28, tablet: 24, mobile: 16 },
        }
    },
    render: (props) => <SimplePricingRender {...props} />,
};

