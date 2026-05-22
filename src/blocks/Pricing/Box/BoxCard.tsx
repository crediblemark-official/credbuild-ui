import React from "react";
import type { PricingBoxItem } from "./types";

interface BoxPricingCardProps {
    item: PricingBoxItem;
    primaryColor: string;
    bodyFont?: string;
}

export const BoxPricingCard = ({ item, primaryColor, bodyFont }: BoxPricingCardProps) => {
    const ButtonComponent = item.buttonUrl ? 'a' : 'button';
    const buttonProps = item.buttonUrl ? { href: item.buttonUrl } : {};

    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit',
                border: `1px solid #e5e7eb`,
                height: '100%',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1)';
            }}
        >
            <div style={{
                backgroundColor: primaryColor,
                padding: '32px 24px',
                color: 'white',
                textAlign: 'center',
            }}>
                <h3 style={{
                    margin: 0,
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    {item.name}
                </h3>
                {item.highlightLabel && (
                    <div style={{
                        marginTop: '8px',
                        fontSize: '0.8rem',
                        opacity: 0.9,
                        fontWeight: '500'
                    }}>
                        {item.highlightLabel}
                    </div>
                )}
            </div>

            <div style={{ padding: '32px 24px 0', textAlign: 'center' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    color: '#111827'
                }}>
                    {item.pricePrefix && <span style={{ fontSize: '1rem', color: '#6b7280', marginRight: '4px' }}>{item.pricePrefix}</span>}
                    <span style={{ fontSize: '3rem', fontWeight: '800', lineHeight: 1 }}>{item.price}</span>
                    {item.priceSuffix && <span style={{ fontSize: '1rem', color: '#6b7280', marginLeft: '4px' }}>{item.priceSuffix}</span>}
                </div>
            </div>

            <div style={{ flex: 1, padding: '32px 24px' }}>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                    {item.features?.map((f, j) => (
                        <li key={j} style={{
                            padding: '12px 0',
                            borderBottom: '1px solid #f3f4f6',
                            color: '#4b5563',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{
                                width: '20px', height: '20px', borderRadius: '50%',
                                backgroundColor: `${primaryColor}20`,
                                color: primaryColor,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.75rem', fontWeight: 'bold'
                            }}>
                                ✓
                            </div>
                            {f.feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ padding: '0 24px 32px' }}>
                <ButtonComponent
                    {...buttonProps as any}
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: 'transparent',
                        border: `2px solid ${primaryColor}`,
                        borderRadius: '8px',
                        color: primaryColor,
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                    }}
                >
                    {item.buttonText || "Choose Plan"}
                </ButtonComponent>
            </div>
        </div>
    );
};
