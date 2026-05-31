"use client";

import React, { useId } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProxiedUrl } from "@/lib/media/utils";
import { PortfolioProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const PortfolioRender = ({ content, initialItems = [], styling }: PortfolioProps) => {
    const { title, subtitle } = content;
    const {
        backgroundColor = "#f9fafb",
        titleColor = "#111827",
        subtitleColor = "#6b7280",
        cardBgColor = "#ffffff",
        cardTitleColor = "#111827",
        cardCategoryColor = "#2563eb",
        padding,
        columns,
    } = styling || {};

    const id = "portfolio-" + useId().replace(/:/g, "");
    const [items, setItems] = React.useState<{ title: string; category: string; imageUrl: string; link?: string }[]>(initialItems);
    const [loading, setLoading] = React.useState(initialItems.length === 0);

    React.useEffect(() => {
        fetch("/api/portfolios")
            .then(res => res.json())
            .then(resData => {
                // Generic CRUD handler returns { data: [...] }
                const actualData = resData.data || resData;
                if (Array.isArray(actualData)) {
                    setItems(actualData);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    if (loading && items.length === 0) return <div className="p-10 text-center">Loading Projects...</div>;
    if (!loading && items.length === 0) return <div className="p-10 text-center text-gray-400">No projects found. Please add them in the Dashboard!</div>;

    return (
        <section className={`${id} font-sans`} style={{ backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding: ${getVal(padding, 80)}px 20px;
                }
                .${id} .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(${getMobileVal(columns, 1)}, minmax(0, 1fr));
                    gap: 32px;
                }
                @media (min-width: 768px) {
                    .${id} {
                        padding: ${getTabletVal(padding, 60)}px 24px;
                    }
                    .${id} .portfolio-grid {
                        grid-template-columns: repeat(${getTabletVal(columns, 2)}, minmax(0, 1fr));
                    }
                }
                @media (min-width: 1024px) {
                    .${id} {
                        padding: ${getVal(padding, 80)}px 32px;
                    }
                    .${id} .portfolio-grid {
                        grid-template-columns: repeat(${getVal(columns, 3)}, minmax(0, 1fr));
                    }
                }
            `}} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span style={{ color: cardCategoryColor }} className="font-bold tracking-wider uppercase text-sm mb-2 block">Portofolio</span>
                    <h2 style={{ color: titleColor }} className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h2>
                    <p style={{ color: subtitleColor }} className="text-xl max-w-2xl mx-auto">{subtitle}</p>
                </div>

                <div className="portfolio-grid">
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={item.link || "#"}
                            style={{ backgroundColor: cardBgColor }}
                            className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            aria-label={`Lihat detail proyek ${item.title}`}
                        >
                            <div className="relative overflow-hidden aspect-[4/3]">
                                {item.imageUrl ? (
                                    <Image
                                        src={getProxiedUrl(item.imageUrl)}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">🚀</div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-white font-medium">Lihat Detail &rarr;</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span style={{ color: cardCategoryColor }} className="text-xs font-bold uppercase tracking-wide">{item.category}</span>
                                <h3 style={{ color: cardTitleColor }} className="text-xl font-bold mt-2 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

