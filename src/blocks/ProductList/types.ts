export type Product = {
    id: string;
    name: string;
    slug: string;
    price: string | number;
    images: string[] | null;
    stock: number;
    createdAt?: string | Date;
    terms?: {
        id: string;
        name: string;
        slug: string;
        taxonomyId: string;
    }[];
};

export type ProductListProps = {
    content: {
        title?: string;
        description?: string;
        limit?: number;
        categorySlug?: string;
        sortBy?: string;
        showRating?: boolean;
        showStock?: boolean;
        showBadges?: boolean;
        showTitleAccent?: boolean;
        actionType?: 'details' | 'none';
    };
    typography: {
        titleFont?: string;
        bodyFont?: string;
        titleColor?: string;
        descriptionColor?: string;
    };
    styling: {
        columns?: number;
        backgroundColor?: string;
        cardBorderRadius?: 'none' | 'md' | 'lg' | 'xl' | '2xl';
        cardShadow?: 'none' | 'sm' | 'md' | 'lg' | 'hover-only' | 'always-sm' | 'always-md' | 'always-lg';
        accentColor?: string;
        priceColor?: string;
        cardBackgroundColor?: string;
        cardBorderColor?: string;
        cardTitleColor?: string;
        imageAspectRatio?: 'aspect-[4/5]' | 'aspect-[2/3]' | 'aspect-[1/1]' | 'aspect-[16/9]';
        imageFit?: 'cover' | 'contain';
        showCardBorder?: boolean;
    };
    initialProducts?: Product[];
};
