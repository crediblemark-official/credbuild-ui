"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { MediaPickerField } from "../../MediaPickerField";

import { TeamProps } from "./types";

const TeamRender = dynamic<TeamProps>(() => import("./TeamRender").then(m => m.TeamRender));
export const Team: ComponentConfig<TeamProps> = {
    label: "Team Members",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Section Title" },
                subtitle: { type: "textarea", label: "Subtitle" },
                members: {
                    type: "array",
                    label: "Team Members",
                    arrayFields: {
                        name: { type: "text", label: "Name" },
                        role: { type: "text", label: "Role/Position" },
                        image: {
                            type: "custom",
                            label: "Photo",
                            render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} variant="compact" />,
                        },
                        bio: { type: "textarea", label: "Short Bio" },
                    },
                    getItemSummary: (item) => item.name || "Member",
                },
            },
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={16} max={96} step={2} />,
                },
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                memberNameSize: {
                    type: "custom", label: "Name Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={48} step={1} />,
                },
                memberRoleSize: {
                    type: "custom", label: "Role Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={24} step={1} />,
                },
                textColor: {
                    type: "custom", label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
            },
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
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                padding: {
                    type: "custom", label: "Section Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />,
                },
                cardBackgroundColor: {
                    type: "custom", label: "Card Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                cardBorderColor: {
                    type: "custom", label: "Border Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                imageRadius: {
                    type: "custom",
                    label: "Image Radius (%)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={50} step={1} />
                },
            },
        },
    },
    defaultProps: {
        content: {
            title: "Meet Our Team",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: [
                { name: "John Doe", role: "Creative Director", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { name: "Jane Doe", role: "Lead Developer", bio: "Sed do eiusmod tempor incididunt ut labore et dolore." },
                { name: "Jim Smith", role: "Project Manager", bio: "Ut enim ad minim veniam, quis nostrud exercitation." },
            ],
        },
        typography: {
            titleSize: { desktop: 48, tablet: 40, mobile: 32 },
            titleColor: "#0f172a",
            memberNameSize: { desktop: 20, tablet: 18, mobile: 18 },
            memberRoleSize: { desktop: 14, tablet: 13, mobile: 13 },
            textColor: "#334155",
        },
        styling: {
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            backgroundColor: "#ffffff",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            cardBackgroundColor: "#f8fafc",
            cardBorderColor: "#e2e8f0",
            imageRadius: { desktop: 50, tablet: 50, mobile: 50 },
        },
    },
    render: (props) => <TeamRender {...props} />,
};

