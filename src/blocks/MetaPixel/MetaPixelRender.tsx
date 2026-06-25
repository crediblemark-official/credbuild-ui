"use client";

import React, { useEffect, useState } from "react";
import { MetaPixelProps } from "./types";

export const MetaPixelRender = ({ content }: MetaPixelProps) => {
    const { pixelId = "" } = content;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (!pixelId || typeof window === "undefined") return;

        // Inisialisasi base code Meta Pixel secara dinamis
        const initPixel = () => {
            const w = window as any;
            if (w.fbq) return;
            
            const n = w.fbq = function (...args: any[]) {
                n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
            };
            
            if (!w._fbq) w._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];
            
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

        initPixel();
        
        const w = window as any;
        if (w.fbq) {
            w.fbq('init', pixelId);
            w.fbq('track', 'PageView');
        }
    }, [pixelId]);

    // Deteksi apakah dirender di dalam visual editor canvas
    const isEditor = typeof window !== "undefined" && (
        window.parent !== window ||
        window.location.search.includes("editor=") ||
        !!(window as any).__CREDBUILD_INTERNAL_DO_NOT_USE ||
        process.env.NODE_ENV === "test"
    );

    // Di editor visual, tampilkan placeholder agar admin tahu letak komponen
    if (isEditor || !isMounted) {
        return (
            <div style={{
                padding: "16px",
                background: "#f0f2f5",
                border: "2px dashed #1877f2",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                margin: "16px 0",
                color: "#1c1e21"
            }}>
                <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#1877f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "20px"
                }}>
                    f
                </div>
                <div>
                    <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: 600 }}>Meta Pixel Tracker</h4>
                    <p style={{ margin: 0, fontSize: "12px", color: pixelId ? "#606770" : "#fa3e3e" }}>
                        {pixelId ? `Pixel ID: ${pixelId} (Aktif)` : "Pixel ID belum dimasukkan"}
                    </p>
                </div>
            </div>
        );
    }

    // Di live website, render noscript fallback untuk pelacakan non-JS
    if (pixelId) {
        return (
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        );
    }

    return null;
};
