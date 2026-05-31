import { ResponsiveValue } from "@/components/credbuild/utils";

export type PricingItem = {
    name: string;
    subtitle?: string;
    price: string;
    pricePrefix?: string;
    priceSuffix?: string;
    highlightLabel?: string;
    buttonText?: string;
    buttonUrl?: string;
    buttonDesc?: string;
    features: { feature: string; available?: boolean }[]
};

export type PricingSimpleProps = {
    content: {
        title: string;
        items: PricingItem[];
    };
    typography: {
        titleFont?: string;
        bodyFont?: string;
        titleColor?: string;
        textColor?: string;
        cardFontSize?: ResponsiveValue;
    };
    styling: {
        mainColor?: string;
        sectionBg?: string;
        cardBg?: string;
        scrollMode: "grid" | "horizontal";
        columnsDesktop?: number;
        columnsTablet?: number;
        columnsMobile?: number;
        columns?: ResponsiveValue;
        gap?: ResponsiveValue;
    };
};

