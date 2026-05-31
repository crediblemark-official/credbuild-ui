
import { ResponsiveValue } from "../../utils";

export type ContactFormProps = {
    content: {
        title: string;
        description: string;
        submitText: string;
        emailTo?: string;
    };
    styling?: {
        backgroundColor?: string;
        padding?: ResponsiveValue;
        titleColor?: string;
        descriptionColor?: string;
        buttonBgColor?: string;
        buttonTextColor?: string;
        cardBorderRadius?: ResponsiveValue;
    };
};

