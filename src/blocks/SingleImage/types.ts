import { ResponsiveValue } from "../../utils";

export type SingleImageProps = {
    content: {
        imageUrl: string;
        altText?: string;
        linkUrl?: string;
        openInNewTab?: boolean;
    };
    styling: {
        align?: "left" | "center" | "right";
        imageWidth?: ResponsiveValue;
        imageFit?: "cover" | "contain";
        aspectRatio?: "off" | "1/1" | "3/2" | "4/3" | "5/4" | "16:10" | "16:9" | "9:16";
        backgroundType?: "none" | "color" | "image";
        backgroundColor?: string;
        backgroundImage?: string;
        paddingTop?: ResponsiveValue;
        paddingBottom?: ResponsiveValue;
        paddingLeft?: ResponsiveValue;
        paddingRight?: ResponsiveValue;
        borderRadius?: ResponsiveValue;
    };
};
