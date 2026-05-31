import React, { useId } from "react";
import type { RichTextProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const RichTextRender = ({ content, styling }: RichTextProps) => {
    const { html } = content;
    const { maxWidth, paddingTop, paddingBottom } = styling;
    
    const id = "rich-text-" + useId().replace(/:/g, "");

    const padTopDesktop = getVal(paddingTop, 64);
    const padTopTablet = getTabletVal(paddingTop, 48);
    const padTopMobile = getMobileVal(paddingTop, 32);

    const padBottomDesktop = getVal(paddingBottom, 64);
    const padBottomTablet = getTabletVal(paddingBottom, 48);
    const padBottomMobile = getMobileVal(paddingBottom, 32);

    return (
        <div className={`w-full ${id}`} style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${padTopDesktop}px;
                    padding-bottom: ${padBottomDesktop}px;
                }
                @media (max-width: 1024px) {
                    .${id} {
                        padding-top: ${padTopTablet}px;
                        padding-bottom: ${padBottomTablet}px;
                    }
                }
                @media (max-width: 768px) {
                    .${id} {
                        padding-top: ${padTopMobile}px;
                        padding-bottom: ${padBottomMobile}px;
                    }
                }
            `}} />
            <div
                className={`mx-auto px-6 prose dark:prose-invert ${maxWidth} prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary`}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};
