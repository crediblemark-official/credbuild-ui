"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
const BlogListRender = dynamic<BlogListProps>(() => import("./BlogListRender").then(m => m.BlogListRender));
import type { BlogListProps } from "./types";

export type { BlogListProps };

export const BlogList: ComponentConfig<BlogListProps> = {
    label: "Blog List",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Section Title" },
                description: { type: "textarea", label: "Description" },
                limit: { type: "number", label: "Number of posts" },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descriptionColor: {
                    type: "custom", label: "Description Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardTitleColor: {
                    type: "custom", label: "Card Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardTextColor: {
                    type: "custom", label: "Card Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardDateColor: {
                    type: "custom", label: "Card Date Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                linkColor: {
                    type: "custom", label: "Link Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                columns: {
                    type: "custom",
                    label: "Columns",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={1} max={4} step={1} />
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
            title: "Latest from our Blog",
            description: "Insights and updates from our team.",
            limit: 3,
        },
        typography: {
            titleColor: "#111827",
            descriptionColor: "#4b5563",
            cardTitleColor: "#111827",
            cardTextColor: "#4b5563",
            cardDateColor: "#9ca3af",
            linkColor: "#2563eb",
        },
        styling: {
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            backgroundColor: "#ffffff",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            cardBackgroundColor: "#ffffff",
            cardBorderColor: "#f3f4f6",
        }
    },
    render: (props) => <BlogListRender {...props} />,
};

