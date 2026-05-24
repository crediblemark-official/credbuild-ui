"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
const InfoGridRender = dynamic<InfoGridProps>(() => import("./InfoGridRender").then(m => m.InfoGridRender));
import type { InfoGridProps } from "./types";

export type { InfoGridProps };

export const InfoGrid: ComponentConfig<InfoGridProps> = {
    label: "Info Grid (Data Perusahaan)",
    fields: {
        content: {
            type: "object",
            label: "Konten",
            objectFields: {
                title: { type: "text", label: "Judul Seksi" },
                items: {
                    type: "array",
                    label: "Daftar Informasi",
                    arrayFields: {
                        icon: { type: "text", label: "Ikon (Copy dari lucide.dev/icons)" },
                        label: { type: "text", label: "Label (Nama Data)" },
                        value: { type: "textarea", label: "Value (Isi Data)" },
                    },
                    getItemSummary: (item) => item.label || "Data Item",
                }
            }
        },
        styling: {
            type: "object",
            label: "Pengaturan Tampilan",
            objectFields: {
                // --- LAYOUT ---
                sectionBg: {
                    type: "custom", label: "LAYOUT: Latar Seksi",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                sectionPadding: {
                    type: "custom", label: "Padding Seksi",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Padding Seksi" value={value} onChange={onChange} min={0} max={200} step={4} />,
                },
                containerMaxWidth: {
                    type: "select",
                    label: "Lebar Maksimal",
                    options: [
                        { label: "Medium (768px)", value: "max-w-screen-md" },
                        { label: "Large (1024px)", value: "max-w-screen-lg" },
                        { label: "Extra Large (1280px)", value: "max-w-screen-xl" },
                        { label: "Full Width", value: "max-w-full" },
                    ]
                },
                alignment: {
                    type: "select",
                    label: "Perataan Judul",
                    options: [
                        { label: "Kiri", value: "left" },
                        { label: "Tengah", value: "center" },
                    ]
                },

                // --- CONTAINER ---
                containerBg: {
                    type: "custom", label: "WADAH: Latar Wadah",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                containerBorderColor: {
                    type: "custom", label: "Warna Border Wadah",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                containerBorderWidth: {
                    type: "custom", label: "Tebal Border Wadah",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Tebal Border Wadah" value={value} onChange={onChange} min={0} max={10} step={1} />,
                },
                containerRadius: {
                    type: "custom", label: "Radius Wadah",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Radius Wadah" value={value} onChange={onChange} min={0} max={60} step={1} />,
                },
                containerPadding: {
                    type: "custom", label: "Padding Wadah",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Padding Wadah" value={value} onChange={onChange} min={0} max={100} step={4} />,
                },

                // --- GRID & CARD ---
                columns: {
                    type: "custom", label: "GRID: Jumlah Kolom",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Jumlah Kolom" value={value} onChange={onChange} min={1} max={4} step={1} />,
                },
                gap: {
                    type: "custom", label: "Jarak Antar Kartu",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Jarak Antar Kartu" value={value} onChange={onChange} min={0} max={100} step={4} />,
                },
                cardBg: {
                    type: "custom", label: "KARTU: Latar Kartu",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                cardBorderColor: {
                    type: "custom", label: "Warna Border Kartu",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                cardBorderWidth: {
                    type: "custom", label: "Tebal Border Kartu",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Tebal Border Kartu" value={value} onChange={onChange} min={0} max={10} step={1} />,
                },
                cardRadius: {
                    type: "custom", label: "Radius Kartu",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Radius Kartu" value={value} onChange={onChange} min={0} max={40} step={1} />,
                },
                cardPadding: {
                    type: "custom", label: "Padding Kartu",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Padding Kartu" value={value} onChange={onChange} min={0} max={100} step={4} />,
                },

                // --- ICON ---
                iconColor: {
                    type: "custom", label: "IKON: Warna Ikon",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                iconBg: {
                    type: "custom", label: "Latar Ikon",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                iconSize: {
                    type: "custom", label: "Ukuran Kotak Ikon",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Ukuran Kotak Ikon" value={value} onChange={onChange} min={20} max={100} step={2} />,
                },
                iconRadius: {
                    type: "custom", label: "Radius Kotak Ikon",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Radius Kotak Ikon" value={value} onChange={onChange} min={0} max={30} step={1} />,
                },

                // --- TYPOGRAPHY ---
                titleColor: {
                    type: "custom", label: "TEKS: Warna Judul",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                labelColor: {
                    type: "custom", label: "Warna Label",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                valueColor: {
                    type: "custom", label: "Warna Isi",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Company Information",
            items: [
                {
                    icon: "Calendar",
                    label: "Founded",
                    value: "2017 | Expanding since 2023",
                },
                {
                    icon: "MapPin",
                    label: "Location",
                    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    icon: "User",
                    label: "Founder & CEO",
                    value: "John Doe\nLorem ipsum dolor sit amet",
                },
                {
                    icon: "Users",
                    label: "Membership",
                    value: "Lorem Ipsum Dolor Sit Amet",
                }
            ]
        },
        styling: {
            sectionBg: "transparent",
            sectionPadding: { desktop: 60, tablet: 40, mobile: 32 },
            containerMaxWidth: "max-w-screen-xl",
            containerBg: "rgba(255, 255, 255, 0.02)",
            containerBorderColor: "rgba(255, 255, 255, 0.1)",
            containerBorderWidth: { desktop: 1, tablet: 1, mobile: 1 },
            containerRadius: { desktop: 32, tablet: 24, mobile: 20 },
            containerPadding: { desktop: 48, tablet: 32, mobile: 24 },
            columns: { desktop: 2, tablet: 2, mobile: 1 },
            gap: { desktop: 24, tablet: 20, mobile: 16 },
            cardBg: "rgba(255, 255, 255, 0.03)",
            cardBorderColor: "rgba(255, 255, 255, 0.08)",
            cardBorderWidth: { desktop: 1, tablet: 1, mobile: 1 },
            cardRadius: { desktop: 20, tablet: 16, mobile: 12 },
            cardPadding: { desktop: 24, tablet: 24, mobile: 16 },
            iconColor: "#3b82f6",
            iconBg: "rgba(59, 130, 246, 0.1)",
            iconSize: { desktop: 48, tablet: 44, mobile: 40 },
            iconRadius: { desktop: 12, tablet: 10, mobile: 8 },
            titleColor: "#ffffff",
            labelColor: "rgba(255, 255, 255, 0.6)",
            valueColor: "#ffffff",
            alignment: "center",
        }
    },
    render: (props) => <InfoGridRender {...props} />,
};
