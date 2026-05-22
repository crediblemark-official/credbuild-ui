import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroPublisherProps = {
    content: {
        title: string;
        description: string;
        date: string;
        author: string;
    };
    media: {
        imageUrl: string;
    };

    typography: {
        titleFont: string;
        titleSize: ResponsiveValue;
        titleWeight: string;
        subtitleFont: string;
        subtitleSize: ResponsiveValue;
    };

    styling: {
        backgroundColor: string;
        textColor: string;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
    };
};
