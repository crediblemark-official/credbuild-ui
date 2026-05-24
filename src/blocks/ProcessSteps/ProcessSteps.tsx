"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { ProcessStepsProps } from "./types";

const ProcessStepsRender = dynamic<ProcessStepsProps>(() => import("./ProcessStepsRender").then(m => m.ProcessStepsRender));
export const ProcessSteps: ComponentConfig<ProcessStepsProps> = {
    label: "Process Steps",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Section Title" },
                steps: {
                    type: "array",
                    label: "Steps",
                    arrayFields: {
                        title: { type: "text", label: "Step Title" },
                        description: { type: "textarea", label: "Description" },
                        icon: { type: "text", label: "Icon (Copy class from fontawesome.com, e.g. fa-solid fa-rocket)" },
                    },
                    getItemSummary: (item, index) => item.title || `Step ${(index !== undefined ? index + 1 : 1)}`,
                },
            },
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
                stepTitleSize: {
                    type: "custom", label: "Step Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={48} step={1} />
                },
                stepDescriptionSize: {
                    type: "custom", label: "Step Desc Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={24} step={1} />
                },
                textColor: {
                    type: "custom", label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom", label: "Section Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                stepColor: {
                    type: "custom", label: "Step Circle Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                stepNumberColor: {
                    type: "custom", label: "Step Number Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                layout: {
                    type: "select",
                    label: "Desktop Layout",
                    options: [
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                    ],
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Our Process",
            steps: [
                { title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "Dolor Sit Amet", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { title: "Consectetur", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
            ],
        },
        typography: {
            titleSize: { desktop: 48, tablet: 40, mobile: 32 },
            titleColor: "#0f172a",
            stepTitleSize: { desktop: 24, tablet: 20, mobile: 18 },
            stepDescriptionSize: { desktop: 16, tablet: 15, mobile: 14 },
            textColor: "#334155",
        },
        styling: {
            backgroundColor: "#f8fafc",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            stepColor: "#3b82f6",
            stepNumberColor: "#ffffff",
            layout: "horizontal",
        }
    },
    render: (props) => <ProcessStepsRender {...props} />,
};
