import { ResponsiveValue } from "@/components/credbuild/utils";

export type ContainerProps = {
    content: {
        contentWidth: "boxed" | "full";
        width: string;
    };
    media: {
        backgroundImage?: string;
    };
    styling: {
        containerLayout: "flex" | "grid";
        minHeight: string;
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
        flexWrap?: "nowrap" | "wrap";
        gridColumns?: string;
        gridTemplate?: string;
        gridRows?: string;
        gridAutoFlow?: "row" | "column" | "row dense" | "column dense";
        columnGap?: string;
        rowGap?: string;
        justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
        justifyItems?: "start" | "end" | "center" | "stretch";
        mobileBehavior?: "wrap" | "scroll";
        backgroundColor?: string;
        backgroundGradient?: string;
        backgroundSize?: "cover" | "contain" | "auto";
        backgroundPosition?: "center" | "top" | "bottom" | "left" | "right";
        backgroundRepeat?: "no-repeat" | "repeat";
        backgroundAttachment?: "scroll" | "fixed";
        backdropBlur?: string;
        overlayColor?: string;
        borderStyle?: "solid" | "dashed" | "dotted" | "double" | "none";
        borderWidth?: string;
        borderColor?: string;
        borderRadius?: string;
        boxShadow?: string;
        textColor?: string;
        textAlign?: "left" | "center" | "right" | "justify";
        marginTop?: ResponsiveValue;
        marginRight?: ResponsiveValue;
        marginBottom?: ResponsiveValue;
        marginLeft?: ResponsiveValue;
        paddingTop?: ResponsiveValue;
        paddingRight?: ResponsiveValue;
        paddingBottom?: ResponsiveValue;
        paddingLeft?: ResponsiveValue;
        scrollBehavior?: "none" | "horizontal";
        itemWidth?: ResponsiveValue;
        zIndex?: number;
        cssId?: string;
        cssClass?: string;
        overflow?: "visible" | "hidden" | "scroll" | "auto";
        position?: "relative" | "absolute" | "sticky" | "fixed";
        top?: string;
        animation?: "none" | "fadeIn" | "slideUp" | "zoomIn" | "slideRight";
    };
};
