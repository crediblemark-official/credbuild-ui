import { ResponsiveValue } from "@/components/credbuild/utils";

export type FlexBlockProps = {
    content: {
        title: string;
        description: string;
    };
    media: {
        image?: string;
        backgroundImage?: string;
    };
    typography: {
        titleFontFamily: string;
        titleSize: ResponsiveValue;
        titleWeight: string;
        titleColor: string;
        descFontFamily: string;
        descSize: ResponsiveValue;
        descColor: string;
    };
    styling: {
        alignContent: "left" | "center" | "right";
        width: ResponsiveValue;
        minHeight: ResponsiveValue;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        paddingLeft: ResponsiveValue;
        paddingRight: ResponsiveValue;
        marginTop: ResponsiveValue;
        marginBottom: ResponsiveValue;
        backgroundColor: string;
        borderRadius: string;
        borderWidth: string;
        borderColor: string;
    };
};
