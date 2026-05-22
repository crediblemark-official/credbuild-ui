
import { ResponsiveValue } from "@/components/credbuild/utils";

export type CTAProps = {
    content: {
        title: string;
        subtitle: string;
        buttonText: string;
        buttonLink: string;
    };
    typography: {
        titleSize?: ResponsiveValue;
        descriptionSize?: ResponsiveValue;
    };
    styling: {
        backgroundColor?: string;
        padding?: ResponsiveValue;
        titleColor?: string;
        descriptionColor?: string;
        buttonColor?: string;
        buttonTextColor?: string;
    };
};
