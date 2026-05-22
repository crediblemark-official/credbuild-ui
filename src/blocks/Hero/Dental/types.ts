import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroDentalProps = {
    content: {
        title: string;
        titleHighlight: string;
        subtitle: string;
        ctaText1: string;
        ctaLink1: string;
        ctaText2: string;
        ctaLink2: string;
        service1Title: string;
        service1Desc: string;
        service2Title: string;
        service2Desc: string;
        service3Title: string;
        service3Desc: string;
    };

    typography: {
        titleFont: string;
        titleSize: ResponsiveValue;
        titleWeight: string;
        subtitleSize: ResponsiveValue;
    };

    styling: {
        titleColor: string;
        highlightColor: string;
        subtitleColor: string;
        btnPrimaryColor: string;
        btnPrimaryTextColor: string;
        btnSecondaryColor: string;
        btnSecondaryTextColor: string;
        btnRadius: string;
        btnPaddingVertical: string;
        btnPaddingHorizontal: string;
        backgroundColor: string;
        accentColor: string;
        serviceCardBg: string;
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
    };
};
