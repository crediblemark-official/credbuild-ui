import { ResponsiveValue } from "@/components/credbuild/utils";

export type Post = {
    id: string;
    title: string;
    slug: string;
    content: string;
    imageUrl?: string;
    published: boolean;
    createdAt: string;
    authorId?: string;
};

export type BlogListProps = {
    content: {
        title?: string;
        description?: string;
        limit?: number;
    };
    typography: {
        titleColor?: string;
        descriptionColor?: string;
        cardTitleColor?: string;
        cardTextColor?: string;
        cardDateColor?: string;
        linkColor?: string;
    };
    styling: {
        columns?: ResponsiveValue;
        backgroundColor?: string;
        padding?: ResponsiveValue;
        cardBackgroundColor?: string;
        cardBorderColor?: string;
    };
    initialPosts?: Post[];
};

