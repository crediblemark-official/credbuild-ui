"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import React from "react";

import { PortfolioProps } from "./types";

const PortfolioRender = dynamic<PortfolioProps>(() => import("./PortfolioRender").then(m => m.PortfolioRender));
export const Portfolio: ComponentConfig<PortfolioProps> = {
    label: "Portfolio / Projects",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Section Title" },
                subtitle: { type: "text", label: "Subtitle" },
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
                columns: {
                    type: "custom",
                    label: "Columns",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={1} max={4} step={1} />
                },
                titleColor: {
                    type: "custom",
                    label: "Section Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                subtitleColor: {
                    type: "custom",
                    label: "Subtitle Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBgColor: {
                    type: "custom",
                    label: "Card Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardTitleColor: {
                    type: "custom",
                    label: "Card Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardCategoryColor: {
                    type: "custom",
                    label: "Card Category Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Featured Projects",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        styling: {
            backgroundColor: "#f9fafb",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            titleColor: "#111827",
            subtitleColor: "#6b7280",
            cardBgColor: "#ffffff",
            cardTitleColor: "#111827",
            cardCategoryColor: "#2563eb",
        }
    },
    render: (props) => <PortfolioRender {...props} />,
};
