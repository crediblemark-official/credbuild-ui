import React, { useId } from "react";
import { ModernPricingCard } from "./ModernCard";
import type { PricingModernProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../../utils";

export const ModernPricingRender = ({ 
    content,
    typography,
    styling
}: PricingModernProps) => {
    const { title, description, items } = content;
    const { titleFont = 'inherit', bodyFont = 'inherit' } = typography;
    const { columnsDesktop, columnsTablet, columnsMobile, columns, mainColor, padding, backgroundColor } = styling;

    const id = "modern-pricing-" + useId().replace(/:/g, "");

    const colDesktop = getVal(columns, columnsDesktop || 3);
    const colTablet = getTabletVal(columns, columnsTablet || 2);
    const colMobile = getMobileVal(columns, columnsMobile || 1);

    return (
        <section className={id} style={{ backgroundColor: backgroundColor || '#f9fafb' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding: ${getVal(padding, 80)}px 20px;
                }
                .${id} .grid-container {
                    display: grid;
                    grid-template-columns: repeat(${colDesktop}, 1fr);
                    gap: 30px;
                }
                @media (max-width: 1024px) {
                    .${id} {
                        padding: ${getTabletVal(padding, 60)}px 20px;
                    }
                    .${id} .grid-container {
                        grid-template-columns: repeat(${colTablet}, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .${id} {
                        padding: ${getMobileVal(padding, 40)}px 20px;
                    }
                    .${id} .grid-container {
                        grid-template-columns: repeat(${colMobile}, 1fr);
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
                        <ModernPricingCard 
                            key={i} 
                            item={item} 
                            mainColor={mainColor} 
                            bodyFont={bodyFont} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
