
import { ResponsiveValue } from "@/components/credbuild/utils";

export type GoogleMapsProps = {
    content: {
        address: string;
        zoom: number;
    };
    styling: {
        height: ResponsiveValue;
        padding: ResponsiveValue;
        backgroundColor: string;
        borderRadius: number;
        grayscale: boolean | string;
    };
};
