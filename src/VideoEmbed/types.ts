
import { ResponsiveValue } from "@/components/credbuild/utils";

export type VideoEmbedProps = {
    content: {
        url: string;
        title: string;
        aspectRatio: "16:9" | "4:3" | "1:1";
    };
    styling: {
        maxWidth: ResponsiveValue;
        padding: ResponsiveValue;
        backgroundColor: string;
        borderRadius: number;
        boxShadow: boolean | string;
    };
};
