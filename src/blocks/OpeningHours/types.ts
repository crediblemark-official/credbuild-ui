
import { ResponsiveValue } from "@/components/credbuild/utils";

export type OpeningHoursProps = {
    content: {
        title: string;
        hours: { day: string; time: string; isClosed?: boolean | string }[];
    };
    styling: {
        backgroundColor: string;
        padding: ResponsiveValue;
        cardBackgroundColor: string;
        titleColor: string;
        textColor: string;
        highlightColor: string;
        borderRadius: number;
    };
};
