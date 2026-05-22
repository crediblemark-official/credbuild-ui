import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroSecurityProps = {
    content: {
        title: string;
        ctaText: string;
        ctaLink: string;
        secondaryButtonText?: string;
        feature1Icon?: string;
        feature1Title?: string;
        feature1Description?: string;
        feature2Icon?: string;
        feature2Title?: string;
        feature2Description?: string;
        feature3Icon?: string;
        feature3Title?: string;
        feature3Description?: string;
    };

    typography: {
        titleSize: ResponsiveValue;
        titleWeight: string;
        featureIconSize: ResponsiveValue;
    };

    styling: {
        gradientStart: string;
        gradientEnd: string;
        gradientAngle: number;
        textColor: string;
        primaryBtnColor: string;
        primaryBtnTextColor: string;
        secondaryBtnColor: string;
        cardBgColor: string;
        cardBorderColor: string;
        btnRadius: number;
        cardRadius: number;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        gap: ResponsiveValue;
        btnPaddingHorizontal: string;
        btnPaddingVertical: string;
    };
};
