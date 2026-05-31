"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
import React from "react";
import type { SingleImageProps } from "./types";

const SingleImageRender = dynamic<SingleImageProps>(() =>
    import("./SingleImageRender").then((m) => m.SingleImageRender)
);

export type { SingleImageProps };

export const SingleImage: ComponentConfig<SingleImageProps> = {
    label: "Gambar Single",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                imageUrl: {
                    type: "custom",
                    label: "Upload Gambar *",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                altText: { type: "text", label: "Alt Text" },
                linkUrl: { type: "text", label: "Link URL (Optional)" },
                openInNewTab: {
                    type: "radio",
                    label: "Open in New Tab",
                    options: [
                        { label: "Yes", value: true },
                        { label: "No", value: false },
                    ]
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                align: {
                    type: "select",
                    label: "Perataan Gambar",
                    options: [
                        { label: "Kiri", value: "left" },
                        { label: "Tengah", value: "center" },
                        { label: "Kanan", value: "right" },
                    ]
                },
                imageWidth: {
                    type: "custom",
                    label: "Lebar Gambar (%)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={5} max={100} step={1} unit="%" />
                },
                imageFit: {
                    type: "select",
                    label: "Penyesuaian Gambar",
                    options: [
                        { label: "Fill", value: "cover" },
                        { label: "Fit", value: "contain" },
                    ]
                },
                aspectRatio: {
                    type: "select",
                    label: "Aspect Ratio",
                    options: [
                        { label: "OFF", value: "off" },
                        { label: "1:1", value: "1/1" },
                        { label: "3:2", value: "3/2" },
                        { label: "4:3", value: "4/3" },
                        { label: "5:4", value: "5/4" },
                        { label: "16:10", value: "16/10" },
                        { label: "16:9", value: "16/9" },
                        { label: "9:16", value: "9/16" },
                    ]
                },
                backgroundType: {
                    type: "select",
                    label: "Latar (Background)",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Warna", value: "color" },
                        { label: "Gambar", value: "image" },
                    ]
                },
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                backgroundImage: {
                    type: "custom",
                    label: "Background Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                paddingTop: {
                    type: "custom",
                    label: "Padding Atas (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingBottom: {
                    type: "custom",
                    label: "Padding Bawah (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingLeft: {
                    type: "custom",
                    label: "Padding Kiri (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingRight: {
                    type: "custom",
                    label: "Padding Kanan (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                borderRadius: {
                    type: "custom",
                    label: "Border Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={1} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
            altText: "Single Image",
            openInNewTab: false,
        },
        styling: {
            align: "center",
            imageWidth: { desktop: 100, tablet: 100, mobile: 100 },
            imageFit: "cover",
            aspectRatio: "off",
            backgroundType: "none",
            backgroundColor: "#ffffff",
            backgroundImage: "",
            paddingTop: { desktop: 0, tablet: 0, mobile: 0 },
            paddingBottom: { desktop: 0, tablet: 0, mobile: 0 },
            paddingLeft: { desktop: 0, tablet: 0, mobile: 0 },
            paddingRight: { desktop: 0, tablet: 0, mobile: 0 },
            borderRadius: { desktop: 0, tablet: 0, mobile: 0 },
        }
    },
    render: (props) => <SingleImageRender {...props} />,
};
