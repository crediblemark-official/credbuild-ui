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
            title: "Contact Us",
            description: "It's our honor to serve you. Please contact us for more information.",
            submitText: "Send Message",
            emailTo: "info@example.com",
        }
    },
    render: (props) => <ContactFormRender {...props} />,
};
