import { useId } from "react";
import type { AccordionProps } from "@/components/credbuild/Accordion/types";

export const AccordionRender = ({
    content,
    typography,
    styling
}: AccordionProps) => {
    const { title, items } = content;
    const { titleFont = 'inherit', bodyFont = 'inherit' } = typography;
    const { backgroundColor, titleColor, itemBgColor, textColor, activeColor } = styling;
    const id = "accordion-" + useId().replace(/:/g, "");
    const finalActiveColor = activeColor || "#2563eb";

    return (
        <section className={id} style={{ padding: 'clamp(50px, 8vw, 80px) 20px', backgroundColor: backgroundColor || '#ffffff' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} details > summary {
                    list-style: none;
                }
                .${id} details > summary::-webkit-details-marker {
                    display: none;
                }
                .${id} details[open] summary ~ * {
                    animation: slideDown 0.2s ease-in-out;
                }
                .${id} details[open] .icon {
                    transform: rotate(180deg);
                    color: ${finalActiveColor};
                }
                @keyframes slideDown {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}} />

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: '800',
                    color: titleColor || '#1e293b',
                    fontFamily: titleFont !== 'inherit' ? `"${titleFont}", sans-serif` : 'inherit',
                    lineHeight: 1.2,
                }}>
                    {title}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {items.map((item, i) => (
                        <details
                            key={i}
                            style={{
                                backgroundColor: itemBgColor || '#f8fafc',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                fontFamily: bodyFont !== 'inherit' ? `"${bodyFont}", sans-serif` : 'inherit',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                                transition: 'background-color 0.2s, box-shadow 0.2s',
                            }}
                        >
                            <summary style={{
                                padding: 'clamp(16px, 3vw, 20px) clamp(20px, 4vw, 24px)',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                                color: titleColor || '#1e293b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '16px',
                                userSelect: 'none',
                                WebkitTapHighlightColor: 'transparent',
                                border: 'none',
                                outline: 'none',
                            }}>
                                <span style={{ lineHeight: 1.4 }}>{item.question}</span>
                                <svg
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{
                                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s',
                                        flexShrink: 0,
                                        color: '#94a3b8'
                                    }}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </summary>
                            <div style={{
                                padding: '0 clamp(20px, 4vw, 24px) clamp(20px, 4vw, 24px)',
                                color: textColor || '#475569',
                                lineHeight: '1.7',
                                fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                            }}>
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
