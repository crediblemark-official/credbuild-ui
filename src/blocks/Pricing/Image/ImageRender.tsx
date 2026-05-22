import React, { useId } from "react";
import { ImagePricingCard } from "./ImageCard";
import type { PricingImageProps } from "./types";

export const ImagePricingRender = (props: PricingImageProps) => {
    const { 
        content,
        media,
        typography,
        styling
    } = props;
    
    const { title } = content;
    const { items } = media;
    const { titleColor, titleFont = 'inherit' } = typography;
    const { 
        sectionBg, 
        scrollMode, 
        columnsDesktop, 
        columnsTablet, 
        columnsMobile, 
        gap,
        cardRadius,
        cardAspectRatio,
        cardObjectFit,
        cardShadow,
        hoverLift
    } = styling;

    const id = "image-pricing-" + useId().replace(/:/g, "");
    const isHorizontal = scrollMode === "horizontal";

    const commonCardProps = {
        isHorizontal,
        cardRadius,
        cardAspectRatio,
        cardObjectFit,
        cardShadow,
        hoverLift
    };

    return (
        <section className={id} style={{ padding: 'clamp(50px, 8vw, 80px) 20px', backgroundColor: sectionBg || '#f8fafc', overflow: 'hidden' }} >
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    --gap-desktop: ${gap?.desktop || 28}px;
                    --gap-tablet: ${gap?.tablet || 24}px;
                    --gap-mobile: ${gap?.mobile || 16}px;
                    --gap: var(--gap-desktop);
                }
                .${id} .grid-container {
                    display: grid;
                    grid-template-columns: repeat(${columnsDesktop || 3}, 1fr);
                    gap: var(--gap);
                }
                @media (max-width: 1024px) {
                    .${id} { --gap: var(--gap-tablet); }
                    .${id} .grid-container {
                        grid-template-columns: repeat(${columnsTablet || 2}, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .${id} { --gap: var(--gap-mobile); }
                    .${id} .grid-container {
                        grid-template-columns: repeat(${columnsMobile || 1}, 1fr);
                    }
                }
            `}} />

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    marginBottom: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    color: titleColor || '#1e293b',
                    fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit'
                }}>
                    {title}
                </h2>

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
                            gap: 'var(--gap)',
                            minWidth: 'min-content',
                            padding: '10px 0'
                        }}>
                            {items.map((item, i) => <ImagePricingCard key={i} item={item} {...commonCardProps} />)}
                        </div>
                    </div>
                ) : (
                    <div className="grid-container">
                        {items.map((item, i) => <ImagePricingCard key={i} item={item} {...commonCardProps} />)}
                    </div>
                )}
            </div>
        </section >
    );
};
