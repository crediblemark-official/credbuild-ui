
import { ResponsiveValue } from "@/components/credbuild/utils";

export type AboutCompanyProps = {
    content: {
        content: string;
    };
    media: {
        imageUrl: string;
    };
    styling: {
        backgroundColor?: string;
        padding?: ResponsiveValue;
        textColor?: string;
        gap?: ResponsiveValue;
    };
    typography: {
        fontSize?: ResponsiveValue;
    };
};
