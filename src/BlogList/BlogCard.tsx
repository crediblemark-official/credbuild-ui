import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Post } from "./types";

interface BlogCardProps {
    post: Post;
    cardBackgroundColor: string;
    cardBorderColor: string;
    cardTitleColor: string;
    cardTextColor: string;
    cardDateColor: string;
    linkColor: string;
}

export const BlogCard = ({
    post,
    cardBackgroundColor,
    cardBorderColor,
    cardTitleColor,
    cardTextColor,
    cardDateColor,
    linkColor,
}: BlogCardProps) => {
    return (
        <article
            className="rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            style={{
                backgroundColor: cardBackgroundColor,
                border: `1px solid ${cardBorderColor}`,
            }}
        >
            <div className="h-48 bg-gray-200 w-full relative group overflow-hidden">
                {post.imageUrl ? (
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                        <span className="text-4xl text-gray-200">📷</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-blue-600 uppercase tracking-wide">
                    Article
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs mb-3 block" style={{ color: cardDateColor }} suppressHydrationWarning>
                    {new Date(post.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: cardTitleColor }}>
                    {post.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed flex-1" style={{ color: cardTextColor }}>
                    {(() => {
                        try {
                            const rawContent = post.content || '';
                            const textContent = (typeof rawContent === 'string' && (rawContent.startsWith('"') || rawContent.startsWith('{') || rawContent.startsWith('[')))
                                ? JSON.parse(rawContent)
                                : rawContent;

                            if (typeof textContent === 'string') {
                                return textContent.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...';
                            }
                            return "Read more...";
                        } catch {
                            return "Read more...";
                        }
                    })()}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-semibold text-sm hover:translate-x-1 transition-transform"
                    style={{ color: linkColor }}
                >
                    Read Full Article <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>
        </article>
    );
};
