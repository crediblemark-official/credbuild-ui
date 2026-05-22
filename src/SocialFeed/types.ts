
export type SocialFeedItem = {
    platform: "youtube" | "instagram" | "tiktok";
    mode: "post" | "profile";
    url: string;
    caption: string;
    profileName: string;
    profileBio: string;
    customColor?: string;
    customGradient?: string;
};

export type SocialFeedProps = {
    content: {
        title: string;
        description: string;
        items: SocialFeedItem[];
    };
    styling: {
        backgroundColor: string;
        titleColor: string;
        cardBackground: string;
        columns: "1" | "2" | "3";
        showCaptions: "true" | "false";
    };
};
