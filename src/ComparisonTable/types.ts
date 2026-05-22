import { ResponsiveValue } from "@/components/credbuild/utils";

export type ComparisonTableProps = {
    content: {
        title: string;
        plans: { name: string }[];
        features: { name: string; values: { value: boolean | string }[] }[];
    };
    styling: {
        backgroundColor: string;
        padding: ResponsiveValue;
        headerColor: string;
        headerTextColor: string;
        rowAlternateColor: string;
        textColor: string;
        accentColor: string;
    };
};
