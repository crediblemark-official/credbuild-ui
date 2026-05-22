"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { SliderField, ResponsiveSliderField, ColorPickerField } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
const FlexBlockRender = dynamic<FlexBlockProps>(() => import("./FlexBlockRender").then(m => m.FlexBlockRender));
import type { FlexBlockProps } from "./types";

export type { FlexBlockProps };

export const FlexBlock: ComponentConfig<FlexBlockProps> = {
    label: "Flex Block (Pro)",
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
                image: { 
                    type: "custom", 
                    label: "Main Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                backgroundImage: { 
                    type: "custom", 
                    label: "Background Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleFontFamily: {
                    type: "select",
                    label: "Title Font",
                    options: [
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" }
                    ]
                },
                titleSize: {
                    type: "custom", label: "Title Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={10} step={0.1} defaultValue={2.5} />
                },
                titleWeight: {
                    type: "select",
                    label: "Title Weight",
                    options: [
                        { label: "Normal (400)", value: "400" },
                        { label: "Medium (500)", value: "500" },
                        { label: "SemiBold (600)", value: "600" },
                        { label: "Bold (700)", value: "700" },
                        { label: "ExtraBold (800)", value: "800" }
                    ]
                },
                titleColor: {
                    type: "custom", label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descFontFamily: {
                    type: "select",
                    label: "Desc Font",
                    options: [
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" }
                    ]
                },
                descSize: {
                    type: "custom", label: "Desc Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="rem" max={5} step={0.1} defaultValue={1.1} />
                },
                descColor: {
                    type: "custom", label: "Desc Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                alignContent: {
                    type: "radio",
                    label: "Alignment",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" }
                    ]
                },
                width: {
                    type: "custom", label: "Width (%)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="%" max={100} defaultValue={100} />
                },
                minHeight: {
                    type: "custom", label: "Min Height",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={800} defaultValue={0} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={40} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={40} />
                },
                paddingLeft: {
                    type: "custom", label: "Padding Left",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={20} />
                },
                paddingRight: {
                    type: "custom", label: "Padding Right",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={20} />
                },
                marginTop: {
                    type: "custom", label: "Margin Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={0} />
                },
                marginBottom: {
                    type: "custom", label: "Margin Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} unit="px" max={200} defaultValue={0} />
                },
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                borderRadius: {
                    type: "custom", label: "Border Radius",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={100} defaultValue="0px" />
                },
                borderWidth: {
                    type: "custom", label: "Border Width",
                    render: ({ value, onChange }) => <SliderField value={value} onChange={(v) => onChange(String(v))} unit="px" max={20} defaultValue="0px" />
                },

                borderColor: {
                    type: "custom", label: "Border Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Fully Customizable Block",
            description: "This block behaves like an Elementor section. You can tweak almost everything.",
        },
        media: {
            image: "",
            backgroundImage: "",
        },
        typography: {
            titleFontFamily: "Inter",
            titleSize: { desktop: 2.5 },
            titleWeight: "700",
            titleColor: "#1e293b",
            descFontFamily: "Inter",
            descSize: { desktop: 1.1 },
            descColor: "#475569",
        },
        styling: {
            alignContent: "left",
            width: { desktop: 100 },
            minHeight: { desktop: 0 },
            paddingTop: { desktop: 40 },
            paddingBottom: { desktop: 40 },
            paddingLeft: { desktop: 20 },
            paddingRight: { desktop: 20 },
            marginTop: { desktop: 0 },
            marginBottom: { desktop: 0 },
            backgroundColor: "#ffffff",
            borderRadius: "0px",
            borderWidth: "0px",
            borderColor: "transparent",
        }
    },
    render: (props) => <FlexBlockRender {...props} />,
};
