"use client";

import React, { useId } from "react";
import { getVal, getTabletVal, getMobileVal } from "../utils";
import { VideoEmbedProps } from "./types";

export const VideoEmbedRender = ({ content, styling }: VideoEmbedProps) => {
    const { url, title, aspectRatio } = content;
    const { maxWidth, padding, backgroundColor, borderRadius, boxShadow } = styling;
    
    const id = useId().replace(/:/g, '');
    const uniqueClass = `video-${id}`;

    const getEmbedUrl = (url: string) => {
        if (!url) return "";
        
        // YouTube
        const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        const ytMatch = url.match(ytRegex);
        if (ytMatch && ytMatch[1]) {
            return `https://www.youtube.com/embed/${ytMatch[1]}`;
        }

        // Vimeo
        const vimeoRegex = /vimeo\.com\/(?:video\/)?([0-9]+)/i;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch && vimeoMatch[1]) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
        }

        return url;
    };

    const embedUrl = getEmbedUrl(url);
    const isDirectVideo = url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm") || url.toLowerCase().endsWith(".ogg");

    const ratioMap = {
        "16:9": "56.25%",
        "4:3": "75%",
        "1:1": "100%",
    };

    return (
        <section className={uniqueClass} style={{ background: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 64)}px 20px;
                    }
                    .${uniqueClass} .video-container {
                        max-width: ${getVal(maxWidth, 1000)}px;
                    }
                    @media (max-width: 1024px) {
                        .${uniqueClass} {
                            padding: ${getTabletVal(padding, 48)}px 20px;
                        }
                        .${uniqueClass} .video-container {
                            max-width: ${getTabletVal(maxWidth, 800)}px;
                        }
                    }
                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 32)}px 16px;
                        }
                        .${uniqueClass} .video-container {
                            max-width: ${getMobileVal(maxWidth, 400)}px;
                        }
                    }
                `
            }} />
            <div className="video-container" style={{
                margin: "0 auto",
                width: "100%",
                borderRadius: borderRadius,
                overflow: "hidden",
                boxShadow: String(boxShadow) === "true" ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none",
            }}>
                <div style={{
                    position: "relative",
                    paddingBottom: ratioMap[aspectRatio] || "56.25%",
                    height: 0,
                }}>
                    {isDirectVideo ? (
                        <video
                            src={url}
                            controls
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    ) : (
                        <iframe
                            src={embedUrl}
                            title={title || "Video Player"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};
