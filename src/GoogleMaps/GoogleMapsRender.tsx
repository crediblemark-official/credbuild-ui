"use client";

import React, { useId } from "react";
import { getVal, getTabletVal, getMobileVal } from "../utils";
import { GoogleMapsProps } from "./types";

export const GoogleMapsRender = ({ content, styling }: GoogleMapsProps) => {
    const { address, zoom } = content;
    const { height, padding, backgroundColor, borderRadius, grayscale } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `maps-${id}`;

    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

    return (
        <section className={uniqueClass} style={{ background: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 64)}px 20px;
                    }
                    .${uniqueClass} .map-frame {
                        height: ${getVal(height, 450)}px;
                        filter: ${String(grayscale) === "true" ? "grayscale(100%) invert(90%) contrast(90%)" : "none"};
                    }
                    @media (max-width: 1024px) {
                        .${uniqueClass} {
                            padding: ${getTabletVal(padding, 48)}px 20px;
                        }
                        .${uniqueClass} .map-frame {
                            height: ${getTabletVal(height, 400)}px;
                        }
                    }
                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 32)}px 16px;
                        }
                        .${uniqueClass} .map-frame {
                            height: ${getMobileVal(height, 350)}px;
                        }
                    }
                `
            }} />
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                width: "100%",
                borderRadius: borderRadius,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}>
                <iframe
                    className="map-frame"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={mapUrl}
                    style={{ border: 0, display: "block" }}
                />
            </div>
        </section>
    );
};
