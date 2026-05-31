import { ResponsiveValue } from "../../utils";

export type OrderFormProps = {
    content: {
        productId?: string;
        formTitle?: string;
    };
    styling: {
        showLabels?: boolean;
        showNameField?: boolean;
        showPhoneField?: boolean;
        showEmailField?: boolean;
        showAddressField?: boolean;
        showPaymentField?: boolean;
        showCourierField?: boolean;
        showNotesField?: boolean;
        showSummaryField?: boolean;
        showDiscountField?: boolean;
        showSubmitButton?: boolean;
        submitButtonText?: string;
        mainColor?: string;
        backgroundColor?: string;
        padding?: ResponsiveValue;
        borderRadius?: ResponsiveValue;
    };
};
