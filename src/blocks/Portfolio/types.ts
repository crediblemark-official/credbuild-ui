
export type PortfolioProps = {
    content: {
        title: string;
        subtitle: string;
    };
    initialItems?: { title: string; category: string; imageUrl: string; link?: string }[];
};
