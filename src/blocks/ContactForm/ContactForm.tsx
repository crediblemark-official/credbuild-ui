"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import React from "react";

import { ContactFormProps } from "./types";

const ContactFormRender = dynamic<ContactFormProps>(() => import("./ContactFormRender").then(m => m.ContactFormRender));
export const ContactForm: ComponentConfig<ContactFormProps> = {
    label: "Contact Form",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Heading" },
                description: { type: "textarea", label: "Description" },
                submitText: { type: "text", label: "Button Text" },
                emailTo: { type: "text", label: "Send To Email" },
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
                padding: {
                    type: "custom",
                    label: "Section Padding (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                cardBorderRadius: {
                    type: "custom",
                    label: "Form Border Radius (px)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={48} step={2} />
                },
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
                buttonBgColor: {
                    type: "custom",
                    label: "Submit Button Background",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                buttonTextColor: {
                    type: "custom",
                    label: "Submit Button Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Contact Us",
            description: "It's our honor to serve you. Please contact us for more information.",
            submitText: "Send Message",
            emailTo: "info@example.com",
        },
        styling: {
            backgroundColor: "#ffffff",
            padding: { desktop: 64, tablet: 48, mobile: 32 },
            cardBorderRadius: { desktop: 12, tablet: 12, mobile: 8 },
            titleColor: "#111827",
            descriptionColor: "#4b5563",
            buttonBgColor: "#2563eb",
            buttonTextColor: "#ffffff",
        }
    },
    render: (props) => <ContactFormRender {...props} />,
};

