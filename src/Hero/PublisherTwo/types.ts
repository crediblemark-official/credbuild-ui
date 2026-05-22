import { ResponsiveValue } from "@/components/credbuild/utils";
export type HeroPublisherTwoProps = {
    content: {
        title: string;
        description: string;
    };
    media: {
        imageUrl?: string;
    };

    typography: {
        titleFont?: string;
        titleSize: ResponsiveValue;
        titleWeight: string;
        descFont?: string;
        subtitleSize: ResponsiveValue;
    };

    styling: {
        backgroundColor: string;
        textColor: string;
        descriptionColor: string;
        waveColor: string;
        imageRadius: number;
        imageWidth?: string;
        imageAspectRatio?: string;
        imageObjectFit?: "cover" | "contain";
        imageShadow?: "none" | "sm" | "md" | "lg" | "xl";
        imageAlign?: "left" | "center" | "right";
        paddingTop: ResponsiveValue;
        paddingBottom: ResponsiveValue;
        gap: ResponsiveValue;
    };
};
