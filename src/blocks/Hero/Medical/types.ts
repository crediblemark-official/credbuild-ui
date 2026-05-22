import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroMedicalProps = {
    content: {
        title: string;
        description: string;
        ctaText: string;
        ctaLink: string;
        secondaryButtonText?: string;
        secondaryButtonLink?: string;
        badge1Text?: string;
        badge2Text?: string;
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
        blobColor: string;
        badgeBgColor: string;
        badgeTextColor: string;
        btnRadius: number;
        imageRadius: number;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        gap: ResponsiveValue;
        btnPaddingHorizontal: string;
        btnPaddingVertical: string;
    };
};
