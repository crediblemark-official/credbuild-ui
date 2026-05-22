
import { ResponsiveValue } from "@/components/credbuild/utils";

export type IconGridProps = {
    content: {
        title: string;
        items: { title: string; description: string; icon: string }[];
    };
    typography: {
        titleSize: ResponsiveValue;
        titleColor: string;
        iconSize: ResponsiveValue;
        iconColor?: string;
        itemTitleSize: ResponsiveValue;
        itemDescriptionSize: ResponsiveValue;
        itemTextColor: string;
    };
    styling: {
        columns: number;
        mobileLayout: "grid" | "scroll";
        backgroundColor: string;
        padding: ResponsiveValue;
        cardBackgroundColor: string;
        cardBorderColor: string;
    };
};
