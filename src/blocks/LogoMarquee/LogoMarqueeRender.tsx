"use client";

import React, { useId } from "react";
import Image from "next/image";
import { LogoMarqueeProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const LogoMarqueeRender = ({
    content,
    media,
    styling
}: LogoMarqueeProps) => {
    const { title } = content;
    const { logos } = media;
    const {
        speed = 30,
        backgroundColor = "#ffffff",
        padding,
        titleColor = "#475569",
        titleSize,
        grayscale = false,
    } = styling;

    const id = "logo-marquee-" + useId().replace(/:/g, "");
    const displayLogos = [...logos, ...logos];

    return (
        <section className={id} style={{ overflow: "hidden", backgroundColor: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .${id} .marquee {
                display: flex;
                width: max-content;
                animation: scroll ${speed}s linear infinite;
            }
            .${id} .marquee:hover {
                animation-play-state: paused;
            }
            .${id} {
                padding-top: ${getVal(padding, 60)}px;
                padding-bottom: ${getVal(padding, 60)}px;
            }
            .${id} h2 {
                font-size: ${getVal(titleSize, 24)}px;
            }
            @media (max-width: 768px) {
                .${id} {
                    padding-top: ${getTabletVal(padding, 40)}px;
                    padding-bottom: ${getTabletVal(padding, 40)}px;
                }
                .${id} h2 {
                    font-size: ${getTabletVal(titleSize, 20)}px;
                }
            }
            @media (max-width: 640px) {
                .${id} {
                    padding-top: ${getMobileVal(padding, 40)}px;
                    padding-bottom: ${getMobileVal(padding, 40)}px;
                }
                .${id} h2 {
                    font-size: ${getMobileVal(titleSize, 18)}px;
                }
            }
        `
            }} />

            {title && (
                <div style={{ maxWidth: "1200px", margin: "0 auto 40px", padding: "0 20px", textAlign: "center" }}>
                    <h2 style={{ fontWeight: "600", color: titleColor }}>{title}</h2>
                </div>
            )}

            <div style={{ overflow: "hidden", width: "100%", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <div className="marquee">
                    {displayLogos.map((logo, index) => {
                        // Defensive checks: ignore empty logos
                        if (!logo || !logo.src || typeof logo.src !== "string" || logo.src.trim() === "") {
                            return null;
                        }

                        const src = logo.src;
                        // Accessibility (A11y) & SEO: Ensure alt is never empty or missing
                        const alt = logo.alt && typeof logo.alt === "string" && logo.alt.trim() !== "" 
                            ? logo.alt 
                            : "Partner Logo";

                        const isExternal = src.startsWith("http://") || src.startsWith("https://");
                        // Check if it is a whitelisted hostname in next.config.js (excluding placeholder domains to avoid local network fetch failures)
                        const isWhitelisted = isExternal && (
                            src.includes("localhost") || 
                            src.includes("images.unsplash.com") || 
                            src.includes(".r2.dev") || 
                            src.includes("cdn.univedpress.id") || 
                            src.includes("ui-avatars.com") || 
                            src.includes("i.pravatar.cc") || 
                            src.includes("file.crediblemark.com")
                        );
                        const useNextImage = !isExternal || isWhitelisted;

                        return (
                            <div key={index} style={{ flexShrink: 0, padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ position: "relative", height: "40px", width: "120px" }}>
                                    {useNextImage ? (
                                        <Image
                                            src={src}
                                            alt={alt}
                                            fill
                                            sizes="200px"
                                            className="object-contain"
                                            style={{
                                                filter: grayscale ? "grayscale(100%) opacity(0.7)" : "none",
                                                transition: "all 0.3s"
                                            }}
                                        />
                                    ) : (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                            src={src}
                                            alt={alt}
                                            className="object-contain w-full h-full"
                                            style={{
                                                filter: grayscale ? "grayscale(100%) opacity(0.7)" : "none",
                                                transition: "all 0.3s"
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

