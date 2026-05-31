import { ResponsiveValue } from "@/components/credbuild/utils";

export type PricingGradientItem = {
    name: string;
    price: string;
    pricePrefix?: string;
    priceSuffix?: string;
    highlightLabel?: string;
    buttonText?: string;
    buttonUrl?: string;
    features: { feature: string }[]
};

export type PricingGradientProps = {
    content: {
        title: string;
        description: string;
        items: PricingGradientItem[];
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
    };
};

