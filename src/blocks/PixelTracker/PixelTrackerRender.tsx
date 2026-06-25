"use client";

import React, { useEffect, useState } from "react";
import { PixelTrackerProps } from "./types";

export const PixelTrackerRender = ({ content }: PixelTrackerProps) => {
    const { metaPixelId = "", tiktokPixelId = "", googleAnalyticsId = "" } = content;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Lewati pemuatan script pelacak pihak ketiga di server-side atau di lingkungan test (Happy DOM/Bun Test)
        if (typeof window === "undefined" || typeof Bun !== "undefined" || process.env.NODE_ENV === "test") return;

        // 1. Inisialisasi Meta Pixel
        if (metaPixelId) {
            const initMeta = () => {
                const w = window as any;
                if (w.fbq) return;
                
                const n = w.fbq = function (...args: any[]) {
                    const fn = n as any;
                    fn.callMethod ? fn.callMethod.apply(fn, args) : fn.queue.push(args);
                };
                
                const fn = n as any;
                if (!w._fbq) w._fbq = fn;
                fn.push = fn;
                fn.loaded = true;
                fn.version = '2.0';
                fn.queue = [];
                
                const t = document.createElement('script');
                t.async = true;
                t.src = 'https://connect.facebook.net/en_US/fbevents.js';
                
                try {
                    const s = document.getElementsByTagName('script')[0];
                    if (s && s.parentNode) {
                        s.parentNode.insertBefore(t, s);
                    } else {
                        document.head.appendChild(t);
                    }
                } catch (e) {
                    try {
                        document.head.appendChild(t);
                    } catch (err) {}
                }
            };

            initMeta();
            const w = window as any;
            if (w.fbq) {
                w.fbq('init', metaPixelId);
                w.fbq('track', 'PageView');
            }
        }

        // 2. Inisialisasi TikTok Pixel
        if (tiktokPixelId) {
            const initTiktok = () => {
                const w = window as any;
                if (w.ttq) return;

                const ttq = w.ttq = w.ttq || [];
                ttq.methods = [
                    "page", "track", "identify", "instances", "debug", "on", "off", 
                    "once", "ready", "alias", "group", "enableCookie", "disableCookie"
                ];
                ttq.setAndDefer = function (t: any, e: any) {
                    t[e] = function () {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                    };
                };
                for (let i = 0; i < ttq.methods.length; i++) {
                    ttq.setAndDefer(ttq, ttq.methods[i]);
                }
                ttq.instance = function (t: any) {
                    const e = ttq._i[t] || [];
                    for (let n = 0; n < ttq.methods.length; n++) {
                        ttq.setAndDefer(e, ttq.methods[n]);
                    }
                    return e;
                };
                ttq.load = function (e: any, n: any) {
                    const i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                    ttq._i = ttq._i || {};
                    ttq._i[e] = [];
                    ttq._i[e]._u = i;
                    ttq._t = ttq._t || {};
                    ttq._t[e] = +new Date();
                    ttq._o = ttq._o || {};
                    ttq._o[e] = n;
                    
                    const o = document.createElement("script");
                    o.type = "text/javascript";
                    o.async = true;
                    o.src = i;
                    
                    try {
                        const a = document.getElementsByTagName("script")[0];
                        if (a && a.parentNode) {
                            a.parentNode.insertBefore(o, a);
                        } else {
                            document.head.appendChild(o);
                        }
                    } catch (err) {
                        try {
                            document.head.appendChild(o);
                        } catch (e) {}
                    }
                };

                ttq.load(tiktokPixelId);
                ttq.page();
            };

            initTiktok();
        }

        // 3. Inisialisasi Google Analytics (GA4)
        if (googleAnalyticsId) {
            const initGA = () => {
                const w = window as any;
                
                const t = document.createElement('script');
                t.async = true;
                t.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
                
                try {
                    const s = document.getElementsByTagName('script')[0];
                    if (s && s.parentNode) {
                        s.parentNode.insertBefore(t, s);
                    } else {
                        document.head.appendChild(t);
                    }
                } catch (e) {
                    try {
                        document.head.appendChild(t);
                    } catch (err) {}
                }

                w.dataLayer = w.dataLayer || [];
                w.gtag = function () {
                    w.dataLayer.push(arguments);
                };
                w.gtag('js', new Date());
                w.gtag('config', googleAnalyticsId);
            };

            initGA();
        }
    }, [metaPixelId, tiktokPixelId, googleAnalyticsId]);

    // Deteksi apakah berada di Editor Visual atau di lingkungan unit test
    const isEditor = typeof window !== "undefined" && (
        window.parent !== window ||
        window.location.search.includes("editor=") ||
        !!(window as any).__CREDBUILD_INTERNAL_DO_NOT_USE ||
        typeof Bun !== "undefined" ||
        process.env.NODE_ENV === "test"
    );

    // Di editor visual, tampilkan panel ringkasan status tracker
    if (isEditor || !isMounted) {
        const hasAnyPixel = metaPixelId || tiktokPixelId || googleAnalyticsId;

        return (
            <div style={{
                padding: "20px",
                background: "#f8fafc",
                border: "2px dashed #64748b",
                borderRadius: "12px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                margin: "20px 0",
                color: "#1e293b",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: hasAnyPixel ? "#10b981" : "#ef4444"
                    }} />
                    <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 700 }}>All-in-One Pixel Tracker</h4>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {/* Meta/Facebook status */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", padding: "6px 8px", background: "#fff", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                        <span style={{ fontWeight: 600, color: "#1877f2" }}>Meta Pixel</span>
                        <span style={{ color: metaPixelId ? "#475569" : "#94a3b8" }}>
                            {metaPixelId ? `Active (ID: ${metaPixelId})` : "Inactive"}
                        </span>
                    </div>

                    {/* TikTok status */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", padding: "6px 8px", background: "#fff", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                        <span style={{ fontWeight: 600, color: "#000000" }}>TikTok Pixel</span>
                        <span style={{ color: tiktokPixelId ? "#475569" : "#94a3b8" }}>
                            {tiktokPixelId ? `Active (ID: ${tiktokPixelId})` : "Inactive"}
                        </span>
                    </div>

                    {/* Google Analytics status */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", padding: "6px 8px", background: "#fff", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                        <span style={{ fontWeight: 600, color: "#ea4335" }}>Google Analytics (GA4)</span>
                        <span style={{ color: googleAnalyticsId ? "#475569" : "#94a3b8" }}>
                            {googleAnalyticsId ? `Active (ID: ${googleAnalyticsId})` : "Inactive"}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    // Di live website, render noscript fallback untuk Meta dan TikTok jika ada ID-nya
    return (
        <>
            {metaPixelId && (
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                        alt=""
                    />
                </noscript>
            )}
            {tiktokPixelId && (
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src={`https://analytics.tiktok.com/i18n/pixel/enable_cookie?pixel_id=${tiktokPixelId}`}
                        alt=""
                    />
                </noscript>
            )}
        </>
    );
};
