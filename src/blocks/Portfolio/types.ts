
import { ResponsiveValue } from "../../utils";

export type PortfolioProps = {
    content: {
        title: string;
        subtitle: string;
    };
    initialItems?: { title: string; category: string; imageUrl: string; link?: string }[];
    styling?: {
        backgroundColor?: string;
        titleColor?: string;
        subtitleColor?: string;
        cardBgColor?: string;
        cardTitleColor?: string;
        cardCategoryColor?: string;
        padding?: ResponsiveValue;
        columns?: ResponsiveValue;
    };
};
