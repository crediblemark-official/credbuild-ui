"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";

import { PixelTrackerProps } from "./types";

const PixelTrackerRender = dynamic<PixelTrackerProps>(() => import("./PixelTrackerRender").then(m => m.PixelTrackerRender));

export const PixelTracker: ComponentConfig<PixelTrackerProps> = {
    label: "Pixel Tracker (All-in-One)",
    fields: {
        content: {
            type: "object",
            label: "Tracking IDs",
            objectFields: {
                metaPixelId: { 
                    type: "text", 
                    label: "Meta Pixel ID", 
                    placeholder: "Contoh: 123456789012345 (Opsional)" 
                },
                tiktokPixelId: { 
                    type: "text", 
                    label: "TikTok Pixel ID", 
                    placeholder: "Contoh: C1234567890ABCDE (Opsional)" 
                },
                googleAnalyticsId: { 
                    type: "text", 
                    label: "Google Analytics (GA4) ID", 
                    placeholder: "Contoh: G-XXXXXXXXXX (Opsional)" 
                },
            }
        }
    },
    defaultProps: {
        content: {
            metaPixelId: "",
            tiktokPixelId: "",
            googleAnalyticsId: "",
        }
    },
    render: (props) => <PixelTrackerRender {...props} />,
};
