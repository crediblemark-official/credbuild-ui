"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
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
                columns: {
                    type: "select",
                    label: "Jumlah Kolom (Desktop)",
                    options: [
                        { label: "1 Kolom", value: "1" },
                        { label: "2 Kolom", value: "2" },
                        { label: "3 Kolom", value: "3" },
                    ],
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
            title: "Temukan Kami di Sosial Media",
            description: "Ikuti kami untuk konten terbaru seputar layanan kami.",
            items: [
                {
                    platform: "youtube",
                    mode: "profile",
                    url: "https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxxxxxxxx",
                    caption: "",
                    profileName: "Channel YouTube Kami",
                    profileBio: "Konten edukatif dan inspiratif setiap minggu.",
                },
                {
                    platform: "tiktok",
                    mode: "profile",
                    url: "https://www.tiktok.com/@akun_anda",
                    caption: "",
                    profileName: "TikTok Kami",
                    profileBio: "Konten viral dan tips harian di TikTok.",
                },
                {
                    platform: "instagram",
                    mode: "profile",
                    url: "https://www.instagram.com/akun_anda/",
                    caption: "",
                    profileName: "Instagram Kami",
                    profileBio: "Behind the scenes dan portofolio terbaru.",
                },
            ],
        },
        styling: {
            backgroundColor: "#f8fafc",
            titleColor: "#0f172a",
            cardBackground: "#ffffff",
            columns: "3",
            showCaptions: "true",
        },
    },
    render: (props) => <SocialFeedRender {...props} />,
};
