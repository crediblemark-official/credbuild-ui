"use client";

import React, { useId } from "react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { TestimonialsProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "@/components/credbuild/utils";

const TestimonialCard = ({ item, i, isHorizontal, cardClass, cardBackgroundColor, cardBorderColor, quoteFont, quoteColor, authorColor, roleColor }: any) => (
    <div
        key={i}
        className={cardClass}
        style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            border: `1.5px solid ${cardBorderColor}`,
            cursor: 'default',
            position: 'relative',
            fontFamily: quoteFont !== 'inherit' ? `"${quoteFont}", sans-serif` : 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ...(isHorizontal && {
                flexShrink: 0,
                width: 'clamp(280px, 40vw, 360px)',
                scrollSnapAlign: 'start',
            }),
        }}
    >
        {/* Modern Absolute Quote Icon */}
        <div style={{
            position: 'absolute',
            top: '12px',
            right: '20px',
            fontSize: '3.5rem',
            color: '#dc2626',
            fontFamily: 'serif',
            lineHeight: 1,
            opacity: 0.08,
            pointerEvents: 'none',
            userSelect: 'none',
        }}>
            &ldquo;
        </div>

        <p style={{
            fontStyle: 'italic',
            marginBottom: '20px',
            color: quoteColor,
            lineHeight: '1.6',
            fontSize: '0.925rem',
            position: 'relative',
            zIndex: 1,
        }}>
            {item.quote}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1 }}>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1rem',
                flexShrink: 0,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
                {item.author?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: '700', color: authorColor, fontSize: '0.925rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                     {item.author}
                </div>
                <div style={{ fontSize: '0.775rem', color: roleColor, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                     {item.role || 'Member'}
                </div>
            </div>
        </div>
    </div>
);

export const TestimonialsRender = ({
    content,
    typography,
    styling
}: TestimonialsProps) => {
    const { title, description, items = [], limit = 6 } = content;
    const { titleFont = 'inherit', quoteFont = 'inherit' } = typography;
    const {
        scrollMode, columns, backgroundColor = '#ffffff', padding = { desktop: 80, tablet: 60, mobile: 40 },
        cardBackgroundColor = "white", cardBorderColor = "#f1f5f9",
        titleColor = "#1e293b", descriptionColor = "#475569",
        quoteColor = "#475569", authorColor = "#1e293b", roleColor = "#94a3b8"
    } = styling;

    const isHorizontal = scrollMode === "horizontal";
    const [apiItems, setApiItems] = React.useState<any[]>([]);
    const mounted = useHasMounted();
    const id = useId().replace(/:/g, '');
    const uniqueClass = `testimonials-${id}`;

    React.useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch("/api/testimonials");
                const data = await res.json();
                
                // Defensive programming: handle both generic API { data: [...] } and expected { success: true, testimonials: [...] }
                const testimonialsData = data.testimonials || data.data || [];
                if (Array.isArray(testimonialsData)) {
                    setApiItems(testimonialsData);
                }
            } catch (e) {
                console.error("Failed to fetch testimonials", e);
            }
        };
        fetchTestimonials();
    }, []);

    const finalItems = (mounted && apiItems.length > 0 ? apiItems : items).slice(0, limit);

    return (
        <section className={uniqueClass} style={{ backgroundColor: backgroundColor, overflow: 'hidden' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 80)}px 20px;
                    }
                    .${uniqueClass}-grid {
                        display: grid;
                        gap: 24px;
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
                    .${uniqueClass}-card {
                        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
                    }
                    .${uniqueClass}-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08) !important;
                        border-color: #3b82f6 !important;
                    }
                `
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    marginBottom: '1rem',
                    fontWeight: '800',
                    color: titleColor,
                    fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'
                }}>
                    {title}
                </h2>
                {description && (
                    <p style={{
                        textAlign: 'center',
                        color: descriptionColor,
                        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                    }}>
                        {description}
                    </p>
                )}

                {isHorizontal ? (
                    <div style={{
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'thin',
                        paddingBottom: '20px',
                        marginLeft: '-20px',
                        marginRight: '-20px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: 'clamp(20px, 4vw, 30px)',
                            minWidth: 'min-content',
                        }}>
                            {finalItems.map((item, i) => (
                                <TestimonialCard
                                    key={i}
                                    item={item}
                                    i={i}
                                    cardClass={`${uniqueClass}-card`}
                                    isHorizontal={isHorizontal}
                                    cardBackgroundColor={cardBackgroundColor}
                                    cardBorderColor={cardBorderColor}
                                    quoteFont={quoteFont}
                                    quoteColor={quoteColor}
                                    authorColor={authorColor}
                                    roleColor={roleColor}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={`${uniqueClass}-grid`}>
                        {finalItems.map((item, i) => (
                            <TestimonialCard
                                key={i}
                                item={item}
                                i={i}
                                cardClass={`${uniqueClass}-card`}
                                isHorizontal={isHorizontal}
                                cardBackgroundColor={cardBackgroundColor}
                                cardBorderColor={cardBorderColor}
                                quoteFont={quoteFont}
                                quoteColor={quoteColor}
                                authorColor={authorColor}
                                roleColor={roleColor}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

