"use client";

import { ColorPickerField, ResponsiveSliderField, type ComponentConfig } from "@crediblemark/build";
import dynamic from "next/dynamic";
const GalleryRender = dynamic<GalleryProps>(() => import("./GalleryRender").then(m => m.GalleryRender));
import type { GalleryProps } from "./types";

export type { GalleryProps };

export const Gallery: ComponentConfig<GalleryProps> = {
    label: "Gallery",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                description: { type: "textarea", label: "Description" },
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
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                variant: {
                    type: "select",
                    label: "Style Preset",
                    options: [
                        { label: "Theme Primary (Follow Site Brand)", value: "theme" },
                        { label: "Red Background (Dark Theme)", value: "red" },
                        { label: "White Background (Light Theme)", value: "white" },
                    ],
                },
                scrollMode: {
                    type: "select",
                    label: "Layout Mode",
                    options: [
                        { label: "Responsive Grid", value: "grid" },
                        { label: "Masonry (Mixed Heights)", value: "masonry" },
                        { label: "Horizontal Scroll", value: "horizontal" },
                    ],
                },
                columns: {
                    type: "custom",
                    label: "Columns",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={1} max={6} step={1} />
                },
                gap: {
                    type: "custom",
                    label: "Space Between (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={64} step={4} />
                },
                padding: {
                    type: "custom",
                    label: "Section Padding (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                aspectRatio: {
                    type: "select",
                    label: "Aspect Ratio",
                    options: [
                        { label: "Original (For Masonry)", value: "original" },
                        { label: "Portrait (3:4)", value: "portrait" },
                        { label: "Square (1:1)", value: "square" },
                        { label: "Landscape (4:3)", value: "landscape" },
                        { label: "Video (16:9)", value: "video" },
                    ]
                },
                imageFit: {
                    type: "radio",
                    label: "Image Fit",
                    options: [
                        { label: "Cover (Fill)", value: "cover" },
                        { label: "Contain (Fit)", value: "contain" },
                    ]
                },
                borderRadius: {
                    type: "custom",
                    label: "Corner Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={48} step={2} />
                },
                backgroundColor: {
                    type: "custom",
                    label: "Custom Background Override",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Our Gallery",
            description: "A showcase of our best work and projects.",
        },
        typography: {
            titleFont: "inherit",
            titleColor: "",
        },
        styling: {
            variant: "theme",
            scrollMode: "grid",
            columns: { desktop: 5, tablet: 3, mobile: 2 },
            gap: { desktop: 24, tablet: 16, mobile: 12 },
            borderRadius: { desktop: 16, tablet: 16, mobile: 8 },
            padding: { desktop: 80, tablet: 60, mobile: 40 },
        }
    },
    render: (props) => <GalleryRender {...props} />,
};
