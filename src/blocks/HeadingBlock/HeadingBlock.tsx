"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField, SliderField } from "@crediblemark/build";
const HeadingBlockRender = dynamic<HeadingBlockProps>(() => import("./HeadingBlockRender").then(m => m.HeadingBlockRender));
import type { HeadingBlockProps } from "./types";

export type { HeadingBlockProps };

export const HeadingBlock: ComponentConfig<HeadingBlockProps> = {
    label: "Heading",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                level: {
                    type: "select",
                    label: "Heading Level",
                    options: [
                        { label: "H1", value: "h1" },
                        { label: "H2", value: "h2" },
                        { label: "H3", value: "h3" },
                        { label: "H4", value: "h4" },
                        { label: "H5", value: "h5" },
                        { label: "H6", value: "h6" },
                    ]
                }
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                font: {
                    type: "select",
                    label: "Font Family",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                fontWeight: {
                    type: "select",
                    label: "Font Weight",
                    options: [
                        { label: "100 - Thin", value: "100" },
                        { label: "200 - Extra Light", value: "200" },
                        { label: "300 - Light", value: "300" },
                        { label: "400 - Regular", value: "400" },
                        { label: "500 - Medium", value: "500" },
                        { label: "600 - Semi Bold", value: "600" },
                        { label: "700 - Bold", value: "700" },
                        { label: "800 - Extra Bold", value: "800" },
                        { label: "900 - Black", value: "900" },
                    ]
                },
                textAlign: {
                    type: "radio",
                    label: "Alignment",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                        { label: "Justify", value: "justify" },
                    ]
                },
                textColor: {
                    type: "custom",
                    label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                paddingTop: {
                    type: "custom",
                    label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingBottom: {
                    type: "custom",
                    label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingLeft: {
                    type: "custom",
                    label: "Padding Left",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingRight: {
                    type: "custom",
                    label: "Padding Right",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                marginTop: {
                    type: "custom",
                    label: "Margin Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={-100} max={200} step={4} />
                },
                marginBottom: {
                    type: "custom",
                    label: "Margin Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={-100} max={200} step={4} />
                },
                lineHeight: {
                    type: "custom",
                    label: "Line Height",
                    render: ({ value, onChange }) => <SliderField value={typeof value === 'number' ? value : parseFloat(value as string || "1.2")} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v || "1.2"))} min={0.8} max={2} step={0.1} defaultValue={1.2} />
                },
                letterSpacing: {
                    type: "custom",
                    label: "Letter Spacing (em)",
                    render: ({ value, onChange }) => <SliderField value={typeof value === 'number' ? value : parseFloat(value as string || "0")} onChange={(v) => onChange(typeof v === 'number' ? v : parseFloat(v || "0"))} min={-0.1} max={1} step={0.01} defaultValue={0} />
                },
                textTransform: {
                    type: "select",
                    label: "Text Transform",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Uppercase", value: "uppercase" },
                        { label: "Lowercase", value: "lowercase" },
                        { label: "Capitalize", value: "capitalize" },
                    ]
                },
                maxWidth: {
                    type: "number",
                    label: "Max Width (px)",
                },
                animation: {
                    type: "select",
                    label: "Entrance Animation",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Fade In", value: "fadeIn" },
                        { label: "Slide Up", value: "slideUp" },
                        { label: "Zoom In", value: "zoomIn" },
                        { label: "Slide Right", value: "slideRight" },
                    ]
                }
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                fontSize: {
                    type: "custom",
                    label: "Font Size",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={120} step={2} />
                }
            }
        }
    },
    defaultProps: {
        content: {
            title: "Heading",
            level: "h1",
        },
        styling: {
            font: "inherit",
            fontWeight: "800",
            textAlign: "left",
            textColor: "#000000",
            backgroundColor: "transparent",
            paddingTop: { desktop: 64, tablet: 48, mobile: 32 },
            paddingBottom: { desktop: 64, tablet: 48, mobile: 32 },
            paddingLeft: { desktop: 24, tablet: 20, mobile: 16 },
            paddingRight: { desktop: 24, tablet: 20, mobile: 16 },
            marginTop: { desktop: 0, tablet: 0, mobile: 0 },
            marginBottom: { desktop: 0, tablet: 0, mobile: 0 },

            lineHeight: 1.2,
            letterSpacing: 0,
            textTransform: "none",
            maxWidth: 1200,
            animation: "none",
        },
        typography: {
            fontSize: { desktop: 48, tablet: 40, mobile: 32 },
        }
    },
    render: (props) => <HeadingBlockRender {...props} />,
};
