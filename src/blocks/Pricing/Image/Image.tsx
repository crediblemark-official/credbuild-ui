"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const ImagePricingRender = dynamic<PricingImageProps>(() => import("./ImageRender").then(m => m.ImagePricingRender));
import type { PricingImageProps } from "./types";

export type { PricingImageProps };

export const PricingImage: ComponentConfig<PricingImageProps> = {
    label: "Pricing Image",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                items: {
                    type: "array",
                    label: "Images",
                    arrayFields: {
                        imageUrl: { 
                            type: "custom", 
                            label: "Image",
                            render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                        },
                        altText: { type: "text", label: "Alt Text" },
                        link: { type: "text", label: "Link URL (Optional)" },
                    },
                    getItemSummary: (item) => item.altText || "Image Package",
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
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
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                sectionBg: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                scrollMode: {
                    type: "select",
                    label: "Layout Mode",
                    options: [
                        { label: "Responsive Grid", value: "grid" },
                        { label: "Horizontal Scroll", value: "horizontal" },
                    ],
                },
                columnsDesktop: { type: "number", label: "Desktop Columns", placeholder: "3" },
                columnsTablet: { type: "number", label: "Tablet Columns", placeholder: "2" },
                columnsMobile: { type: "number", label: "Mobile Columns", placeholder: "1" },
                gap: {
                    type: "custom",
                    label: "Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} min={0} step={4} />
                },
                cardRadius: { type: "number", label: "Card Radius" },
                cardAspectRatio: {
                    type: "select",
                    label: "Card Aspect Ratio",
                    options: [
                        { label: "1:1 Square", value: "1/1" },
                        { label: "4:3 Classic", value: "4/3" },
                        { label: "2:3 Portrait", value: "2/3" },
                        { label: "16:9 Landscape", value: "16/9" },
                        { label: "Auto", value: "auto" },
                    ]
                },
                cardObjectFit: {
                    type: "select",
                    label: "Image Object Fit",
                    options: [
                        { label: "Cover (Fill)", value: "cover" },
                        { label: "Contain (Show all)", value: "contain" },
                    ]
                },
                cardShadow: {
                    type: "select",
                    label: "Card Shadow",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                        { label: "Large", value: "lg" },
                    ]
                },
                hoverLift: { type: "number", label: "Hover Lift Distance" },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Paket Spesial",
        },
        media: {
            items: [
                {
                    imageUrl: "https://via.placeholder.com/400x600?text=Package+1",
                    altText: "Package 1",
                    link: "#"
                },
                {
                    imageUrl: "https://via.placeholder.com/400x600?text=Package+2",
                    altText: "Package 2",
                    link: "#"
                },
                {
                    imageUrl: "https://via.placeholder.com/400x600?text=Package+3",
                    altText: "Package 3",
                    link: "#"
                },
            ],
        },
        typography: {
            titleColor: "#1e293b",
            titleFont: "inherit",
        },
        styling: {
            sectionBg: "#f8fafc",
            scrollMode: "grid",
            columnsDesktop: 3,
            columnsTablet: 2,
            columnsMobile: 1,
            gap: { desktop: 28, tablet: 24, mobile: 16 },
            cardRadius: 16,
            cardAspectRatio: "2/3",
            cardObjectFit: "cover",
            cardShadow: "none",
            hoverLift: 6,
        }
    },
    render: (props) => <ImagePricingRender {...props} />,
};
