import { ResponsiveValue } from "@/components/credbuild/utils";

export type PricingBoxItem = {
    name: string;
    price: string;
    pricePrefix?: string;
    priceSuffix?: string;
    highlightLabel?: string;
    buttonText?: string;
    buttonUrl?: string;
    features: { feature: string }[]
};

export type PricingBoxProps = {
    content: {
        title: string;
        description: string;
        items: PricingBoxItem[];
    };
    typography: {
        titleFont?: string;
        bodyFont?: string;
    };
    styling: {
        mainColor?: string;
        columnsDesktop?: number;
        columnsTablet?: number;
        columnsMobile?: number;
        columns?: ResponsiveValue;
        padding?: ResponsiveValue;
        backgroundColor?: string;
    };
};

