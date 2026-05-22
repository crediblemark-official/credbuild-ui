import React, { useId } from "react";
import { GradientPricingCard } from "./GradientCard";
import type { PricingGradientProps } from "./types";

export const GradientPricingRender = ({ 
    content,
    typography,
    styling
}: PricingGradientProps) => {
    const { title, description, items } = content;
    const { titleFont = 'inherit', bodyFont = 'inherit' } = typography;
    const { columnsDesktop, columnsTablet, columnsMobile, mainColor } = styling;

    const id = "gradient-pricing-" + useId().replace(/:/g, "");
    const primaryColor = mainColor || '#8b5cf6';

    return (
        <section className={id} style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
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
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    color: '#111827',
                    marginBottom: '1rem',
                    fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'
                }}>
                    {title}
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#6b7280',
                    maxWidth: '700px',
                    margin: '0 auto 60px',
                    lineHeight: 1.6,
                    fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit'
                }}>
                    {description}
                </p>

                <div className="grid-container">
                    {items.map((item, i) => (
                        <GradientPricingCard 
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
