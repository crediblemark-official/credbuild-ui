"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
import React from "react";
const ModernPricingRender = dynamic<PricingModernProps>(() => import("./ModernRender").then(m => m.ModernPricingRender));
import type { PricingModernProps } from "./types";

export type { PricingModernProps };

export const PricingModern: ComponentConfig<PricingModernProps> = {
    label: "Pricing Modern",
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
                        theme: {
                            type: "select",
                            label: "Card Theme",
                            options: [
                                { label: "Blue", value: "blue" },
                                { label: "Purple", value: "purple" },
                                { label: "Green", value: "green" },
                                { label: "Orange", value: "orange" },
                                { label: "Pink", value: "pink" },
                                { label: "Red", value: "red" },
                            ]
                        },
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
            title: "Choose Your Plan",
            description: "Select the perfect plan for your needs.",
            items: [
                {
                    theme: "green",
                    name: "Basic",
                    price: "$19",
                    priceSuffix: "/mo",
                    buttonText: "Get Started",
                    features: [{ feature: "5 Projects" }, { feature: "Basic Analytics" }]
                },
                {
                    theme: "orange",
                    name: "Pro",
                    price: "$49",
                    priceSuffix: "/mo",
                    highlightLabel: "Best Value",
                    buttonText: "Go Pro",
                    features: [{ feature: "Unlimited Projects" }, { feature: "Advanced Analytics" }, { feature: "Priority Support" }]
                },
                {
                    theme: "purple",
                    name: "Enterprise",
                    price: "$99",
                    pricePrefix: "From",
                    priceSuffix: "/mo",
                    buttonText: "Contact Sales",
                    features: [{ feature: "Custom Solutions" }, { feature: "Dedicated Manager" }]
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
    render: (props) => <ModernPricingRender {...props} />,
};
