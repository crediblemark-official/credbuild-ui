"use client";

import dynamic from "next/dynamic";
import { ColorPickerField, ResponsiveSliderField, type ComponentConfig } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
const HeroPublisherRender = dynamic<HeroPublisherProps>(() => import("./PublisherRender").then(m => m.HeroPublisherRender));
import type { HeroPublisherProps } from "./types";

export type { HeroPublisherProps };

export const HeroPublisher: ComponentConfig<HeroPublisherProps> = {
    label: "Hero - Publisher One",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                description: { type: "textarea", label: "Description" },
                date: { type: "text", label: "Date" },
                author: { type: "text", label: "Author" },
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
                    type: "select", label: "Title Font",
                    options: [
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={6} step={0.1} defaultValue={3} />
                },
                titleWeight: {
                    type: "select", label: "Title Weight",
                    options: [{ label: "Bold", value: "700" }, { label: "ExtraBold", value: "800" }]
                },
                subtitleFont: {
                    type: "select", label: "Body Font",
                    options: [
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                subtitleSize: {
                    type: "custom", label: "Body Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={2} step={0.1} defaultValue={1} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                backgroundColor: {
                    type: "custom", label: "Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom", label: "Text",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={60} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={60} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Lorem Ipsum Dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "Oct 12, 2023",
            author: "John Doe",
        },
        media: {
            imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
        },
        typography: {
            titleFont: "Montserrat",
            titleSize: { desktop: 3 },
            titleWeight: "700",
            subtitleFont: "Montserrat",
            subtitleSize: { desktop: 1 },
        },
        styling: {
            backgroundColor: "#ffffff",
            textColor: "#1a202c",
            paddingTop: { desktop: 60 },
            paddingBottom: { desktop: 60 },
        }
    },
    render: (props) => <HeroPublisherRender {...props} />,
};
