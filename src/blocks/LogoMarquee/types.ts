
export type LogoMarqueeProps = {
    content: {
        title?: string;
    };
    media: {
        logos: { src: string; alt: string }[];
    };
    styling: {
        speed?: number;
        backgroundColor?: string;
        padding?: string;
        titleColor?: string;
        titleSize?: string;
        grayscale?: boolean;
    };
};
