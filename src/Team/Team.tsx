"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { MediaPickerField } from "../MediaPickerField";

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
                columns: { type: "number", label: "Desktop Columns", min: 1, max: 4 },
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
                imageRadius: { type: "number", label: "Image Radius (%)", min: 0, max: 50 },
            },
        },
    },
    defaultProps: {
        content: {
            title: "Kenali Tim Kami",
            subtitle: "Orang-orang berbakat yang berdedikasi untuk memberikan hasil terbaik untuk Anda.",
            members: [
                { name: "Andi Wijaya", role: "Creative Director", bio: "Berpengalaman lebih dari 10 tahun di industri kreatif." },
                { name: "Siti Aminah", role: "Lead Developer", bio: "Spesialis dalam pengembangan sistem berbasis cloud." },
                { name: "Budi Santoso", role: "Project Manager", bio: "Memastikan setiap proyek berjalan tepat waktu dan sesuai budget." },
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
            columns: 3,
            backgroundColor: "#ffffff",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            cardBackgroundColor: "#f8fafc",
            cardBorderColor: "#e2e8f0",
            imageRadius: 50,
        },
    },
    render: (props) => <TeamRender {...props} />,
};
