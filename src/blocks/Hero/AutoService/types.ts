import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroAutoServiceProps = {
    content: {
        title: string;
        highlightText?: string;
        bulletPoints?: { text: string }[];
        ctaText: string;
        ctaLink: string;
        secondaryButtonText?: string;
    };
    media: {
        imageUrl?: string;
    };

    typography: {
        titleSize: ResponsiveValue;
        titleWeight: string;
        bulletSize: ResponsiveValue;
    };

    styling: {
        backgroundColor: string;
        primaryColor: string;
        textColor: string;
        bulletColor: string;
        secondaryBtnColor: string;
        btnRadius: number;
        imageRadius: number;
        gap: ResponsiveValue;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        btnPaddingHorizontal: string;
        btnPaddingVertical: string;
    };
};
