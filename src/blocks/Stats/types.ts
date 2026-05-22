
export type StatsProps = {
    content: {
        items: { value: string; label: string; valueColor?: string; labelColor?: string }[];
    };
    typography: {
        valueFont?: string;
        labelFont?: string;
    };
    styling: {
        mobileLayout: 'stack' | 'scroll' | 'grid-2';
        backgroundColor: string;
        cardBgColor: string;
        cardBorderColor: string;
        valueColor: string;
        labelColor: string;
        paddingTop: string;
        paddingBottom: string;
    };
};
