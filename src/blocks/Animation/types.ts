import { ResponsiveValue } from "../../utils";

export type AnimationProps = {
    content: {
        animationType?: "scroll-chevrons" | "scroll-chevron-single" | "scroll-arrow" | "scroll-triple" | "custom-icon";
        customIconName?: string;
        customIconAnimation?: "bounce" | "pulse" | "spin" | "shake" | "float" | "none";
    };
    styling: {
        color?: string;
        size?: ResponsiveValue;
        speed?: "slow" | "normal" | "fast";
        alignment?: "left" | "center" | "right";
        paddingTop?: ResponsiveValue;
        paddingBottom?: ResponsiveValue;
        backgroundColor?: string;
    };
};
