
import { ResponsiveValue } from "@/components/credbuild/utils";

export type TeamProps = {
    content: {
        title: string;
        subtitle: string;
        members: {
            name: string;
            role: string;
            image?: string;
            bio?: string;
            socials?: { platform: string; url: string }[];
        }[];
    };
    typography: {
        titleSize: ResponsiveValue;
        titleColor: string;
        memberNameSize: ResponsiveValue;
        memberRoleSize: ResponsiveValue;
        textColor: string;
    };
    styling: {
        columns: number;
        backgroundColor: string;
        padding: ResponsiveValue;
        cardBackgroundColor: string;
        cardBorderColor: string;
        imageRadius: number;
    };
};
