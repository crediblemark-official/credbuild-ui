import { ResponsiveValue } from "@/components/credbuild/utils";
import * as LucideIcons from "lucide-react";

export type FeatureItemProps = {
    content: {
        items: {
            icon: keyof typeof LucideIcons;
            title: string;
            description: string;
            badge?: string;
            buttonText?: string;
            buttonLink?: string;
        }[];
    };
    styling: {
        // Layout & Grid
        layout: "top" | "left" | "right";
        columns: ResponsiveValue;
        gap: ResponsiveValue;
        scrollBehavior: "none" | "horizontal";
        itemWidth?: ResponsiveValue;
        containerMaxWidth: string;
        sectionPadding: ResponsiveValue;
        sectionBg?: string;

        // Card Style
        bgColor: string;
        borderColor: string;
        borderWidth: ResponsiveValue;
        borderRadius: ResponsiveValue;
        shadow: "none" | "sm" | "md" | "lg";
        padding: ResponsiveValue;
        paddingTop?: ResponsiveValue;
        paddingBottom?: ResponsiveValue;
        paddingLeft?: ResponsiveValue;
        paddingRight?: ResponsiveValue;
        maxWidth: string;
        hoverEffect: "none" | "lift" | "glow" | "scale";

        // Icon Style
        iconSize: ResponsiveValue;
        iconColor: string;
        iconBg: string;
        iconShape: "circle" | "square" | "none";

        // Typography & Animation
        alignment: "left" | "center" | "right";
        titleColor: string;
        descColor: string;
        badgeColor: string;
        badgeBg: string;
        animation: "none" | "fadeIn" | "slideUp" | "zoomIn";
    };
};
