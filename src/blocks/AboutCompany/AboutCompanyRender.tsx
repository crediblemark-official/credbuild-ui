"use client";

import React, { useId } from "react";
import Image from "next/image";
import { getVal, getTabletVal, getMobileVal } from "@/components/credbuild/utils";
import { AboutCompanyProps } from "./types";

export const AboutCompanyRender = ({
    content,
    media,
    styling = {},
    typography = {}
}: AboutCompanyProps) => {
    const { 
        backgroundColor = "#ffffff", 
        padding = { desktop: 48, tablet: 32, mobile: 24 }, 
        textColor = "#374151", 
        gap = { desktop: 32, tablet: 24, mobile: 16 } 
    } = styling;
    
    const { 
        fontSize = { desktop: 18, tablet: 16, mobile: 16 } 
    } = typography;

    const id = useId().replace(/:/g, ''); // React ID, sanitized
    const uniqueClass = `about-company-${id}`;

    return (
        <section className={uniqueClass} style={{ backgroundColor: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                        .${uniqueClass} {
                            padding: ${getVal(padding, 48)}px 16px;
                        }
                        .${uniqueClass} .about-grid {
                            gap: ${getVal(gap, 32)}px;
                        }
                        .${uniqueClass} .about-text {
                            font-size: ${getVal(fontSize, 18)}px;
                        }

                        @media (min-width: 768px) {
                            .${uniqueClass} {
                                padding: ${getVal(padding, 48)}px 32px;
                            }
                        }

                        @media (max-width: 1024px) {
                            .${uniqueClass} {
                                padding: ${getTabletVal(padding, 32)}px 16px;
                            }
                             .${uniqueClass} .about-grid {
                                gap: ${getTabletVal(gap, 24)}px;
                            }
                             .${uniqueClass} .about-text {
                                font-size: ${getTabletVal(fontSize, 16)}px;
                            }
                        }
                        @media (max-width: 640px) {
                            .${uniqueClass} {
                                padding: ${getMobileVal(padding, 24)}px 16px;
                            }
                             .${uniqueClass} .about-grid {
                                gap: ${getMobileVal(gap, 16)}px;
                            }
                             .${uniqueClass} .about-text {
                                font-size: ${getMobileVal(fontSize, 16)}px;
                            }
                        }
                    `
            }} />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center about-grid">
                <div className="rounded-xl overflow-hidden shadow-sm">
                    {media?.imageUrl ? (
                        <Image
                            src={media.imageUrl}
                            alt="About Us"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    ) : (
                        <div className="w-full min-h-[350px] bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-slate-400">
                            <span className="text-5xl mb-3">🏢</span>
                            <p className="text-sm font-medium">Gambar Profil Perusahaan Belum Dipilih</p>
                        </div>
                    )}
                </div>
                <div className="leading-relaxed about-text" style={{ color: textColor }}>
                    {/* Simple paragraph splitting */}
                    {(content.content || "").split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};
