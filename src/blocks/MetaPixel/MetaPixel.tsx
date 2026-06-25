"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";

import { MetaPixelProps } from "./types";

const MetaPixelRender = dynamic<MetaPixelProps>(() => import("./MetaPixelRender").then(m => m.MetaPixelRender));

export const MetaPixel: ComponentConfig<MetaPixelProps> = {
    label: "Meta Pixel",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                pixelId: { 
                    type: "text", 
                    label: "Meta Pixel ID", 
                    placeholder: "Contoh: 123456789012345" 
                },
            }
        }
    },
    defaultProps: {
        content: {
            pixelId: "",
        }
    },
    render: (props) => <MetaPixelRender {...props} />,
};
