"use client";

import React, { useId } from "react";
import type { SingleImageProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";
import { getProxiedUrl } from "@/lib/media/utils";

export const SingleImageRender = ({
    content,
    styling
}: SingleImageProps) => {
    const { imageUrl, altText = "Image", linkUrl, openInNewTab = false } = content;
    const {
        align = "center",
        imageWidth = { desktop: 100, tablet: 100, mobile: 100 },
        imageFit = "cover",
        aspectRatio = "off",
        backgroundType = "none",
        backgroundColor = "#ffffff",
        backgroundImage = "",
        paddingTop = { desktop: 0, tablet: 0, mobile: 0 },
        paddingBottom = { desktop: 0, tablet: 0, mobile: 0 },
        paddingLeft = { desktop: 0, tablet: 0, mobile: 0 },
        paddingRight = { desktop: 0, tablet: 0, mobile: 0 },
        borderRadius = { desktop: 0, tablet: 0, mobile: 0 }
    } = styling;

    const id = "single-image-" + useId().replace(/:/g, "");

    // Resolve paddings
    const padTopDesktop = getVal(paddingTop, 0);
    const padTopTablet = getTabletVal(paddingTop, 0);
    const padTopMobile = getMobileVal(paddingTop, 0);

    const padBottomDesktop = getVal(paddingBottom, 0);
    const padBottomTablet = getTabletVal(paddingBottom, 0);
    const padBottomMobile = getMobileVal(paddingBottom, 0);

    const padLeftDesktop = getVal(paddingLeft, 0);
    const padLeftTablet = getTabletVal(paddingLeft, 0);
    const padLeftMobile = getMobileVal(paddingLeft, 0);

    const padRightDesktop = getVal(paddingRight, 0);
    const padRightTablet = getTabletVal(paddingRight, 0);
    const padRightMobile = getMobileVal(paddingRight, 0);

    // Resolve border radius
    const radiusDesktop = getVal(borderRadius, 0);
    const radiusTablet = getTabletVal(borderRadius, 0);
    const radiusMobile = getMobileVal(borderRadius, 0);

    // Resolve image widths
    const widthDesktop = getVal(imageWidth, 100);
    const widthTablet = getTabletVal(imageWidth, 100);
    const widthMobile = getMobileVal(imageWidth, 100);

    // Resolve background style
    let bgStyle: React.CSSProperties = {};
    if (backgroundType === "color") {
        bgStyle = { backgroundColor: backgroundColor || "#ffffff" };
    } else if (backgroundType === "image" && backgroundImage) {
        bgStyle = {
            backgroundImage: `url(${getProxiedUrl(backgroundImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        };
    }

    // Resolve aspect ratio value
    const cssAspectRatio = aspectRatio === "off" ? "auto" : aspectRatio.replace(":", "/");

    // Resolve alignment justify-content
    const flexAlign = align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";

    // Standard image tag
    const ImageComponent = (
        <img
            src={getProxiedUrl(imageUrl || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809")}
            alt={altText || "Image"}
            style={{
                width: "100%",
                height: cssAspectRatio === "auto" ? "auto" : "100%",
                aspectRatio: cssAspectRatio,
                objectFit: imageFit,
                borderRadius: "inherit",
                display: "block"
            }}
        />
    );

    return (
        <section className={id} style={{ ...bgStyle, width: "100%" }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${padTopDesktop}px;
                    padding-bottom: ${padBottomDesktop}px;
                    padding-left: ${padLeftDesktop}px;
                    padding-right: ${padRightDesktop}px;
                }
                .${id} .image-aligner {
                    display: flex;
                    justify-content: ${flexAlign};
                    width: 100%;
                }
                .${id} .image-wrapper {
                    width: ${widthDesktop}%;
                    border-radius: ${radiusDesktop}px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }
                @media (max-width: 1024px) {
                    .${id} {
                        padding-top: ${padTopTablet}px;
                        padding-bottom: ${padBottomTablet}px;
                        padding-left: ${padLeftTablet}px;
                        padding-right: ${padRightTablet}px;
                    }
                    .${id} .image-wrapper {
                        width: ${widthTablet}%;
                        border-radius: ${radiusTablet}px;
                    }
                }
                @media (max-width: 768px) {
                    .${id} {
                        padding-top: ${padTopMobile}px;
                        padding-bottom: ${padBottomMobile}px;
                        padding-left: ${padLeftMobile}px;
                        padding-right: ${padRightMobile}px;
                    }
                    .${id} .image-wrapper {
                        width: ${widthMobile}%;
                        border-radius: ${radiusMobile}px;
                    }
                }
            `}} />
            <div className="image-aligner">
                <div className="image-wrapper">
                    {linkUrl ? (
                        <a
                            href={linkUrl}
                            target={openInNewTab ? "_blank" : "_self"}
                            rel={openInNewTab ? "noopener noreferrer" : undefined}
                            style={{ display: "block", borderRadius: "inherit" }}
                        >
                            {ImageComponent}
                        </a>
                    ) : (
                        ImageComponent
                    )}
                </div>
            </div>
        </section>
    );
};
