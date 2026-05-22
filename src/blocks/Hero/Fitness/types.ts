import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroFitnessProps = {
    content: {
        title: string;
        subtitle: string;
        ctaText: string;
    };
    media: {
        imageUrl1: string;
        imageUrl2: string;
        imageUrl3: string;
        imageUrl4: string;
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
        btnPrimaryColor: string;
        btnPrimaryTextColor: string;
        btnSecondaryColor: string;
        btnSecondaryTextColor: string;
        btnRadius: string;
        btnPaddingVertical: string;
        btnPaddingHorizontal: string;
        backgroundColor: string;
        accentColor1: string;
        accentColor2: string;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        gap: ResponsiveValue;
    };
};
