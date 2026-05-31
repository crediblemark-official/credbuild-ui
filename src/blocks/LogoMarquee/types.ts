
import { ResponsiveValue } from "../../utils";

export type LogoMarqueeProps = {
    content: {
        title?: string;
    };
    media: {
        logos: { src: string; alt: string }[];
    };
    styling: {
        speed?: number;
        backgroundColor?: string;
        padding?: ResponsiveValue;
        titleColor?: string;
        titleSize?: ResponsiveValue;
        grayscale?: boolean;
    };
};

