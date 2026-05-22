"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { ColorPickerField } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";

import { LogoMarqueeProps } from "./types";

const getCleanFilename = (url: string): string => {
    if (!url) return "Logo";
    try {
        const decoded = decodeURIComponent(url);
        const filename = decoded.substring(decoded.lastIndexOf('/') + 1);
        const parts = filename.split('-');
        
        let startIndex = 0;
        while (startIndex < parts.length) {
            const part = parts[startIndex];
            const isHex = /^[0-9a-f]+$/i.test(part);
            const isNumber = /^\d+$/.test(part);
            
            if ((isHex && part.length >= 4) || (isNumber && part.length >= 10)) {
                startIndex++;
            } else {
                break;
            }
        }
        
        if (startIndex < parts.length) {
            return parts.slice(startIndex).join('-');
        }
        return filename;
    } catch {
        return url;
    }
};

const LogoMarqueeRender = dynamic<LogoMarqueeProps>(() => import("./LogoMarqueeRender").then(m => m.LogoMarqueeRender));
export const LogoMarquee: ComponentConfig<LogoMarqueeProps> = {
    label: "Logo Marquee",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Title" },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                logos: {
                    type: "array",
                    label: "Logos",
                    arrayFields: {
                        src: { 
                            type: "custom", 
                            label: "Logo",
                            render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                        },
                        alt: { type: "text", label: "Alt Text" },
                    },
                    getItemSummary: (item) => item.alt || (item.src ? getCleanFilename(item.src) : "Logo"),
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                speed: { type: "number", label: "Speed (Seconds)", min: 5, max: 100, placeholder: "20" },
                backgroundColor: {
                    type: "custom",
                    label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                padding: { type: "text", label: "Section Padding" },
                titleColor: {
                    type: "custom",
                    label: "Title Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                titleSize: { type: "text", label: "Title Font Size" },
                grayscale: {
                    type: "select",
                    label: "Grayscale Effect",
                    options: [
                        { label: "Yes", value: true },
                        { label: "No", value: false },
                    ],
                },
            }
        }
    },
    defaultProps: {
        content: {
            title: "",
        },
        media: {
            logos: [
                { src: "https://via.placeholder.com/150x50?text=Logo+1", alt: "Logo 1" },
                { src: "https://via.placeholder.com/150x50?text=Logo+2", alt: "Logo 2" },
                { src: "https://via.placeholder.com/150x50?text=Logo+3", alt: "Logo 3" },
                { src: "https://via.placeholder.com/150x50?text=Logo+4", alt: "Logo 4" },
                { src: "https://via.placeholder.com/150x50?text=Logo+5", alt: "Logo 5" },
            ],
        },
        styling: {
            speed: 30,
            backgroundColor: "#ffffff",
            padding: "60px 0",
            titleColor: "#475569",
            titleSize: "1.5rem",
            grayscale: false,
        }
    },
    render: (props) => <LogoMarqueeRender {...props} />,
};
