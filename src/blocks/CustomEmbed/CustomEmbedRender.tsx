"use client";

import React, { useId, useState, useEffect } from "react";
import { getVal, getMobileVal } from "../../utils";
import { CustomEmbedProps } from "./types";

export const CustomEmbedRender = ({ content, styling }: CustomEmbedProps) => {
    const { html, script } = content;
    const { backgroundColor, padding, maxWidth, alignment } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `embed-${id}`;
    const [iframeHeight, setIframeHeight] = useState("150px");
    const [tailwindUrl, setTailwindUrl] = useState("https://cdn.tailwindcss.com");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setTailwindUrl(`${window.location.origin}/tailwind.js`);
        }
    }, []);

    // Listen to resize messages from the sandboxed iframe
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (
                event.data &&
                event.data.type === "resize-iframe" &&
                event.data.id === id
            ) {
                setIframeHeight(`${event.data.height}px`);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [id]);

    const resizeScript = `
        <script>
            function sendHeight() {
                const height = document.documentElement.scrollHeight || document.body.scrollHeight;
                window.parent.postMessage({ type: 'resize-iframe', id: '${id}', height: height }, '*');
            }
            window.addEventListener('load', sendHeight);
            window.addEventListener('resize', sendHeight);
            
            // Lacak perubahan layout dinamis (seperti saat Tailwind selesai compile style)
            if (window.ResizeObserver) {
                new ResizeObserver(sendHeight).observe(document.body);
            } else {
                setInterval(sendHeight, 1000);
            }
        </script>
    `;

    let srcDoc = "";
    const isStandalone = html && (html.includes("<html") || html.includes("<!DOCTYPE") || html.includes("<body") || html.includes("<head>"));

    // Deteksi apakah konten menggunakan Tailwind CSS (memiliki link/script CDN, keyword tailwind,
    // atau menggunakan class utilitas khas Tailwind).
    const needsTailwind = html && (
        html.includes("cdn.tailwindcss.com") ||
        html.includes("tailwind.js") ||
        html.includes("tailwindcss") ||
        /\b(bg-|text-|p[xy]?[-0-9]|m[xy]?[-0-9]|flex|grid|border-|rounded-|shadow-|justify-|items-|gap-|relative|absolute|hidden|w-|h-|leading-|tracking-|font-|transition|duration-|ease-|hover:|focus:|sm:|md:|lg:|xl:)/.test(html)
    );

    const scrollbarHideStyle = `
        <style>
            html, body {
                overflow: hidden !important;
                -ms-overflow-style: none !important;
                scrollbar-width: none !important;
            }
            ::-webkit-scrollbar {
                display: none !important;
            }
        </style>
    `;

    if (isStandalone) {
        let processedHtml = html;

        // Inject script resize sebelum penutup body
        if (processedHtml.includes("</body>")) {
            processedHtml = processedHtml.replace("</body>", `${resizeScript}${scrollbarHideStyle}</body>`);
        } else {
            processedHtml = processedHtml + resizeScript + scrollbarHideStyle;
        }

        // Inject Tailwind CDN secara dinamis hanya jika kode memang menggunakan kelas Tailwind
        if (needsTailwind && !processedHtml.includes("cdn.tailwindcss.com") && !processedHtml.includes("tailwind.js") && !processedHtml.includes("tailwindcss")) {
            if (processedHtml.includes("</head>")) {
                processedHtml = processedHtml.replace("</head>", `<script src="${tailwindUrl}"></script></head>`);
            } else if (processedHtml.includes("<head>")) {
                processedHtml = processedHtml.replace("<head>", `<head><script src="${tailwindUrl}"></script>`);
            } else {
                processedHtml = `<script src="${tailwindUrl}"></script>` + processedHtml;
            }
        }

        srcDoc = processedHtml;
    } else {
        srcDoc = `
            <!DOCTYPE html>
            <html>
                <head>
                    ${needsTailwind ? `<script src="${tailwindUrl}"></script>` : ""}
                    <style>
                        *, *::before, *::after { box-sizing: border-box; }
                        html, body {
                            margin: 0;
                            padding: 0;
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                            overflow: hidden !important;
                            -ms-overflow-style: none !important;
                            scrollbar-width: none !important;
                        }
                        ::-webkit-scrollbar {
                            display: none !important;
                        }
                        img, iframe, video {
                            max-width: 100%;
                        }
                    </style>
                </head>
                <body>
                    ${html || ""}
                    ${script ? `<script>${script}</script>` : ""}
                    ${resizeScript}
                </body>
            </html>
        `;
    }

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
                        max-width: ${typeof getVal(maxWidth, 1200) === 'number' ? `${getVal(maxWidth, 1200)}px` : getVal(maxWidth, 1200)};
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
                    scrolling="no"
                    sandbox="allow-scripts"
                    title="Sandboxed Custom Embed"
                    loading="lazy"
                    style={{ height: iframeHeight, border: "none", width: "100%" }}
                />
            </div>
        </section>
    );
};

