import { ResponsiveValue } from "../../utils";

export type AccordionProps = {
    content: {
        title: string;
        items: { question: string; answer: string }[];
    };
    typography: {
        titleFont?: string;
        bodyFont?: string;
    };
    styling: {
        backgroundColor?: string;
        titleColor?: string;
        itemBgColor?: string;
        textColor?: string;
        activeColor?: string;
        padding?: ResponsiveValue;
        borderRadius?: ResponsiveValue;
    };
};
