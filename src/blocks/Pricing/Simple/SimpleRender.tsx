import React, { useId } from "react";
import { SimplePricingCard } from "./SimpleCard";
import type { PricingSimpleProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../../utils";

export const SimplePricingRender = ({ 
    content,
    typography,
    styling
}: PricingSimpleProps) => {
    const { title, items } = content;
    const { titleFont = 'inherit', bodyFont = 'inherit', titleColor, textColor, cardFontSize } = typography;
    const { mainColor, gap, sectionBg, cardBg, scrollMode, columnsDesktop, columnsTablet, columnsMobile, columns } = styling;

    const id = "simple-pricing-" + useId().replace(/:/g, "");
    const isHorizontal = scrollMode === "horizontal";
    const primaryColor = mainColor || '#dc2626';
    const defaultTextColor = '#475569';
    const activeTextColor = textColor || defaultTextColor;

    const colDesktop = getVal(columns, columnsDesktop || 3);
    const colTablet = getTabletVal(columns, columnsTablet || 2);
    const colMobile = getMobileVal(columns, columnsMobile || 1);

    return (
        <section className={id} style={{ padding: 'clamp(50px, 8vw, 80px) 20px', backgroundColor: sectionBg || '#f8fafc', overflow: 'hidden' }} >
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    --gap-desktop: ${gap?.desktop || 28}px;
                    --gap-tablet: ${gap?.tablet || 24}px;
                    --gap-mobile: ${gap?.mobile || 16}px;
                    
                    --font-desktop: ${cardFontSize?.desktop || 16}px;
                    --font-tablet: ${cardFontSize?.tablet || 16}px;
                    --font-mobile: ${cardFontSize?.mobile || 16}px;
 
                    --gap: var(--gap-desktop);
                    --card-font-size: var(--font-desktop);
                }
                .${id} .grid-container {
                    display: grid;
                    grid-template-columns: repeat(${colDesktop}, 1fr);
                    gap: var(--gap);
                }
                @media (max-width: 1024px) {
                    .${id} { 
                        --gap: var(--gap-tablet);
                        --card-font-size: var(--font-tablet);
                    }
                    .${id} .grid-container {
                        grid-template-columns: repeat(${colTablet}, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .${id} { 
                        --gap: var(--gap-mobile);
                        --card-font-size: var(--font-mobile);
                    }
                    .${id} .grid-container {
                        grid-template-columns: repeat(${colMobile}, 1fr);
                    }
                }
            `}} />


            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    marginBottom: '1rem',
                    fontWeight: '800',
                    color: titleColor || '#1e293b',
                    fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'
                }}>
                    {title}
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: activeTextColor,
                    marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                }}>
                    Pilih paket sesuai kebutuhan
                </p>

                {isHorizontal ? (
                    <div style={{
                        overflowX: 'auto',
                        overflowY: 'visible',
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
                            gap: 'var(--gap)',
                            minWidth: 'min-content',
                            paddingTop: '20px',
                        }}>
                            {items.map((item, i) => (
                                <SimplePricingCard 
                                    key={i} 
                                    item={item} 
                                    primaryColor={primaryColor} 
                                    activeTextColor={activeTextColor} 
                                    bodyFont={bodyFont} 
                                    isHorizontal={isHorizontal} 
                                    cardBg={cardBg} 
                                    textColor={textColor} 
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid-container">
                        {items.map((item, i) => (
                            <SimplePricingCard 
                                key={i} 
                                item={item} 
                                primaryColor={primaryColor} 
                                activeTextColor={activeTextColor} 
                                bodyFont={bodyFont} 
                                isHorizontal={isHorizontal} 
                                cardBg={cardBg} 
                                textColor={textColor} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </section >
    );
};
