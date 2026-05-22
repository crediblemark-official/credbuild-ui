import React from "react";
import type { PricingGradientItem } from "./types";

interface GradientPricingCardProps {
    item: PricingGradientItem;
    primaryColor: string;
    bodyFont?: string;
}

export const GradientPricingCard = ({ item, primaryColor, bodyFont }: GradientPricingCardProps) => {
    const ButtonComponent = item.buttonUrl ? 'a' : 'button';
    const buttonProps = item.buttonUrl ? { href: item.buttonUrl } : {};

    return (
        <div
            style={{
                background: `linear-gradient(145deg, ${primaryColor} 0%, ${primaryColor}CC 100%)`,
                borderRadius: '24px',
                padding: '40px 30px',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${primaryColor}66`;
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                backgroundColor: 'white',
                opacity: 0.1,
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            {item.highlightLabel && (
                <div style={{
                    backgroundColor: 'white',
                    color: primaryColor,
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'inline-block',
                    marginBottom: '20px',
                    alignSelf: 'center'
                }}>
                    {item.highlightLabel}
                </div>
            )}

            <h3 style={{
                fontSize: '1.75rem',
                marginBottom: '10px',
                fontWeight: '700',
            }}>
                {item.name}
            </h3>

            <div style={{ marginBottom: '30px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                }}>
                    {item.pricePrefix && <span style={{ opacity: 0.8, fontSize: '0.9rem' }}>{item.pricePrefix}</span>}
                    <span style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>{item.price}</span>
                </div>
                {item.priceSuffix && <div style={{ opacity: 0.8, fontSize: '1rem', marginTop: '4px' }}>{item.priceSuffix}</div>}
            </div>

            <div style={{ flex: 1, marginBottom: '40px' }}>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', textAlign: 'left' }}>
                    {item.features?.map((f, j) => (
                        <li key={j} style={{
                            padding: '8px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '1rem',
                            opacity: 0.95
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                ✓
                            </div>
                            {f.feature}
                        </li>
                    ))}
                </ul>
            </div>

            <ButtonComponent
                {...buttonProps as any}
                style={{
                    width: '100%',
                    padding: '18px',
                    backgroundColor: 'white',
                    color: primaryColor,
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '800',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
            >
                {item.buttonText || "Get Started"}
            </ButtonComponent>
        </div>
    );
};
