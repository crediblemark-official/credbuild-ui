"use client";

import dynamic from "next/dynamic";
import { ColorPickerField, ResponsiveSliderField, type ComponentConfig } from "@crediblemark/build";
import React from "react";
const AccordionRender = dynamic<AccordionProps>(() => import("./AccordionRender").then(m => m.AccordionRender));
import type { AccordionProps } from "./types";

export type { AccordionProps };

export const Accordion: ComponentConfig<AccordionProps> = {
    label: "FAQ Accordion",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                items: {
                    type: "array",
                    label: "FAQ Items",
                    arrayFields: {
                        question: { type: "text", label: "Question" },
                        answer: { type: "textarea", label: "Answer" },
                    },
                    getItemSummary: (item) => item.question || "Question",
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
                backgroundColor: {
                    type: "custom",
                    label: "Section Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom",
                    label: "Section Padding (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                itemBgColor: {
                    type: "custom",
                    label: "Item Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom",
                    label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                activeColor: {
                    type: "custom",
                    label: "Active Icon Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                borderRadius: {
                    type: "custom",
                    label: "Card Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={1} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Frequently Asked Questions",
            items: [
                { question: "Lorem ipsum dolor sit amet?", answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Ut enim ad minim veniam?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { question: "Duis aute irure dolor in reprehenderit?", answer: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
            ],
        },
        typography: {},
        styling: {
            backgroundColor: "#ffffff",
            titleColor: "#1e293b",
            itemBgColor: "#f8fafc",
            activeColor: "#2563eb",
            textColor: "#475569",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            borderRadius: { desktop: 16, tablet: 16, mobile: 12 },
        }
    },
    render: (props) => <AccordionRender {...props} />,
};
