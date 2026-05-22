export type PricingModernItem = {
    theme: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'red';
    name: string;
    price: string;
    pricePrefix?: string;
    priceSuffix?: string;
    highlightLabel?: string;
    buttonText?: string;
    buttonUrl?: string;
    features: { feature: string }[]
};

export type PricingModernProps = {
    content: {
        title: string;
        description: string;
        items: PricingModernItem[];
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
    };
};
