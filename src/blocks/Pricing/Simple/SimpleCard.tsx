import React from "react";
import type { PricingItem } from "./types";

interface PricingCardProps {
    item: PricingItem;
    primaryColor: string;
    activeTextColor: string;
    bodyFont?: string;
    isHorizontal: boolean;
    cardBg?: string;
    textColor?: string;
}

export const SimplePricingCard = ({ 
    item, 
    primaryColor, 
    activeTextColor, 
    bodyFont, 
    isHorizontal, 
    cardBg, 
    textColor 
}: PricingCardProps) => {
    const ButtonComponent = item.buttonUrl ? 'a' : 'button';
    const buttonProps = item.buttonUrl ? { href: item.buttonUrl } : {};

    return (
        <div
            className="pricing-card"
            style={{
                backgroundColor: cardBg || 'white',
                borderRadius: '20px',
                padding: '2em',
                textAlign: 'center',
                boxShadow: item.highlightLabel ? `0 20px 40px ${primaryColor}40` : '0 4px 6px rgba(0,0,0,0.05)',
                border: item.highlightLabel ? `2px solid ${primaryColor}` : '2px solid #f1f5f9',
                fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit',
                fontSize: 'var(--card-font-size, 16px)',
                transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                cursor: 'default',
                position: 'relative',
                zIndex: item.highlightLabel ? 2 : 1,
                overflow: 'visible',
                marginTop: item.highlightLabel ? '0' : '20px',
                ...(isHorizontal && {
                    flexShrink: 0,
                    width: 'clamp(260px, 35vw, 350px)',
                    scrollSnapAlign: 'start',
                }),
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                if (!item.highlightLabel) {
                    e.currentTarget.style.boxShadow = `0 20px 40px ${primaryColor}33`;
                    e.currentTarget.style.borderColor = primaryColor;
                }
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (!item.highlightLabel) {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = '#f1f5f9';
                }
            }}
        >
            {item.highlightLabel && (
                <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: primaryColor,
                    color: 'white',
                    padding: '0.4em 1em',
                    borderRadius: '999px',
                    fontSize: '0.85em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    boxShadow: `0 4px 6px ${primaryColor}4D`
                }}>
                    {item.highlightLabel}
                </div>
            )}

            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}99 100%)`,
                opacity: 0.05,
                borderRadius: '0 0 0 100%',
                pointerEvents: 'none'
            }} />

            <h3 style={{
                fontSize: '1.5em',
                marginBottom: '0.5rem',
                color: primaryColor,
                fontWeight: '700',
            }}>
                {item.name}
            </h3>

            {item.subtitle && (
                <div style={{
                    color: activeTextColor,
                    fontSize: '0.95em',
                    marginBottom: '1.5em',
                    fontWeight: '500'
                }}>
                    {item.subtitle}
                </div>
            )}

            <div style={{ marginBottom: '2rem' }}>
                {item.pricePrefix && (
                    <div style={{ fontSize: '0.9em', color: activeTextColor, opacity: 0.8, marginBottom: '4px' }}>
                        {item.pricePrefix}
                    </div>
                )}
                <div style={{
                    fontSize: '2.5em',
                    fontWeight: '800',
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}CC 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1
                }}>
                    {item.price}
                </div>
                {item.priceSuffix && (
                    <div style={{ fontSize: '0.9em', color: activeTextColor, marginTop: '4px', fontWeight: '500' }}>
                        {item.priceSuffix}
                    </div>
                )}
            </div>

            <ul style={{
                listStyle: 'none',
                padding: 0,
                textAlign: 'left',
                marginBottom: '2rem',
            }}>
                {(item.features || []).map((f, j) => {
                    const isAvailable = f.available !== false;
                    return (
                        <li
                            key={j}
                            style={{
                                padding: '12px 0',
                                borderBottom: j < item.features.length - 1 ? '1px solid #f1f5f9' : 'none',
                                color: isAvailable ? activeTextColor : (textColor ? textColor : '#94a3b8'),
                                opacity: isAvailable ? 1 : 0.6,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.95em',
                            }}
                        >
                            <span style={{
                                color: isAvailable ? primaryColor : (textColor || '#94a3b8'),
                                fontSize: '1.2em',
                                flexShrink: 0,
                                fontWeight: 'bold'
                            }}>
                                {isAvailable ? '✓' : '✕'}
                            </span>
                            <span>{f.feature}</span>
                        </li>
                    );
                })}
            </ul>

            <div>
                <ButtonComponent
                    {...buttonProps as any}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        width: '100%',
                        padding: '14px',
                        minHeight: '48px',
                        backgroundColor: item.highlightLabel ? primaryColor : '#ffffff',
                        color: item.highlightLabel ? 'white' : primaryColor,
                        border: `2px solid ${primaryColor}`,
                        borderRadius: '9999px',
                        fontWeight: '700',
                        fontSize: '1em',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textDecoration: 'none',
                        boxShadow: item.highlightLabel ? `0 4px 6px ${primaryColor}33` : 'none'
                    }}
                >
                    {item.buttonText || "Pilih Paket"}
                </ButtonComponent>
                {item.buttonDesc && (
                    <div style={{
                        marginTop: '12px',
                        fontSize: '0.8em',
                        color: activeTextColor,
                        fontStyle: 'italic'
                    }}>
                        {item.buttonDesc}
                    </div>
                )}
            </div>
        </div>
    );
};
