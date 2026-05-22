"use client";

import dynamic from "next/dynamic";
import { ColorPickerField, type ComponentConfig } from "@crediblemark/build";
import React from "react";
const AccordionRender = dynamic<AccordionProps>(() => import("./AccordionRender").then(m => m.AccordionRender));
import type { AccordionProps } from "./types";

export type { AccordionProps };

export const Accordion: ComponentConfig<AccordionProps> = {
    label: "FAQ Accordion",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
                items: {
                    type: "array",
                    label: "FAQ Items",
                    arrayFields: {
                        question: { type: "text", label: "Question" },
                        answer: { type: "textarea", label: "Answer" },
                    },
                    getItemSummary: (item) => item.question || "Question",
                },
            }
        },
        typography: {
            type: "object",
            label: "Typography",
            objectFields: {
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
                backgroundColor: {
                    type: "custom",
                    label: "Section Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                itemBgColor: {
                    type: "custom",
                    label: "Item Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textColor: {
                    type: "custom",
                    label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                activeColor: {
                    type: "custom",
                    label: "Active Icon Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Pertanyaan Umum",
            items: [
                { question: "Bagaimana cara mengirim naskah?", answer: "Kirim via email atau form website kami. Pastikan naskah sudah rapi dan lengkap." },
                { question: "Berapa lama proses penerbitan?", answer: "Standar 3-4 minggu untuk paket reguler, namun bisa lebih cepat dengan paket ekspres." },
                { question: "Apakah ada biaya tersembunyi?", answer: "Tidak ada. Semua biaya transparan dan tertera di paket harga." },
            ],
        },
        typography: {},
        styling: {
            backgroundColor: "#ffffff",
            titleColor: "#1e293b",
            itemBgColor: "#f8fafc",
            activeColor: "#2563eb",
            textColor: "#475569",
        }
    },
    render: (props) => <AccordionRender {...props} />,
};
