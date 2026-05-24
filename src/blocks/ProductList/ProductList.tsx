"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
const ProductListRender = dynamic<ProductListProps>(() => import("./ProductListRender").then(m => m.ProductListRender));
import type { ProductListProps } from "./types";

export type { ProductListProps };

export const ProductList: ComponentConfig<ProductListProps> = {
    label: "Product List",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                description: { type: "textarea", label: "Description" },
                limit: { type: "number", label: "Limit" },
                categorySlug: { type: "text", label: "Filter Kategori (Slug)" },
                sortBy: {
                    type: "select",
                    label: "Urutkan Produk",
                    options: [
                        { label: "Terbaru", value: "newest" },
                        { label: "Harga: Terendah ke Tinggi", value: "price-asc" },
                        { label: "Harga: Tertinggi ke Rendah", value: "price-desc" },
                        { label: "Stok: Terbanyak ke Sedikit", value: "stock-desc" },
                    ]
                },
                showRating: {
                    type: "select",
                    label: "Tampilkan Bintang Ulasan",
                    options: [
                        { label: "Ya", value: true },
                        { label: "Tidak", value: false },
                    ]
                },
                showStock: {
                    type: "select",
                    label: "Tampilkan Status Stok",
                    options: [
                        { label: "Ya", value: true },
                        { label: "Tidak", value: false },
                    ]
                },
                showBadges: {
                    type: "select",
                    label: "Tampilkan Status Badge (Limited / Sold Out)",
                    options: [
                        { label: "Ya", value: true },
                        { label: "Tidak", value: false },
                    ]
                },
                showTitleAccent: {
                    type: "select",
                    label: "Tampilkan Garis Aksen Judul",
                    options: [
                        { label: "Ya", value: true },
                        { label: "Tidak", value: false },
                    ]
                },
                actionType: {
                    type: "select",
                    label: "Tipe Aksi Tombol Detail",
                    options: [
                        { label: "Lihat Detail", value: "details" },
                        { label: "Sembunyikan Tombol", value: "none" },
                    ]
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                descriptionColor: {
                    type: "custom",
                    label: "Description Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                titleFont: {
                    type: "select",
                    label: "Title Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
                bodyFont: {
                    type: "select",
                    label: "Body Font",
                    options: [
                        { label: "Inherit", value: "inherit" },
                        { label: "Inter", value: "Inter" },
                        { label: "Lato", value: "Lato" },
                        { label: "Montserrat", value: "Montserrat" },
                        { label: "Playfair Display", value: "Playfair Display" },
                        { label: "Roboto", value: "Roboto" },
                    ]
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                columns: { type: "number", label: "Columns", min: 1, max: 4 },
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderRadius: {
                    type: "select",
                    label: "Lengkungan Sudut Kartu (Radius)",
                    options: [
                        { label: "Kotak / Tajam", value: "none" },
                        { label: "Sedang (MD)", value: "md" },
                        { label: "Lebar (LG)", value: "lg" },
                        { label: "Sangat Lebar (XL)", value: "xl" },
                        { label: "Maksimal (2XL)", value: "2xl" },
                    ]
                },
                cardShadow: {
                    type: "select",
                    label: "Gaya Bayangan Kartu (Shadow)",
                    options: [
                        { label: "Tanpa Bayangan", value: "none" },
                        { label: "Tipis (Hanya Hover)", value: "sm" },
                        { label: "Sedang (Hanya Hover)", value: "md" },
                        { label: "Tebal (Hanya Hover)", value: "lg" },
                        { label: "Hanya Saat Hover (Default)", value: "hover-only" },
                        { label: "Tipis (Selalu)", value: "always-sm" },
                        { label: "Sedang (Selalu)", value: "always-md" },
                        { label: "Tebal (Selalu)", value: "always-lg" },
                    ]
                },
                accentColor: {
                    type: "custom",
                    label: "Warna Aksen & Tombol",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                priceColor: {
                    type: "custom",
                    label: "Warna Teks Harga",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBackgroundColor: {
                    type: "custom",
                    label: "Warna Latar Belakang Kartu",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardBorderColor: {
                    type: "custom",
                    label: "Warna Garis Tepi Kartu",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                cardTitleColor: {
                    type: "custom",
                    label: "Warna Judul Produk",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                showCardBorder: {
                    type: "radio",
                    label: "Tampilkan Garis Tepi Kartu (Border)",
                    options: [
                        { label: "Ya (Tampilkan)", value: true },
                        { label: "Tidak (Sembunyikan)", value: false }
                    ]
                },
                imageAspectRatio: {
                    type: "select",
                    label: "Aspek Rasio Gambar",
                    options: [
                        { label: "Standard (4:5)", value: "aspect-[4/5]" },
                        { label: "Portrait (2:3)", value: "aspect-[2/3]" },
                        { label: "Persegi (1:1)", value: "aspect-[1/1]" },
                        { label: "Landscape (16:9)", value: "aspect-[16/9]" }
                    ]
                },
                imageFit: {
                    type: "select",
                    label: "Keseragaman Gambar (Image Fit)",
                    options: [
                        { label: "Isi Penuh / Potong (Cover)", value: "cover" },
                        { label: "Tampak Utuh / No Crop (Contain)", value: "contain" }
                    ]
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Featured Products",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            limit: 4,
            categorySlug: "",
            sortBy: "newest",
            showRating: true,
            showStock: true,
            showBadges: true,
            showTitleAccent: true,
            actionType: "details",
        },
        typography: {
            titleColor: "#111827",
            descriptionColor: "#4b5563",
            titleFont: "inherit",
            bodyFont: "inherit",
        },
        styling: {
            columns: 4,
            backgroundColor: "#ffffff",
            cardBorderRadius: "lg",
            cardShadow: "hover-only",
            accentColor: "#10b981",
            priceColor: "#047857",
            cardBackgroundColor: "#ffffff",
            cardBorderColor: "#e4e4e7",
            cardTitleColor: "#1f2937",
            showCardBorder: true,
            imageAspectRatio: "aspect-[4/5]",
            imageFit: "cover",
        }
    },
    render: (props) => <ProductListRender {...props} />,
};
