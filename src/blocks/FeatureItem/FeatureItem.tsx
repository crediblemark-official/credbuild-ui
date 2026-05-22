"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
const FeatureItemRender = dynamic<FeatureItemProps>(() => import("./FeatureItemRender").then(m => m.FeatureItemRender));
import type { FeatureItemProps } from "./types";

export type { FeatureItemProps };

export const FeatureItem: ComponentConfig<FeatureItemProps> = {
    label: "Feature / Info Box List",
    fields: {
        content: {
            type: "object",
            label: "Konten Utama",
            objectFields: {
                items: {
                    type: "array",
                    label: "Daftar Kartu",
                    arrayFields: {
                        icon: { type: "text", label: "Ikon (Lucide)" },
                        badge: { type: "text", label: "Label Badge" },
                        title: { type: "text", label: "Judul" },
                        description: { type: "textarea", label: "Deskripsi" },
                        buttonText: { type: "text", label: "Teks Tombol" },
                        buttonLink: { type: "text", label: "Link Tombol" },
                    },
                    getItemSummary: (item) => item.title || "Item Fitur",
                }
            }
        },
        styling: {
            type: "object",
            label: "Pengaturan Tampilan",
            objectFields: {
                // --- LAYOUT ---
                layout: {
                    type: "select",
                    label: "LAYOUT: Posisi Ikon",
                    options: [
                        { label: "Atas", value: "top" },
                        { label: "Kiri", value: "left" },
                        { label: "Kanan", value: "right" },
                    ]
                },
                columns: {
                    type: "custom", label: "Jumlah Kolom",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Jumlah Kolom" value={value} onChange={onChange} min={1} max={6} step={1} />,
                },
                gap: {
                    type: "custom", label: "Jarak Antar Kartu",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Jarak Antar Kartu" value={value} onChange={onChange} min={0} max={100} step={4} />,
                },
                scrollBehavior: {
                    type: "radio", label: "Mode Mobile",
                    options: [
                        { label: "Stack", value: "none" },
                        { label: "Scroll", value: "horizontal" },
                    ]
                },
                itemWidth: {
                    type: "custom", label: "Lebar Item (Scroll)",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Lebar Item (Scroll)" value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={100} step={1} />,
                },
                containerMaxWidth: {
                    type: "select",
                    label: "Lebar Kontainer",
                    options: [
                        { label: "Small", value: "max-w-screen-sm" },
                        { label: "Medium", value: "max-w-screen-md" },
                        { label: "Large", value: "max-w-screen-lg" },
                        { label: "Extra Large", value: "max-w-screen-xl" },
                        { label: "Full", value: "max-w-full" },
                    ]
                },
                sectionPadding: {
                    type: "custom", label: "Padding Seksi",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Padding Seksi" value={value} onChange={onChange} min={0} max={100} step={4} />,
                },
                sectionBg: {
                    type: "custom", label: "Warna Seksi",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },

                // --- CARD ---
                bgColor: {
                    type: "custom", label: "KARTU: Warna Latar",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                borderColor: {
                    type: "custom", label: "Warna Border",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                borderWidth: {
                    type: "custom", label: "Tebal Border",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Tebal Border" value={value} onChange={onChange} min={0} max={20} step={1} />,
                },
                borderRadius: {
                    type: "custom", label: "Radius",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Radius" value={value} onChange={onChange} min={0} max={100} step={1} />,
                },
                shadow: {
                    type: "select",
                    label: "Shadow",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Sm", value: "sm" },
                        { label: "Md", value: "md" },
                        { label: "Lg", value: "lg" },
                    ]
                },
                padding: {
                    type: "custom", label: "Padding Dalam",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="Padding Dalam" value={value} onChange={onChange} min={0} max={100} step={4} />,
                },
                hoverEffect: {
                    type: "select",
                    label: "Efek Hover",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Lift", value: "lift" },
                        { label: "Glow", value: "glow" },
                        { label: "Scale", value: "scale" },
                    ]
                },
                maxWidth: {
                    type: "select",
                    label: "Lebar Maksimal",
                    options: [
                        { label: "Small", value: "max-w-sm" },
                        { label: "Medium", value: "max-w-md" },
                        { label: "Large", value: "max-w-lg" },
                        { label: "Full", value: "max-w-full" },
                    ]
                },

                // --- ICON ---
                iconSize: {
                    type: "custom", label: "IKON: Ukuran",
                    render: ({ value, onChange }) => <ResponsiveSliderField label="IKON: Ukuran" value={value} onChange={onChange} min={10} max={120} step={2} />,
                },
                iconColor: {
                    type: "custom", label: "Warna Ikon",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                iconBg: {
                    type: "custom", label: "Latar Ikon",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                iconShape: {
                    type: "select",
                    label: "Bentuk",
                    options: [
                        { label: "Circle", value: "circle" },
                        { label: "Square", value: "square" },
                        { label: "None", value: "none" },
                    ]
                },

                // --- TYPOGRAPHY ---
                alignment: {
                    type: "select",
                    label: "TEKS: Perataan",
                    options: [
                        { label: "Kiri", value: "left" },
                        { label: "Tengah", value: "center" },
                        { label: "Kanan", value: "right" },
                    ]
                },
                titleColor: {
                    type: "custom", label: "Warna Judul",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                descColor: {
                    type: "custom", label: "Warna Deskripsi",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                badgeColor: {
                    type: "custom", label: "Warna Badge",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                badgeBg: {
                    type: "custom", label: "Latar Badge",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                animation: {
                    type: "select",
                    label: "Animasi",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Fade", value: "fadeIn" },
                        { label: "Slide", value: "slideUp" },
                        { label: "Zoom", value: "zoomIn" },
                    ]
                },
            }
        }
    },
    defaultProps: {
        content: {
            items: [
                {
                    icon: "Shield",
                    title: "Kualitas Premium",
                    description: "Fitur berkualitas tinggi untuk kebutuhan profesional Anda.",
                    badge: "Terbaik",
                    buttonText: "Pelajari Lebih Lanjut",
                    buttonLink: "#",
                },
                {
                    icon: "Zap",
                    title: "Performa Cepat",
                    description: "Dioptimalkan untuk kecepatan dan efisiensi di setiap level.",
                    badge: "",
                    buttonText: "Pelajari Lebih Lanjut",
                    buttonLink: "#",
                },
                {
                    icon: "Clock",
                    title: "Dukungan 24/7",
                    description: "Tim dukungan berdedikasi tersedia sepanjang waktu.",
                    badge: "",
                    buttonText: "Pelajari Lebih Lanjut",
                    buttonLink: "#",
                }
            ]
        },
        styling: {
            layout: "top",
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            gap: { desktop: 24, tablet: 20, mobile: 16 },
            scrollBehavior: "none",
            itemWidth: { desktop: 100, tablet: 85, mobile: 85 },
            containerMaxWidth: "max-w-screen-xl",
            sectionPadding: { desktop: 40, tablet: 24, mobile: 20 },
            sectionBg: "transparent",
            bgColor: "rgba(255, 255, 255, 0.03)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: { desktop: 1, tablet: 1, mobile: 1 },
            borderRadius: { desktop: 12, tablet: 12, mobile: 10 },
            shadow: "none",
            padding: { desktop: 24, tablet: 24, mobile: 20 },
            maxWidth: "max-w-full",
            hoverEffect: "lift",
            iconSize: { desktop: 24, tablet: 24, mobile: 20 },
            iconColor: "#3b82f6",
            iconBg: "rgba(59, 130, 246, 0.1)",
            iconShape: "circle",
            alignment: "left",
            titleColor: "inherit",
            descColor: "rgba(255, 255, 255, 0.7)",
            badgeColor: "#ffffff",
            badgeBg: "#3b82f6",
            animation: "none",
        }
    },
    render: (props) => <FeatureItemRender {...props} />,
};
