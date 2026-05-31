import { ResponsiveValue } from "../../utils";

export type ListItem = {
    text: string;
};

export type ListBlockProps = {
    content: {
        title?: string;
        items?: ListItem[];
        iconName?: string;
    };
    styling: {
        titleColor?: string;
        textColor?: string;
        iconColor?: string;
        iconSize?: ResponsiveValue;
        backgroundColor?: string;
        padding?: ResponsiveValue;
        borderRadius?: ResponsiveValue;
        fontSize?: ResponsiveValue;
        alignment?: "left" | "center";
        maxWidth?: ResponsiveValue;
    };
};
