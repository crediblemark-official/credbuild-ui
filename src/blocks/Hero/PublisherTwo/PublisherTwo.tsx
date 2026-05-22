"use client";

import dynamic from "next/dynamic";
import { SliderField, ResponsiveSliderField, ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroPublisherTwoRender = dynamic<HeroPublisherTwoProps>(() => import("./PublisherTwoRender").then(m => m.HeroPublisherTwoRender));
import type { HeroPublisherTwoProps } from "./types";

export type { HeroPublisherTwoProps };

export const HeroPublisherTwo: ComponentConfig<HeroPublisherTwoProps> = {
    label: "Hero - Publisher Two",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                description: { type: "textarea", label: "Description" },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                imageUrl: { 
                    type: "custom", 
                    label: "Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
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
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={6} step={0.1} defaultValue={3.5} />
                },
                titleWeight: {
                    type: "select", label: "Title Weight",
                    options: [
                        { label: "Normal", value: "400" },
                        { label: "Semibold", value: "600" },
                        { label: "Bold", value: "700" },
                        { label: "ExtraBold", value: "800" },
                    ]
                },
                descFont: {
                    type: "select",
                    label: "Desc Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                subtitleSize: {
                    type: "custom", label: "Subtitle Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={4} step={0.1} defaultValue={1.1} />
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
                textColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descriptionColor: {
                    type: "custom", label: "Description Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                waveColor: {
                    type: "custom", label: "Wave Divider Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                imageRadius: {
                    type: "custom", label: "Image Radius",
                    render: ({ value, onChange }) => <SliderField value={typeof value === 'number' ? value : parseFloat(value as string || "0")} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v || "0"))} unit="px" max={100} defaultValue={0} />
                },
                imageWidth: {
                    type: "text",
                    label: "Image Width"
                },
                imageAspectRatio: {
                    type: "select",
                    label: "Image Aspect Ratio",
                    options: [
                        { label: "1:1 Square", value: "1/1" },
                        { label: "4:3 Classic", value: "4/3" },
                        { label: "3:4 Portrait", value: "3/4" },
                        { label: "16:9 Widescreen", value: "16/9" },
                        { label: "Auto", value: "auto" },
                    ]
                },
                imageObjectFit: {
                    type: "select",
                    label: "Image Object Fit",
                    options: [
                        { label: "Cover (Fill area)", value: "cover" },
                        { label: "Contain (Show all)", value: "contain" },
                    ]
                },
                imageShadow: {
                    type: "select",
                    label: "Image Shadow",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                        { label: "Large", value: "lg" },
                        { label: "Extra Large", value: "xl" },
                    ]
                },
                imageAlign: {
                    type: "select",
                    label: "Image Alignment",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                    ]
                },
                gap: {
                    type: "custom", label: "Grid Gap",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={100} defaultValue={40} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={80} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={120} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Bukumu Segera Terbit!",
            description: "Penerbit KBM telah menerbitkan lebih dari 3000 judul buku. Yuk, tingkatkan personal brandingmu dan torehkan sejarah anda dengan buku, sebab buku adalah kartu terbaik anda.",
        },
        media: {
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        },
        typography: {
            titleSize: { desktop: 3.5 },
            subtitleSize: { desktop: 1.1 },
            titleWeight: "800",
            titleFont: "inherit",
            descFont: "inherit",
        },
        styling: {
            backgroundColor: "#dc2626",
            textColor: "#ffffff",
            descriptionColor: "#f3f4f6",
            waveColor: "#ffffff",
            imageRadius: 0,
            imageWidth: "100%",
            imageAspectRatio: "4/3",
            imageObjectFit: "cover",
            imageShadow: "none",
            imageAlign: "right",
            gap: { desktop: 60 },
            paddingTop: { desktop: 100 },
            paddingBottom: { desktop: 120 },
        }
    },
    render: (props) => <HeroPublisherTwoRender {...props} />,
};
