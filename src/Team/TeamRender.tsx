"use client";

import React, { useId } from "react";
import Image from "next/image";
import { getVal, getMobileVal } from "../utils";
import { TeamProps } from "./types";

export const TeamRender = ({ content, typography, styling }: TeamProps) => {
    const { title, subtitle, members } = content;
    const { titleSize, titleColor, memberNameSize, memberRoleSize, textColor } = typography;
    const { columns, backgroundColor, padding, cardBackgroundColor, cardBorderColor, imageRadius } = styling;

    const id = useId().replace(/:/g, '');
    const uniqueClass = `team-${id}`;

    return (
        <section className={uniqueClass} style={{ background: backgroundColor, color: textColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .${uniqueClass} {
                        padding: ${getVal(padding, 80)}px 20px;
                    }
                    .${uniqueClass} .team-header {
                        text-align: center;
                        margin-bottom: 60px;
                        max-width: 800px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .${uniqueClass} .team-title {
                        font-size: ${getVal(titleSize, 48)}px;
                        color: ${titleColor};
                        font-weight: 800;
                        letter-spacing: -0.02em;
                        margin-bottom: 16px;
                    }
                    .${uniqueClass} .team-grid {
                        display: grid;
                        grid-template-columns: repeat(${columns}, 1fr);
                        gap: 30px;
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .${uniqueClass} .member-card {
                        background: ${cardBackgroundColor};
                        border: 1px solid ${cardBorderColor};
                        border-radius: 20px;
                        padding: 30px;
                        text-align: center;
                        transition: transform 0.3s ease;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                    }
                    .${uniqueClass} .member-card:hover {
                        transform: translateY(-5px);
                    }
                    .${uniqueClass} .member-image {
                        width: 120px;
                        height: 120px;
                        margin: 0 auto 20px;
                        border-radius: ${imageRadius}%;
                        overflow: hidden;
                        position: relative;
                        background: #f1f5f9;
                    }
                    .${uniqueClass} .member-name {
                        font-size: ${getVal(memberNameSize, 20)}px;
                        font-weight: 700;
                        margin-bottom: 4px;
                    }
                    .${uniqueClass} .member-role {
                        font-size: ${getVal(memberRoleSize, 14)}px;
                        font-weight: 600;
                        color: #3b82f6;
                        margin-bottom: 12px;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    .${uniqueClass} .member-bio {
                        font-size: 14px;
                        opacity: 0.8;
                        line-height: 1.5;
                    }

                    @media (max-width: 1024px) {
                        .${uniqueClass} .team-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (max-width: 640px) {
                        .${uniqueClass} {
                            padding: ${getMobileVal(padding, 40)}px 20px;
                        }
                        .${uniqueClass} .team-header {
                            margin-bottom: 40px;
                        }
                        .${uniqueClass} .team-grid {
                            grid-template-columns: 1fr;
                        }
                        .${uniqueClass} .team-title {
                            font-size: ${getMobileVal(titleSize, 32)}px;
                        }
                        .${uniqueClass} .member-card {
                            padding: 20px;
                        }
                    }
                `
            }} />
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div className="team-header">
                    <h2 className="team-title">{title}</h2>
                    {subtitle && <p style={{ opacity: 0.7, fontSize: "1.1rem" }}>{subtitle}</p>}
                </div>
                <div className="team-grid">
                    {members.map((member, index) => (
                        <div key={index} className="member-card">
                            <div className="member-image">
                                {member.image ? (
                                    <Image src={member.image} alt={member.name} fill className="object-cover"  />
                                ) : (
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "2rem" }}>👤</div>
                                )}
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <div className="member-role">{member.role}</div>
                            {member.bio && <p className="member-bio">{member.bio}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
