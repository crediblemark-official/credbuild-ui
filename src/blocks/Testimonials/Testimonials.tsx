"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { TestimonialsProps } from "./types";

const TestimonialsRender = dynamic<TestimonialsProps>(() => import("./TestimonialsRender").then(m => m.TestimonialsRender));
export const Testimonials: ComponentConfig<TestimonialsProps> = {
    label: "Testimonials",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                description: { type: "textarea", label: "Description" },
                limit: { type: "number", label: "Max Items", placeholder: "6" },
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
                quoteFont: {
                    type: "select",
                    label: "Quote Font",
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
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom",
                    label: "Section Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                cardBackgroundColor: {
                    type: "custom",
                    label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderColor: {
                    type: "custom",
                    label: "Card Border Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descriptionColor: {
                    type: "custom",
                    label: "Description Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                quoteColor: {
                    type: "custom",
                    label: "Quote Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                authorColor: {
                    type: "custom",
                    label: "Author Name Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                roleColor: {
                    type: "custom",
                    label: "Role Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "What Our Clients Say",
            description: "Testimonials from our satisfied customers.",
            limit: 6,
            items: [
                { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "John Doe", role: "CEO, Company A" },
                { quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", author: "Jane Smith", role: "CTO, Company B" },
                { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", author: "Alice Johnson", role: "Designer" },
            ],
        },
        typography: {
            titleFont: "inherit",
            quoteFont: "inherit",
        },
        styling: {
            scrollMode: "grid",
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            backgroundColor: "#ffffff",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            cardBackgroundColor: "white",
            cardBorderColor: "#f1f5f9",
            titleColor: "#1e293b",
            descriptionColor: "#475569",
            quoteColor: "#475569",
            authorColor: "#1e293b",
            roleColor: "#94a3b8",
        }
    },
    render: (props) => <TestimonialsRender {...props} />,
};

