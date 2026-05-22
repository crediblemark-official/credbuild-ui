import React from "react";
import type { PricingModernItem } from "./types";

const themeColors: Record<string, { bg: string, text: string, accent: string }> = {
    blue: { bg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', text: '#ffffff', accent: '#2563eb' },
    purple: { bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', text: '#ffffff', accent: '#7c3aed' },
    green: { bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', text: '#ffffff', accent: '#059669' },
    orange: { bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', text: '#ffffff', accent: '#d97706' },
    pink: { bg: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', text: '#ffffff', accent: '#db2777' },
    red: { bg: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', text: '#ffffff', accent: '#dc2626' },
};

interface ModernPricingCardProps {
    item: PricingModernItem;
    mainColor?: string;
    bodyFont?: string;
}

export const ModernPricingCard = ({ item, mainColor, bodyFont }: ModernPricingCardProps) => {
    const theme = mainColor ? {
        bg: `linear-gradient(135deg, ${mainColor} 0%, ${mainColor}DD 100%)`,
        text: '#ffffff',
        accent: mainColor
    } : (themeColors[item.theme] || themeColors.blue);

    const ButtonComponent = item.buttonUrl ? 'a' : 'button';
    const buttonProps = item.buttonUrl ? { href: item.buttonUrl } : {};

    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s, box-shadow 0.3s',
                fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
            }}
        >
            <div style={{
                background: theme.bg,
                padding: '30px 20px 50px',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                clipPath: 'ellipse(150% 100% at 50% 0%)'
            }}>
                {item.highlightLabel && (
                    <span style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        letterSpacing: '0.05em'
                    }}>
                        {item.highlightLabel}
                    </span>
                )}
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700' }}>{item.name}</h3>
            </div>

            <div style={{
                width: '120px',
                height: '120px',
                backgroundColor: 'white',
                borderRadius: '50%',
                margin: '-60px auto 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                border: `4px solid white`,
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                zIndex: 10
            }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: `2px solid ${theme.accent}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.accent
                }}>
                    {item.pricePrefix && <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.pricePrefix}</span>}
                    <span style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: 1 }}>{item.price}</span>
                    {item.priceSuffix && <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.priceSuffix}</span>}
                </div>
            </div>

            <div style={{ flex: 1, padding: '0 30px 30px' }}>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                    {item.features?.map((f, j) => (
                        <li key={j} style={{
                            padding: '10px 0',
                            borderBottom: '1px solid #f3f4f6',
                            fontSize: '0.95rem',
                            color: '#4b5563',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <span style={{ color: theme.accent, fontSize: '1.2rem' }}>•</span>
                            {f.feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ padding: '0 30px 40px' }}>
                <ButtonComponent
                    {...buttonProps as any}
                    style={{
                        width: '100%',
                        padding: '16px',
                        background: theme.bg,
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                    }}
                >
                    {item.buttonText || "Choose Plan"}
                </ButtonComponent>
            </div>
        </div>
    );
};
