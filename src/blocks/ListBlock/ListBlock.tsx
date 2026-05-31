"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import type { ListBlockProps } from "./types";

const ListBlockRender = dynamic<ListBlockProps>(() =>
    import("./ListBlockRender").then((m) => m.ListBlockRender)
);

export type { ListBlockProps };

export const ListBlock: ComponentConfig<ListBlockProps> = {
    label: "Daftar / List Item",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Judul Daftar" },
                iconName: { type: "text", label: "Nama Ikon Lucide (e.g. CheckCircle, Star, Heart)" },
                items: {
                    type: "array",
                    label: "Item Daftar",
                    arrayFields: {
                        text: { type: "text", label: "Teks Item" }
                    },
                    getItemSummary: (item) => item.text || "Item Baru"
                }
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                titleColor: {
                    type: "custom",
                    label: "Warna Judul",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom",
                    label: "Warna Teks Item",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                iconColor: {
                    type: "custom",
                    label: "Warna Ikon",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                iconSize: {
                    type: "custom",
                    label: "Ukuran Ikon (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={48} step={2} />
                },
                fontSize: {
                    type: "custom",
                    label: "Ukuran Teks (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={12} max={36} step={1} />
                },
                backgroundColor: {
                    type: "custom",
                    label: "Warna Latar Belakang",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                alignment: {
                    type: "select",
                    label: "Perataan Blok",
                    options: [
                        { label: "Kiri", value: "left" },
                        { label: "Tengah", value: "center" }
                    ]
                },
                padding: {
                    type: "custom",
                    label: "Padding Blok (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={160} step={4} />
                },
                borderRadius: {
                    type: "custom",
                    label: "Border Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={2} />
                },
                maxWidth: {
                    type: "custom",
                    label: "Lebar Maksimal Blok (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={200} max={1400} step={50} />
                }
            }
        }
    },
    defaultProps: {
        content: {
            title: "Yang akan Kamu Dapatkan:",
            iconName: "CheckCircle",
            items: [
                { text: "Akses selamanya ke semua modul pembelajaran" },
                { text: "Bimbingan eksklusif dari praktisi ahli" },
                { text: "Sertifikat kelulusan resmi kompetensi" }
            ]
        },
        styling: {
            titleColor: "#111827",
            textColor: "#374151",
            iconColor: "#22c55e",
            iconSize: { desktop: 22, tablet: 22, mobile: 18 },
            fontSize: { desktop: 16, tablet: 16, mobile: 14 },
            backgroundColor: "#ffffff",
            alignment: "left",
            padding: { desktop: 32, tablet: 24, mobile: 16 },
            borderRadius: { desktop: 12, tablet: 12, mobile: 8 },
            maxWidth: { desktop: 800, tablet: 600, mobile: 400 }
        }
    },
    render: (props) => <ListBlockRender {...props} />,
};
