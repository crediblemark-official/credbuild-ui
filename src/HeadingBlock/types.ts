import { ResponsiveValue } from "@/components/credbuild/utils";

export type HeadingBlockProps = {
    content: {
        title: string;
        level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    };
    styling: {
        font: string;
        fontWeight: string;
        textAlign: "left" | "center" | "right" | "justify";
        textColor: string;
        backgroundColor: string;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        paddingLeft: ResponsiveValue;
        paddingRight: ResponsiveValue;
        marginTop: ResponsiveValue;
        marginBottom: ResponsiveValue;
        lineHeight: number;
        letterSpacing: number;
        textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        maxWidth: number;
        animation: "none" | "fadeIn" | "slideUp" | "zoomIn" | "slideRight";
    };
    typography: {
        fontSize: ResponsiveValue;
    };
};
