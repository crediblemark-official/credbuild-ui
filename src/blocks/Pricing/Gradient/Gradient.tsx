"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
import React from "react";
const GradientPricingRender = dynamic<PricingGradientProps>(() => import("./GradientRender").then(m => m.GradientPricingRender));
import type { PricingGradientProps } from "./types";

export type { PricingGradientProps };

export const PricingGradient: ComponentConfig<PricingGradientProps> = {
    label: "Pricing Gradient",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                description: { type: "textarea", label: "Description" },
                items: {
                    type: "array",
                    label: "Packages",
                    arrayFields: {
                        highlightLabel: { type: "text", label: "Highlight Label" },
                        name: { type: "text", label: "Package Name" },
                        pricePrefix: { type: "text", label: "Price Prefix" },
                        price: { type: "text", label: "Price" },
                        priceSuffix: { type: "text", label: "Price Suffix" },
                        buttonText: { type: "text", label: "Button Text" },
                        buttonUrl: { type: "text", label: "Button URL" },
                        features: {
                            type: "array",
                            label: "Features",
                            arrayFields: {
                                feature: { type: "text", label: "Feature" },
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
                columnsDesktop: { type: "number", label: "Desktop Columns", placeholder: "3" },
                columnsTablet: { type: "number", label: "Tablet Columns", placeholder: "2" },
                columnsMobile: { type: "number", label: "Mobile Columns", placeholder: "1" },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Premium Plans",
            description: "Unlock full potential with our premium plans.",
            items: [
                {
                    name: "Personal",
                    price: "$15",
                    priceSuffix: "/mo",
                    buttonText: "Join Now",
                    features: [{ feature: "Single User" }, { feature: "5GB Storage" }]
                },
                {
                    name: "Business",
                    price: "$45",
                    priceSuffix: "/mo",
                    highlightLabel: "Best Choice",
                    buttonText: "Get Access",
                    features: [{ feature: "5 Users" }, { feature: "50GB Storage" }, { feature: "Priority Email" }]
                },
                {
                    name: "Ultimate",
                    price: "$99",
                    priceSuffix: "/mo",
                    buttonText: "Go Ultimate",
                    features: [{ feature: "Unlimited Users" }, { feature: "1TB Storage" }, { feature: "24/7 Phone Support" }]
                }
            ],
        },
        typography: {
            titleFont: "inherit",
            bodyFont: "inherit",
        },
        styling: {
            columnsDesktop: 3,
            columnsTablet: 2,
            columnsMobile: 1,
            mainColor: "#8b5cf6",
        }
    },
    render: (props) => <GradientPricingRender {...props} />,
};
