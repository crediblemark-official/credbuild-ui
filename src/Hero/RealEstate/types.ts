import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroRealEstateProps = {
    content: {
        title: string;
        description: string;
        searchPlaceholder?: string;
        searchButtonText?: string;
        avatarCount?: string;
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
    };

    styling: {
        backgroundColor: string;
        titleColor: string;
        descriptionColor: string;
        primaryColor: string;
        btnTextColor: string;
        secondaryColor: string;
        avatarRingColor: string;
        searchRadius: number;
        imageRadius: number;
        btnRadius: number;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        gap: ResponsiveValue;
    };
};
