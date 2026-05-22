
import { ResponsiveValue } from "@/components/credbuild/utils";

export type TestimonialsProps = {
    content: {
        title: string;
        description?: string;
        items?: { quote: string; author: string; role: string }[];
        limit?: number;
    };
    typography: {
        titleFont?: string;
        quoteFont?: string;
    };
    styling: {
        scrollMode: "grid" | "horizontal";
        columns?: number;
        backgroundColor?: string;
        padding?: ResponsiveValue;
        cardBackgroundColor?: string;
        cardBorderColor?: string;
        titleColor?: string;
        descriptionColor?: string;
        quoteColor?: string;
        authorColor?: string;
        roleColor?: string;
    };
};
