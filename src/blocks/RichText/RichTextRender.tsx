"use client";

import React from "react";
import type { RichTextProps } from "./types";

export const RichTextRender = ({ content, styling }: RichTextProps) => {
    const { html } = content;
    const { maxWidth, paddingTop, paddingBottom } = styling;
    return (
        <div
            className="w-full"
            style={{
                paddingTop,
                paddingBottom,
                background: "var(--background)",
                color: "var(--foreground)"
            }}
        >
            <div
                className={`mx-auto px-6 prose dark:prose-invert ${maxWidth} prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary`}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};
