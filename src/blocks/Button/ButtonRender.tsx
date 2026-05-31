"use client";

import React from "react";
import { ButtonProps } from "./types";

export const ButtonRender = ({
    content,
    styling
}: ButtonProps) => {
    const { text = "Click Me", link = "#", pixelEvent = "" } = content;
    const {
        align = "center",
        buttonColor = "#0ea5e9",
        textColor = "#ffffff",
        paddingX = 24,
        paddingY = 12,
        fontSize = 16,
        borderRadius = 6,
        marginTop = 16,
        marginBottom = 16,
    } = styling;

    const alignmentStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
        width: "100%",
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
    };

    return (
        <div style={alignmentStyle}>
            <a
                href={link}
                data-pixel-event={pixelEvent || undefined}
                style={{
                    display: "inline-block",
                    backgroundColor: buttonColor,
                    color: textColor,
                    padding: `${paddingY}px ${paddingX}px`,
                    fontSize: `${fontSize}px`,
                    borderRadius: `${borderRadius}px`,
                    textDecoration: "none",
                    fontWeight: "600",
                    textAlign: "center",
                    cursor: "pointer",
                    border: "none",
                    transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
                {text}
            </a>
        </div>
    );
};
