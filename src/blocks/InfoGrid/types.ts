import { ResponsiveValue } from "@/components/credbuild/utils";
import * as LucideIcons from "lucide-react";

export type InfoGridProps = {
    content: {
        title: string;
        items: {
            icon: keyof typeof LucideIcons;
            label: string;
            value: string;
        }[];
    };
    styling: {
        // Section & Container
        sectionBg: string;
        sectionPadding: ResponsiveValue;
        containerMaxWidth: string;
        containerBg: string;
        containerBorderColor: string;
        containerBorderWidth: ResponsiveValue;
        containerRadius: ResponsiveValue;
        containerPadding: ResponsiveValue;
        
        // Grid
        columns: ResponsiveValue;
        gap: ResponsiveValue;
        
        // Card
        cardBg: string;
        cardBorderColor: string;
        cardBorderWidth: ResponsiveValue;
        cardRadius: ResponsiveValue;
        cardPadding: ResponsiveValue;
        
        // Icon
        iconColor: string;
        iconBg: string;
        iconSize: ResponsiveValue;
        iconRadius: ResponsiveValue;
        
        // Typography
        titleColor: string;
        labelColor: string;
        valueColor: string;
        alignment: "left" | "center";
    };
};
