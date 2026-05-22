"use client";

import React, { useId } from "react";
import { getVal, getMobileVal } from "../utils";
import { CustomEmbedProps } from "./types";

export const CustomEmbedRender = ({ content, styling }: CustomEmbedProps) => {
    const { html, script } = content;
    const { backgroundColor, padding, maxWidth, alignment } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `embed-${id}`;

    // Gabungkan HTML dan Script ke dalam dokumen tertutup ter-sandbox
    const srcDoc = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background: transparent;
                        overflow: hidden;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    }
                    img, iframe, video {
                        max-width: 100%;
                    }
                </style>
            </head>
            <body>
                <div id="embed-content">${html || ""}</div>
                ${script ? `<script>${script}</script>` : ""}
            </body>
        </html>
    `;

    return (
        <section className={uniqueClass} style={{ background: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 64)}px 20px;
                        display: flex;
                        justify-content: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
                    }
                    .${uniqueClass} .embed-wrapper {
                        width: 100%;
                        max-width: ${getVal(maxWidth, 1200)}px;
                    }
                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 32)}px 16px;
                        }
                    }
                    .${uniqueClass} iframe {
                        width: 100%;
                        border: none;
                        background: transparent;
                    }
                `
            }} />
            <div className="embed-wrapper">
                <iframe
                    srcDoc={srcDoc}
                    sandbox="allow-scripts"
                    title="Sandboxed Custom Embed"
                    loading="lazy"
                    style={{ minHeight: "150px" }}
                />
            </div>
        </section>
    );
};

