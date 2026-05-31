import { ResponsiveValue } from "@/components/credbuild/utils";

export type ButtonProps = {
    content: {
        text: string;
        link: string;
        pixelEvent?: string;
    };
    styling: {
        align?: "left" | "center" | "right";
        buttonColor?: string;
        textColor?: string;
        paddingX?: number;
        paddingY?: number;
        fontSize?: number;
        borderRadius?: number;
        marginTop?: number;
        marginBottom?: number;
    };
};
