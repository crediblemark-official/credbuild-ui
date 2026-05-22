"use client";

import dynamic from "next/dynamic";
import type { ComponentConfig } from "@crediblemark/build";
import React from "react";

import { PortfolioProps } from "./types";

const PortfolioRender = dynamic<PortfolioProps>(() => import("./PortfolioRender").then(m => m.PortfolioRender));
export const Portfolio: ComponentConfig<PortfolioProps> = {
    label: "Portfolio / Projects",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                title: { type: "text", label: "Section Title" },
                subtitle: { type: "text", label: "Subtitle" },
            }
        }
    },
    defaultProps: {
        content: {
            title: "Karya Pilihan",
            subtitle: "Portofolio proyek terbaru yang telah kami kerjakan dengan sepenuh hati.",
        }
    },
    render: (props) => <PortfolioRender {...props} />,
};
