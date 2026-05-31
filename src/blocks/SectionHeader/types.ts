import { ResponsiveValue } from "@/components/credbuild/utils";

export type SectionHeaderProps = {
    content: {
        badge?: string;
        title: string;
        subtitle?: string;
    };
    styling: {
        alignment: "left" | "center" | "right";
        backgroundColor: string;
        padding: ResponsiveValue;
        titleColor: string;
        subtitleColor: string;
        badgeColor: string;
        badgeTextColor: string;
        maxWidth: ResponsiveValue;
        showAccent: boolean | string;
    };
    typography: {
        titleSize: ResponsiveValue;
        subtitleSize: ResponsiveValue;
    };
};

