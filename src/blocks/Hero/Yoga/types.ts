import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroYogaProps = {
    content: {
        tag?: string;
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
        secondaryButtonText?: string;
        stat1Value?: string;
        stat1Label?: string;
        stat2Value?: string;
        stat2Label?: string;
        stat3Value?: string;
        stat3Label?: string;
    };
    media: {
        imageUrl?: string;
    };

    typography: {
        titleSize: ResponsiveValue;
        titleWeight: string;
        subtitleSize: ResponsiveValue;
    };

    styling: {
        subtitleColor: string;
        backgroundColor: string;
        primaryColor: string;
        btnTextColor: string;
        secondaryBtnColor: string;
        iconBackgroundColor: string;
        imageBackgroundColor: string;
        btnRadius: number;
        imageRadius: number;
        gap: ResponsiveValue;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        btnPaddingHorizontal: string;
        btnPaddingVertical: string;
    };
};
