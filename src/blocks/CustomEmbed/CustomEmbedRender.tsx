"use client";

import React, { useId, useState, useEffect } from "react";
import { getVal, getMobileVal } from "../../utils";
import { CustomEmbedProps } from "./types";

export const CustomEmbedRender = ({ content, styling }: CustomEmbedProps) => {
    const { html, script, renderMode } = content;
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

    // Clean html for auto-detection
    const trimmedHtml = html ? html.trim() : "";
    // Detect if input is strictly a single <iframe> tag
    const isPureIframe = /^<iframe\b[^>]*>([\s\S]*?)<\/iframe>$/i.test(trimmedHtml);

    // Determine the active rendering mode (fallback to auto-detection if renderMode is undefined)
    const activeMode = renderMode || (isPureIframe ? "iframe-open" : "sandboxed");

    // Listen to resize messages from the iframe (only needed for sandboxed or iframe-open modes)
    useEffect(() => {
        if (activeMode === "direct") return;

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
    }, [id, activeMode]);

    // Handle script tag parsing and execution inside Direct DOM mode
    useEffect(() => {
        if (activeMode !== "direct" || !html) return;

        // Parse HTML to extract scripts
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const scriptElements = Array.from(tempDiv.querySelectorAll("script"));

        const loadedScripts: HTMLScriptElement[] = [];

        scriptElements.forEach((oldScript) => {
            const newScript = document.createElement("script");
            
            // Copy all attributes
            Array.from(oldScript.attributes).forEach((attr) => {
                newScript.setAttribute(attr.name, attr.value);
            });

            // Set content or source URL
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }

            document.body.appendChild(newScript);
            loadedScripts.push(newScript);
        });

        // Parse and execute optional secondary JavaScript field
        let secondaryScriptEl: HTMLScriptElement | null = null;
        if (script) {
            secondaryScriptEl = document.createElement("script");
            secondaryScriptEl.textContent = script;
            document.body.appendChild(secondaryScriptEl);
        }

        return () => {
            // Cleanup injected scripts on unmount to avoid memory leaks or duplicate widget triggers
            loadedScripts.forEach((s) => s.remove());
            if (secondaryScriptEl) {
                secondaryScriptEl.remove();
            }
        };
    }, [html, script, activeMode]);

    const resizeScript = `
        <script>
            function sendHeight() {
                const height = document.documentElement.scrollHeight || document.body.scrollHeight;
                window.parent.postMessage({ type: 'resize-iframe', id: '${id}', height: height }, '*');
            }
            window.addEventListener('load', sendHeight);
            window.addEventListener('resize', sendHeight);
            
            // Track dynamic observer changes (such as when Tailwind finishes styling compiles)
            if (window.ResizeObserver) {
                new ResizeObserver(sendHeight).observe(document.body);
            } else {
                setInterval(sendHeight, 1000);
            }
        </script>
    `;

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

    // Construct srcDoc for iframes
    let srcDoc = "";
    const isStandalone = html && (html.includes("<html") || html.includes("<!DOCTYPE") || html.includes("<body") || html.includes("<head>"));

    // Detect if content uses Tailwind utility classes
    const needsTailwind = html && (
        html.includes("cdn.tailwindcss.com") ||
        html.includes("tailwind.js") ||
        html.includes("tailwindcss") ||
        /\b(bg-|text-|p[xy]?[-0-9]|m[xy]?[-0-9]|flex|grid|border-|rounded-|shadow-|justify-|items-|gap-|relative|absolute|hidden|w-|h-|leading-|tracking-|font-|transition|duration-|ease-|hover:|focus:|sm:|md:|lg:|xl:)/.test(html)
    );

    if (activeMode !== "direct") {
        if (isStandalone) {
            let processedHtml = html;

            // Inject resize script before body close tag
            if (processedHtml.includes("</body>")) {
                processedHtml = processedHtml.replace("</body>", `${resizeScript}${scrollbarHideStyle}</body>`);
            } else {
                processedHtml = processedHtml + resizeScript + scrollbarHideStyle;
            }

            // Inject Tailwind CDN if needed and not present
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
                {activeMode === "direct" ? (
                    // Direct DOM Insertion Mode (No Iframe Sandbox, executes scripts and tags natively)
                    <div 
                        className="direct-embed-container w-full"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                ) : (
                    // Iframe Sandbox or Open Mode
                    <iframe
                        srcDoc={srcDoc}
                        scrolling="no"
                        sandbox={activeMode === "sandboxed"
                            ? "allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-presentation allow-top-navigation-by-user-activation"
                            : undefined
                        }
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
                        allowFullScreen
                        title="Custom Embed Container"
                        loading="lazy"
                        style={{ height: iframeHeight, border: "none", width: "100%" }}
                    />
                )}
            </div>
        </section>
    );
};
