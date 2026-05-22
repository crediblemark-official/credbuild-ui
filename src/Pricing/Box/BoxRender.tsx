import React, { useId } from "react";
import { BoxPricingCard } from "./BoxCard";
import type { PricingBoxProps } from "./types";

export const BoxPricingRender = ({ 
    content,
    typography,
    styling
}: PricingBoxProps) => {
    const { title, description, items } = content;
    const { titleFont = 'inherit', bodyFont = 'inherit' } = typography;
    const { columnsDesktop, columnsTablet, columnsMobile, mainColor } = styling;

    const id = "box-pricing-" + useId().replace(/:/g, "");
    const primaryColor = mainColor || '#2563eb';

    return (
        <section className={id} style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} .grid-container {
                    display: grid;
                    grid-template-columns: repeat(${columnsDesktop || 3}, 1fr);
                    gap: 30px;
                }
                @media (max-width: 1024px) {
                    .${id} .grid-container {
                        grid-template-columns: repeat(${columnsTablet || 2}, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .${id} .grid-container {
                        grid-template-columns: repeat(${columnsMobile || 1}, 1fr);
                    }
                }
            `}} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    fontWeight: '800',
                    color: '#111827',
                    marginBottom: '1rem',
                    fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'
                }}>
                    {title}
                </h2>
                <p style={{
                    fontSize: '1.125rem',
                    color: '#6b7280',
                    maxWidth: '600px',
                    margin: '0 auto 60px',
                    fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit'
                }}>
                    {description}
                </p>

                <div className="grid-container">
                    {items.map((item, i) => (
                        <BoxPricingCard 
                            key={i} 
                            item={item} 
                            primaryColor={primaryColor} 
                            bodyFont={bodyFont} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
