"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import type { AnimationProps } from "./types";

const AnimationRender = dynamic<AnimationProps>(() =>
    import("./AnimationRender").then((m) => m.AnimationRender)
);

export type { AnimationProps };

export const Animation: ComponentConfig<AnimationProps> = {
    label: "Animasi Penunjuk",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                animationType: {
                    type: "select",
                    label: "Jenis Animasi",
                    options: [
                        { label: "Triple Chevrons Down (Gelombang)", value: "scroll-triple" },
                        { label: "Double Chevrons Down (Blink)", value: "scroll-chevrons" },
                        { label: "Single Chevron Down (Bouncing)", value: "scroll-chevron-single" },
                        { label: "Classic Arrow Down (Sliding)", value: "scroll-arrow" },
                        { label: "Ikon Kustom Dengan Animasi", value: "custom-icon" }
                    ]
                },
                customIconName: { type: "text", label: "Nama Ikon Lucide (Hanya jika memilih Ikon Kustom)" },
                customIconAnimation: {
                    type: "select",
                    label: "Gaya Animasi Ikon Kustom",
                    options: [
                        { label: "Melompat (Bounce)", value: "bounce" },
                        { label: "Berkedip (Pulse)", value: "pulse" },
                        { label: "Berputar (Spin)", value: "spin" },
                        { label: "Bergoyang (Shake)", value: "shake" },
                        { label: "Melayang (Float)", value: "float" },
                        { label: "Tidak Ada", value: "none" }
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
                    label: "Warna Elemen/Ikon",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                size: {
                    type: "custom",
                    label: "Ukuran (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={16} max={120} step={2} />
                },
                speed: {
                    type: "select",
                    label: "Kecepatan Gerakan",
                    options: [
                        { label: "Lambat", value: "slow" },
                        { label: "Normal", value: "normal" },
                        { label: "Cepat", value: "fast" }
                    ]
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
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={160} step={4} />
                },
                paddingBottom: {
                    type: "custom",
                    label: "Jarak Bawah (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={160} step={4} />
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
            animationType: "scroll-triple",
            customIconName: "ArrowDown",
            customIconAnimation: "bounce",
        },
        styling: {
            color: "#ef4444",
            size: { desktop: 32, tablet: 24, mobile: 24 },
            speed: "normal",
            alignment: "center",
            paddingTop: { desktop: 24, tablet: 16, mobile: 16 },
            paddingBottom: { desktop: 24, tablet: 16, mobile: 16 },
            backgroundColor: "transparent",
        }
    },
    render: (props) => <AnimationRender {...props} />,
};
