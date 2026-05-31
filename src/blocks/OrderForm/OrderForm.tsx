"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { ProductSelectField } from "./ProductSelectField";
import React from "react";
import type { OrderFormProps } from "./types";

const OrderFormRender = dynamic<OrderFormProps>(() =>
    import("./OrderFormRender").then((m) => m.OrderFormRender)
);

export type { OrderFormProps };

export const OrderForm: ComponentConfig<OrderFormProps> = {
    label: "Form Pemesanan",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                productId: {
                    type: "custom",
                    label: "Pilih Produk *",
                    render: ({ value, onChange }) => <ProductSelectField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                formTitle: { type: "text", label: "Form Judul" },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                showLabels: {
                    type: "radio",
                    label: "Tampilkan Label Pada Inputan",
                    options: [
                        { label: "Ya", value: true },
                        { label: "Tidak", value: false },
                    ]
                },
                showNameField: {
                    type: "select",
                    label: "Nama Lengkap",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showPhoneField: {
                    type: "select",
                    label: "Nomor Telepon",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showEmailField: {
                    type: "select",
                    label: "Email",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showAddressField: {
                    type: "select",
                    label: "Lokasi / Alamat",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showPaymentField: {
                    type: "select",
                    label: "Pembayaran",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showCourierField: {
                    type: "select",
                    label: "Kurir",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showNotesField: {
                    type: "select",
                    label: "Catatan",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showSummaryField: {
                    type: "select",
                    label: "Ringkasan Pesanan",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showDiscountField: {
                    type: "select",
                    label: "Discount Code",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                showSubmitButton: {
                    type: "select",
                    label: "Tombol Submit",
                    options: [
                        { label: "Tampilkan", value: true },
                        { label: "Sembunyikan", value: false },
                    ]
                },
                submitButtonText: { type: "text", label: "Teks Tombol Submit" },
                mainColor: {
                    type: "custom",
                    label: "Warna Utama (Tombol)",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                backgroundColor: {
                    type: "custom",
                    label: "Warna Latar Belakang",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: {
                    type: "custom",
                    label: "Padding Section (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                borderRadius: {
                    type: "custom",
                    label: "Border Radius Form (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={100} step={2} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            productId: "",
            formTitle: "Lengkapi Data:",
        },
        styling: {
            showLabels: true,
            showNameField: true,
            showPhoneField: true,
            showEmailField: true,
            showAddressField: false,
            showPaymentField: true,
            showCourierField: false,
            showNotesField: false,
            showSummaryField: true,
            showDiscountField: false,
            showSubmitButton: true,
            submitButtonText: "Kirimkan",
            mainColor: "#eab308",
            backgroundColor: "#ffffff",
            padding: { desktop: 40, tablet: 32, mobile: 24 },
            borderRadius: { desktop: 16, tablet: 12, mobile: 8 },
        }
    },
    render: (props) => <OrderFormRender {...props} />,
};
