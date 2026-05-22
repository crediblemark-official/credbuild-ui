"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
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
        }
    },
    defaultProps: {
        content: {
            title: "Hubungi Kami",
            description: "Adalah kehormatan bagi kami untuk melayani Anda. Silakan hubungi kami untuk informasi lebih lanjut.",
            submitText: "Kirim Pesan",
            emailTo: "info@example.com",
        }
    },
    render: (props) => <ContactFormRender {...props} />,
};
