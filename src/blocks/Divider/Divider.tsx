"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import type { DividerProps } from "./types";

const DividerRender = dynamic<DividerProps>(() =>
    import("./DividerRender").then((m) => m.DividerRender)
);

export type { DividerProps };

export const Divider: ComponentConfig<DividerProps> = {
    label: "Divider / Pembatas",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                lineStyle: {
                    type: "select",
                    label: "Gaya Garis",
                    options: [
                        { label: "Solid (Garis Lurus)", value: "solid" },
                        { label: "Dashed (Garis Putus-putus)", value: "dashed" },
                        { label: "Dotted (Titik-titik)", value: "dotted" },
                        { label: "Double (Garis Ganda)", value: "double" },
                    ]
                }
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                color: {
                    type: "custom",
                    label: "Warna Garis",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                height: {
                    type: "custom",
                    label: "Ketebalan Garis (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={1} max={20} step={1} />
                },
                maxWidth: {
                    type: "custom",
                    label: "Lebar Garis (%)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={5} max={100} step={5} />
                },
                alignment: {
                    type: "select",
                    label: "Perataan",
                    options: [
                        { label: "Kiri", value: "left" },
                        { label: "Tengah", value: "center" },
                        { label: "Kanan", value: "right" },
                    ]
                },
                paddingTop: {
                    type: "custom",
                    label: "Jarak Atas (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingBottom: {
                    type: "custom",
                    label: "Jarak Bawah (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                backgroundColor: {
                    type: "custom",
                    label: "Warna Latar Belakang",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            lineStyle: "solid",
        },
        styling: {
            color: "#e2e8f0",
            height: { desktop: 2, tablet: 2, mobile: 2 },
            maxWidth: { desktop: 100, tablet: 100, mobile: 100 },
            alignment: "center",
            paddingTop: { desktop: 32, tablet: 24, mobile: 16 },
            paddingBottom: { desktop: 32, tablet: 24, mobile: 16 },
            backgroundColor: "transparent",
        }
    },
    render: (props) => <DividerRender {...props} />,
};
