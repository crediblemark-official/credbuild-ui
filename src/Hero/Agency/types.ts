import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroAgencyProps = {
    content: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
    };
    media: {
        project1ImageUrl?: string;
        project2ImageUrl?: string;
        project3ImageUrl?: string;
    };

    typography: {
        titleFont: string;
        titleSize: ResponsiveValue;
        titleWeight: string;
        titleColor: string;
        subtitleSize: ResponsiveValue;
        subtitleColor: string;
    };

    styling: {
        backgroundColor: string;
        accentColor: string;
        btnColor: string;
        btnTextColor: string;
        btnRadius: string;
        btnOutline: boolean;
        btnPaddingVertical: string;
        btnPaddingHorizontal: string;
        projectGap: ResponsiveValue;
        projectRadius: string;
        projectShadow: boolean;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
    };
};
