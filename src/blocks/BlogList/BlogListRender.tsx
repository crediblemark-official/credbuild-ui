import React, { useEffect, useState, useId } from "react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { BlogCard } from "./BlogCard";
import type { BlogListProps, Post } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const BlogListRender = ({
    content,
    typography,
    styling,
    initialPosts
}: BlogListProps) => {
    const { title, description, limit = 3 } = content;
    const { titleColor = "#111827", descriptionColor = "#4b5563", cardTitleColor = "#111827", cardTextColor = "#4b5563", cardDateColor = "#9ca3af", linkColor = "#2563eb" } = typography;
    const { columns, backgroundColor = "#ffffff", padding = { desktop: 80, tablet: 60, mobile: 40 }, cardBackgroundColor = "#ffffff", cardBorderColor = "#f3f4f6" } = styling;

    const [posts, setPosts] = useState<Post[]>(initialPosts || []);
    const [loading, setLoading] = useState(!initialPosts);
    const mounted = useHasMounted();
    const id = useId().replace(/:/g, '');
    const uniqueClass = `blog-list-${id}`;

    useEffect(() => {
        // Jika data sudah di-fetch di server (SSR), lewati client-side fetch awal
        if (initialPosts && initialPosts.length > 0) {
            return;
        }

        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/posts");
                if (res.ok) {
                    const data = await res.json();
                    setPosts(data.posts || []);
                }
            } catch (e) {
                console.error("Failed to fetch posts", e);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [initialPosts]);

    // Jika komponen belum ter-mount di browser dan tidak ada data awal dari SSR, tampilkan skeleton loading
    if (!mounted && !initialPosts) {
        return <div className="p-8 text-center text-gray-400">Loading Blog...</div>;
    }

    const displayedPosts = posts.filter(p => p.published).slice(0, limit);

    return (
        <section className={uniqueClass} style={{ backgroundColor: backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 80)}px 20px;
                    }
                    .${uniqueClass}-grid {
                        display: grid;
                        gap: 32px;
                        grid-template-columns: repeat(${getMobileVal(columns, 1)}, minmax(0, 1fr));
                    }
                    @media (min-width: 768px) {
                        .${uniqueClass} {
                            padding: ${getTabletVal(padding, 60)}px 20px;
                        }
                        .${uniqueClass}-grid {
                            grid-template-columns: repeat(${getTabletVal(columns, 2)}, minmax(0, 1fr));
                        }
                    }
                    @media (min-width: 1024px) {
                        .${uniqueClass} {
                            padding: ${getVal(padding, 80)}px 20px;
                        }
                        .${uniqueClass}-grid {
                            grid-template-columns: repeat(${getVal(columns, 3)}, minmax(0, 1fr));
                        }
                    }
                `
            }} />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    {title && <h2 className="text-4xl font-bold mb-4" style={{ color: titleColor }}>{title}</h2>}
                    {description && <p className="text-lg max-w-2xl mx-auto" style={{ color: descriptionColor }}>{description}</p>}
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : displayedPosts.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">No published posts found.</p>
                    </div>
                ) : (
                    <div className={`${uniqueClass}-grid`}>
                        {displayedPosts.map((post) => (
                            <BlogCard 
                                key={post.id} 
                                post={post} 
                                cardBackgroundColor={cardBackgroundColor} 
                                cardBorderColor={cardBorderColor} 
                                cardTitleColor={cardTitleColor} 
                                cardTextColor={cardTextColor} 
                                cardDateColor={cardDateColor} 
                                linkColor={linkColor} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};


