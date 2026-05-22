import { ResponsiveValue } from "@/components/credbuild/utils";

export type PricingImageItem = {
    imageUrl: string;
    altText?: string;
    link?: string;
};

export type PricingImageProps = {
    content: {
        title: string;
    };
    media: {
        items: PricingImageItem[];
    };
    typography: {
        titleColor?: string;
        titleFont?: string;
    };
    styling: {
        sectionBg?: string;
        scrollMode: "grid" | "horizontal";
        columnsDesktop?: number;
        columnsTablet?: number;
        columnsMobile?: number;
        gap?: ResponsiveValue;
        cardRadius?: number;
        cardAspectRatio?: string;
        cardObjectFit?: "cover" | "contain";
        cardShadow?: "none" | "sm" | "md" | "lg";
        hoverLift?: number;
    };
};
