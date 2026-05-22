"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
import React from "react";
const BoxPricingRender = dynamic<PricingBoxProps>(() => import("./BoxRender").then(m => m.BoxPricingRender));
import type { PricingBoxProps } from "./types";

export type { PricingBoxProps };

export const PricingBox: ComponentConfig<PricingBoxProps> = {
    label: "Pricing Box",
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
            title: "Standard Pricing",
            description: "Clear and concise pricing for your business.",
            items: [
                {
                    name: "Starter",
                    price: "$29",
                    priceSuffix: "/mo",
                    buttonText: "Start Now",
                    features: [{ feature: "Core Features" }, { feature: "Community Support" }]
                },
                {
                    name: "Growth",
                    price: "$59",
                    priceSuffix: "/mo",
                    highlightLabel: "Popular",
                    buttonText: "Scale Up",
                    features: [{ feature: "All Core Features" }, { feature: "Priority Support" }, { feature: "Advanced Analytics" }]
                },
                {
                    name: "Enterprise",
                    price: "$199",
                    priceSuffix: "/mo",
                    buttonText: "Contact Us",
                    features: [{ feature: "Custom Integration" }, { feature: "24/7 Support" }]
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
            mainColor: "#2563eb",
        }
    },
    render: (props) => <BoxPricingRender {...props} />,
};
