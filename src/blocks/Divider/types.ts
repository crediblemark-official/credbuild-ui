import { ResponsiveValue } from "../../utils";

export type DividerProps = {
    content: {
        lineStyle?: "solid" | "dashed" | "dotted" | "double";
    };
    styling: {
        color?: string;
        height?: ResponsiveValue;
        maxWidth?: ResponsiveValue;
        alignment?: "left" | "center" | "right";
        paddingTop?: ResponsiveValue;
        paddingBottom?: ResponsiveValue;
        backgroundColor?: string;
    };
};
