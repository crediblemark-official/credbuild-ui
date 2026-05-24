"use client";

import { ColorPickerField, type ComponentConfig } from "@crediblemark/build";
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
                columnsDesktop: { type: "number", label: "Columns (Desktop)", placeholder: "5" },
                columnsTablet: { type: "number", label: "Columns (Tablet)", placeholder: "3" },
                columnsMobile: { type: "number", label: "Columns (Mobile)", placeholder: "2" },
                gap: { type: "number", label: "Space Between (px)", placeholder: "24" },
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
                    type: "select",
                    label: "Corner Radius",
                    options: [
                        { label: "None (Sharp)", value: "0px" },
                        { label: "Small (8px)", value: "8px" },
                        { label: "Medium (16px)", value: "16px" },
                        { label: "Large (32px)", value: "32px" },
                        { label: "Extra Large (48px)", value: "48px" },
                    ]
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
            columnsDesktop: 5,
            columnsTablet: 3,
            columnsMobile: 2,
            gap: 24,
            borderRadius: "16px",
        }
    },
    render: (props) => <GalleryRender {...props} />,
};
