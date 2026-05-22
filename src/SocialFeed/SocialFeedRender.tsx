"use client";

import React, { useId } from "react";

import { SocialFeedProps, SocialFeedItem } from "./types";

// ─── URL Parsers ───────────────────────────────────────────────────────────────

function parseYouTube(url: string, mode: string): string | null {
    if (!url) return null;
    if (mode === "profile") {
        const channelMatch = url.match(/youtube\.com\/channel\/(UC[\w-]+)/i);
        if (channelMatch?.[1]) {
            return `https://www.youtube.com/embed?listType=user_uploads&list=${channelMatch[1]}&index=1`;
        }
        return null;
    }
    const vidMatch = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i);
    return vidMatch?.[1] ? `https://www.youtube.com/embed/${vidMatch[1]}?rel=0&modestbranding=1` : null;
}

function parseTikTok(url: string, mode: string): string | null {
    if (!url || mode === "profile") return null;
    const match = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/i);
    return match?.[1] ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
}

function parseInstagram(url: string, mode: string): string | null {
    if (!url || mode === "profile") return null;
    const cleaned = url.split("?")[0].replace(/\/$/, "");
    return cleaned.includes("instagram.com/p/") || cleaned.includes("instagram.com/reel/")
        ? `${cleaned}/embed/`
        : null;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const YTIcon = ({ size = 24 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const TTIcon = ({ size = 24 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
    </svg>
);

const IGIcon = ({ size = 24 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const platforms = {
    youtube: {
        label: "YouTube",
        color: "#FF0000",
        gradient: "linear-gradient(135deg, #FF0000, #cc0000)",
        icon: YTIcon,
        parse: parseYouTube,
        aspectRatio: "56.25%",
    },
    tiktok: {
        label: "TikTok",
        color: "#010101",
        gradient: "linear-gradient(135deg, #010101, #69C9D0)",
        icon: TTIcon,
        parse: parseTikTok,
        aspectRatio: "177.78%",
    },
    instagram: {
        label: "Instagram",
        color: "#E1306C",
        gradient: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
        icon: IGIcon,
        parse: parseInstagram,
        aspectRatio: "125%",
    },
};

function ProfileCard({ item }: { item: SocialFeedItem }) {
    const cfg = platforms[item.platform];
    if (!cfg) return null;
    const Icon = cfg.icon;
    const handle = (() => {
        if (!item.url) return "";
        const m = item.url.match(/@([\w.]+)/);
        return m ? `@${m[1]}` : item.url.replace(/https?:\/\/(www\.)?/, "").split("/")[1] || "";
    })();

    const background = item.customGradient || item.customColor || cfg.gradient;

    return (
        <div style={{
            background: background,
            borderRadius: "20px",
            overflow: "hidden",
            minHeight: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
            textAlign: "center",
            gap: "16px",
            color: "#fff",
            position: "relative",
            transition: "transform 0.3s ease",
        }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                <div style={{ position: "absolute", top: "-30%", right: "-20%", width: "60%", height: "60%", background: "rgba(255,255,255,0.1)", borderRadius: "50%", filter: "blur(40px)" }} />
                <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "50%", height: "50%", background: "rgba(0,0,0,0.15)", borderRadius: "50%", filter: "blur(40px)" }} />
            </div>

            <div style={{ position: "relative", width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", border: "2px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={32} />
            </div>

            <div style={{ position: "relative" }}>
                <p style={{ fontWeight: 900, fontSize: "1.25rem", margin: 0 }}>{item.profileName || cfg.label}</p>
                {handle && <p style={{ fontSize: "0.85rem", opacity: 0.8, margin: "4px 0 0" }}>{handle}</p>}
            </div>

            {item.profileBio && (
                <p style={{ position: "relative", fontSize: "0.9rem", opacity: 0.85, maxWidth: "280px", lineHeight: 1.5, margin: 0 }}>{item.profileBio}</p>
            )}

            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "relative",
                    marginTop: "8px",
                    padding: "10px 24px",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: "999px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "background 0.2s",
                }}
            >
                Kunjungi Profil →
            </a>
        </div>
    );
}

export const SocialFeedRender = ({ content, styling }: SocialFeedProps) => {
    const id = useId().replace(/:/g, "");
    const { title, description, items } = content;
    const { backgroundColor, titleColor, cardBackground, columns, showCaptions } = styling;
    const cols = parseInt(columns || "3");

    return (
        <section style={{ backgroundColor: backgroundColor || "#f8fafc", padding: "clamp(60px, 10vw, 100px) 0" }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .sfg-${id}{display:grid;grid-template-columns:1fr;gap:24px;}
                @media(min-width:640px){.sfg-${id}{grid-template-columns:repeat(${Math.min(cols,2)},1fr);}}
                @media(min-width:1024px){.sfg-${id}{grid-template-columns:repeat(${cols},1fr);}}
            ` }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 5vw, 48px)" }}>
                {(title || description) && (
                    <div style={{ textAlign: "center", marginBottom: "48px" }}>
                        {title && <h2 style={{ fontSize: "clamp(1.75rem,5vw,3rem)", fontWeight: 900, color: titleColor || "#0f172a", letterSpacing: "-0.03em", margin: "0 0 12px" }}>{title}</h2>}
                        {description && <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: "#475569", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>{description}</p>}
                    </div>
                )}

                <div className={`sfg-${id}`}>
                    {(items || []).map((item, i) => {
                        const cfg = platforms[item.platform];
                        if (!cfg) return null;
                        const Icon = cfg.icon;
                        const isProfile = item.mode === "profile";
                        const embedUrl = isProfile ? null : cfg.parse(item.url, item.mode || "post");
                        const ytChannelEmbed = item.platform === "youtube" && isProfile
                            ? cfg.parse(item.url, "profile")
                            : null;

                        if (isProfile && !ytChannelEmbed) {
                            return <ProfileCard key={i} item={item} />;
                        }

                        const finalEmbed = ytChannelEmbed || embedUrl;
                        const itemBg = item.customGradient || item.customColor || cardBackground || "#fff";
                        const itemTextColor = (item.customGradient || item.customColor) ? "#fff" : "#475569";

                        return (
                            <div key={i} style={{ 
                                background: itemBg, 
                                borderRadius: "20px", 
                                overflow: "hidden", 
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)", 
                                border: "1px solid rgba(0,0,0,0.06)", 
                                display: "flex", 
                                flexDirection: "column",
                                color: (item.customGradient || item.customColor) ? "#fff" : "inherit"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: "1px solid rgba(0,0,0,0.06)", color: cfg.color, fontWeight: 700, fontSize: "0.85rem" }}>
                                    <Icon size={20} />
                                    {cfg.label}{ytChannelEmbed ? " Channel" : ""}
                                </div>

                                {finalEmbed ? (
                                    <div style={{ position: "relative", paddingTop: ytChannelEmbed ? "56.25%" : cfg.aspectRatio, backgroundColor: "#000", flex: 1 }}>
                                        <iframe src={finalEmbed} title={`${cfg.label} ${i + 1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen scrolling="no" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                                    </div>
                                ) : (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", color: "#94a3b8", textAlign: "center", gap: "8px", fontSize: "0.85rem" }}>
                                        <span style={{ fontSize: "2rem" }}>🔗</span>
                                        <span>URL tidak valid untuk {cfg.label}.</span>
                                        <code style={{ fontSize: "0.75rem", background: "#f1f5f9", padding: "4px 8px", borderRadius: "6px" }}>{item.url}</code>
                                    </div>
                                )}

                                {showCaptions !== "false" && item.caption && (
                                    <div style={{ 
                                        padding: "16px", 
                                        fontSize: "0.85rem", 
                                        color: itemTextColor,
                                        borderTop: "1px solid rgba(0,0,0,0.06)", 
                                        lineHeight: 1.6,
                                        background: (item.customGradient || item.customColor) ? "rgba(0,0,0,0.2)" : "transparent"
                                    }}>{item.caption}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
