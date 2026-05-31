"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import type { SocialFeedProps } from "./types";

const SocialFeedRender = dynamic<SocialFeedProps>(() => import("./SocialFeedRender").then(m => m.SocialFeedRender));

export const SocialFeed: ComponentConfig<SocialFeedProps> = {
    label: "Social Media Feed",
    fields: {
        content: {
            type: "object",
            label: "Konten",
            objectFields: {
                title: { type: "text", label: "Judul Blok" },
                description: { type: "text", label: "Deskripsi" },
                items: {
                    type: "array",
                    label: "Item",
                    arrayFields: {
                        platform: {
                            type: "select",
                            label: "Platform",
                            options: [
                                { label: "YouTube", value: "youtube" },
                                { label: "TikTok", value: "tiktok" },
                                { label: "Instagram", value: "instagram" },
                            ],
                        },
                        mode: {
                            type: "select",
                            label: "Mode",
                            options: [
                                { label: "📹 Embed Post / Video", value: "post" },
                                { label: "👤 Profile Card / Channel Feed", value: "profile" },
                            ],
                        },
                        url: { type: "text", label: "URL (Post, Video, atau Profil)" },
                        caption: { type: "textarea", label: "Keterangan (mode post)" },
                        profileName: { type: "text", label: "Nama Akun (mode profil)" },
                        profileBio: { type: "textarea", label: "Bio Singkat (mode profil)" },
                        customColor: { 
                            type: "custom", 
                            label: "Warna Kustom",
                            render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                        },
                        customGradient: { 
                            type: "text", 
                            label: "Gradasi Kustom (CSS background)",
                            placeholder: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        },
                    },
                    getItemSummary: (item: any) => `${item.platform || "?"} [${item.mode || "post"}] ${item.url ? item.url.slice(0, 35) + "..." : "(kosong)"}`,
                },
            },
        },
        styling: {
            type: "object",
            label: "Tampilan",
            objectFields: {
                backgroundColor: {
                    type: "custom",
                    label: "Background Blok",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                padding: {
                    type: "custom",
                    label: "Padding Section (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                titleColor: {
                    type: "custom",
                    label: "Warna Judul",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                cardBackground: {
                    type: "custom",
                    label: "Background Kartu (mode post)",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />,
                },
                cardBorderRadius: {
                    type: "custom",
                    label: "Lengkungan Kartu (Radius px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={48} step={2} />
                },
                columns: {
                    type: "custom",
                    label: "Jumlah Kolom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={1} max={3} step={1} />
                },
                showCaptions: {
                    type: "select",
                    label: "Tampilkan Keterangan",
                    options: [
                        { label: "Ya", value: "true" },
                        { label: "Tidak", value: "false" },
                    ],
                },
            },
        },
    },
    defaultProps: {
        content: {
            title: "Lorem Ipsum Dolor Sit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            items: [
                {
                    platform: "youtube",
                    mode: "profile",
                    url: "https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxxxxxxxx",
                    caption: "",
                    profileName: "Lorem Ipsum YouTube",
                    profileBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    platform: "tiktok",
                    mode: "profile",
                    url: "https://www.tiktok.com/@akun_anda",
                    caption: "",
                    profileName: "Lorem Ipsum TikTok",
                    profileBio: "Lorem ipsum dolor sit amet, consectetur.",
                },
                {
                    platform: "instagram",
                    mode: "profile",
                    url: "https://www.instagram.com/akun_anda/",
                    caption: "",
                    profileName: "Lorem Ipsum Instagram",
                    profileBio: "Lorem ipsum dolor sit amet, consectetur.",
                },
            ],
        },
        styling: {
            backgroundColor: "#f8fafc",
            padding: { desktop: 80, tablet: 60, mobile: 40 },
            titleColor: "#0f172a",
            cardBackground: "#ffffff",
            cardBorderRadius: { desktop: 20, tablet: 20, mobile: 16 },
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            showCaptions: "true",
        },
    },
    render: (props) => <SocialFeedRender {...props} />,
};
