
import { ResponsiveValue } from "@/components/credbuild/utils";

export type ProcessStepsProps = {
    content: {
        title: string;
        steps: { title: string; description: string; icon?: string }[];
    };
    typography: {
        titleSize: ResponsiveValue;
        titleColor: string;
        stepTitleSize: ResponsiveValue;
        stepDescriptionSize: ResponsiveValue;
        textColor: string;
    };
    styling: {
        backgroundColor: string;
        padding: ResponsiveValue;
        stepColor: string;
        stepNumberColor: string;
        layout: "horizontal" | "vertical";
    };
};
