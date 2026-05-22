"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";

import { VideoEmbedProps } from "./types";

const VideoEmbedRender = dynamic<VideoEmbedProps>(() => import("./VideoEmbedRender").then(m => m.VideoEmbedRender));
export const VideoEmbed: ComponentConfig<VideoEmbedProps> = {
    label: "Video Player",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                url: { type: "text", label: "Video URL (YouTube, Vimeo, or MP4)" },
                title: { type: "text", label: "Accessibility Title" },
                aspectRatio: {
                    type: "select",
                    label: "Aspect Ratio",
                    options: [
                        { label: "16:9 (Standard)", value: "16:9" },
                        { label: "4:3 (Classic)", value: "4:3" },
                        { label: "1:1 (Square)", value: "1:1" },
                    ],
                },
            },
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                maxWidth: {
                    type: "custom",
                    label: "Max Width (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={200} max={1400} step={20} />,
                },
                padding: {
                    type: "custom",
                    label: "Padding",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />,
                },
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                borderRadius: { type: "number", label: "Corner Radius" },
                boxShadow: { 
                    type: "select", 
                    label: "Show Shadow",
                    options: [
                        { label: "Yes", value: "true" },
                        { label: "No", value: "false" },
                    ]
                },
            },
        },
    },
    defaultProps: {
        content: {
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            title: "Demo Video",
            aspectRatio: "16:9",
        },
        styling: {
            maxWidth: { desktop: 1000, tablet: 800, mobile: 400 },
            padding: { desktop: 64, tablet: 48, mobile: 32 },
            backgroundColor: "transparent",
            borderRadius: 16,
            boxShadow: "true",
        },
    },
    render: (props) => <VideoEmbedRender {...props} />,
};
