import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroWeddingProps = {
    content: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
        secondaryButtonText?: string;
        happyClientsText?: string;
        stat1Value?: string;
        stat1Label?: string;
        stat2Value?: string;
        stat2Label?: string;
        stat3Value?: string;
        stat3Label?: string;
    };
    media: {
        imageUrl1?: string;
        imageUrl2?: string;
    };

    typography: {
        titleFont: string;
        titleSize: ResponsiveValue;
        titleWeight: string;
        subtitleSize: ResponsiveValue;
    };

    styling: {
        titleColor: string;
        subtitleColor: string;
        backgroundColor: string;
        accentColor: string;
        secondaryColor: string;
        btnPaddingVertical: string;
        btnPaddingHorizontal: string;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        imageOverlap: ResponsiveValue;
    };
};
