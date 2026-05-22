"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { TiptapField } from "./TiptapField";
const RichTextRender = dynamic<RichTextProps>(() => import("./RichTextRender").then(m => m.RichTextRender));
import type { RichTextProps } from "./types";

export type { RichTextProps };

export const RichText: ComponentConfig<RichTextProps> = {
    label: "Rich Text",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                html: {
                    type: "custom",
                    label: "Content Editor",
                    render: ({ value, onChange }) => <TiptapField value={value} onChange={onChange} />,
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                maxWidth: {
                    type: "select",
                    label: "Max Width",
                    options: [
                        { label: "Prose (Standard)", value: "max-w-prose" },
                        { label: "Medium", value: "max-w-4xl" },
                        { label: "Large", value: "max-w-6xl" },
                        { label: "Full", value: "max-w-full" },
                    ],
                },
                paddingTop: { type: "number", label: "Padding Top" },
                paddingBottom: { type: "number", label: "Padding Bottom" },
            }
        }
    },
    defaultProps: {
        content: {
            html: "<p>Start typing your content here...</p>",
        },
        styling: {
            maxWidth: "max-w-prose",
            paddingTop: 64,
            paddingBottom: 64,
        }
    },
    render: (props) => <RichTextRender {...props} />,
};
