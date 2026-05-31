import { ResponsiveValue } from "../../utils";

export type ButtonProps = {
    content: {
        text: string;
        link: string;
        pixelEvent?: string;
    };
    styling: {
        align?: "left" | "center" | "right";
        buttonColor?: string;
        textColor?: string;
        paddingX?: ResponsiveValue;
        paddingY?: ResponsiveValue;
        fontSize?: ResponsiveValue;
        borderRadius?: ResponsiveValue;
        marginTop?: ResponsiveValue;
        marginBottom?: ResponsiveValue;
    };
};
