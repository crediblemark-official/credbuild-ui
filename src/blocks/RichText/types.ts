import { ResponsiveValue } from "../../utils";

export type RichTextProps = {
    content: {
        html: string;
    };
    styling: {
        maxWidth?: string;
        paddingTop?: ResponsiveValue;
        paddingBottom?: ResponsiveValue;
    };
};

