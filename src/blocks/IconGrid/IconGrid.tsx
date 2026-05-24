"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { IconGridProps } from "./types";

const IconGridRender = dynamic<IconGridProps>(() => import("./IconGridRender").then(m => m.IconGridRender));
export const IconGrid: ComponentConfig<IconGridProps> = {
    label: "Icon Grid",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                items: {
                    type: "array",
                    label: "Grid Items",
                    arrayFields: {
                        title: { type: "text", label: "Title" },
                        description: { type: "textarea", label: "Description" },
                        icon: { type: "text", label: "Icon (Emoji or FontAwesome class)" },
                    },
                    getItemSummary: (item) => item.title || "Item",
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleSize: {
                    type: "custom", label: "Title Font Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={16} max={96} step={2} />
                },
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                iconSize: {
                    type: "custom", label: "Icon Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={16} max={128} step={4} />
                },
                iconColor: {
                    type: "custom", label: "Icon Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                itemTitleSize: {
                    type: "custom", label: "Item Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={48} step={1} />
                },
                itemDescriptionSize: {
                    type: "custom", label: "Item Desc Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={24} step={1} />
                },
                itemTextColor: {
                    type: "custom", label: "Item Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                columns: {
                    type: "number",
                    label: "Desktop Columns",
                    min: 1,
                    max: 6,
                },
                mobileLayout: {
                    type: "select",
                    label: "Mobile Layout",
                    options: [
                        { label: "Vertical Stack", value: "grid" },
                        { label: "Horizontal Scroll", value: "scroll" },
                    ],
                },
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom", label: "Section Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                cardBackgroundColor: {
                    type: "custom", label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderColor: {
                    type: "custom", label: "Card Border",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Why Choose Us?",
            items: [
                { title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet.", icon: "★" },
                { title: "Dolor Sit Amet", description: "Consectetur adipiscing elit.", icon: "★" },
                { title: "Sed Do Eiusmod", description: "Tempor incididunt ut labore.", icon: "★" },
            ],
        },
        typography: {
            titleSize: { desktop: 48, tablet: 40, mobile: 28 },
            titleColor: "#ffffff",
            iconSize: { desktop: 56, tablet: 48, mobile: 40 },
            itemTitleSize: { desktop: 24, tablet: 20, mobile: 18 },
            itemDescriptionSize: { desktop: 16, tablet: 15, mobile: 14 },
            itemTextColor: "#ffffff",
        },
        styling: {
            columns: 3,
            mobileLayout: "grid",
            backgroundColor: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            cardBackgroundColor: "rgba(255,255,255,0.1)",
            cardBorderColor: "rgba(255,255,255,0.2)",
        }
    },
    render: (props) => <IconGridRender {...props} />,
};
