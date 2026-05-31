import { ResponsiveValue } from "../../utils";

export type GalleryProps = {
    content: {
        title: string;
        description?: string;
    };
    typography: {
        titleFont?: string;
        titleColor?: string;
    };
    styling: {
        variant: "red" | "white" | "theme";
        scrollMode: "grid" | "horizontal" | "masonry";
        columnsDesktop?: number;
        columnsTablet?: number;
        columnsMobile?: number;
        columns?: ResponsiveValue;
        aspectRatio?: "portrait" | "square" | "landscape" | "video" | "original";
        imageFit?: "cover" | "contain";
        backgroundColor?: string;
        borderRadius?: ResponsiveValue;
        gap?: ResponsiveValue;
        padding?: ResponsiveValue;
    };
    initialItems?: { title: string; url: string; description: string }[];
};

