
import { ResponsiveValue } from "@/components/credbuild/utils";

export type CustomEmbedProps = {
    content: {
        html: string;
        script?: string;
        renderMode?: "sandboxed" | "direct" | "iframe-open";
    };
    styling: {
        backgroundColor: string;
        padding: ResponsiveValue;
        maxWidth: ResponsiveValue;
        alignment: "left" | "center" | "right";
    };
};
