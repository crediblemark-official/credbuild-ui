"use client";

import React, { useId } from "react";
import { AnimationProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";
import DynamicIcon from "../../DynamicIcon";

export const AnimationRender = ({ content, styling }: AnimationProps) => {
    const {
        animationType = "scroll-triple",
        customIconName = "ArrowDown",
        customIconAnimation = "bounce"
    } = content || {};
    const {
        color = "#ef4444",
        size,
        speed = "normal",
        alignment = "center",
        paddingTop,
        paddingBottom,
        backgroundColor = "transparent"
    } = styling || {};

    const id = "anim-" + useId().replace(/:/g, "");
    
    // Determine animation duration
    const duration = speed === "fast" ? "0.6s" : speed === "slow" ? "1.8s" : "1.2s";
    const delayStep = speed === "fast" ? "0.15s" : speed === "slow" ? "0.45s" : "0.3s";

    return (
        <div className={`${id} w-full flex`} style={{ backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${getVal(paddingTop, 24)}px;
                    padding-bottom: ${getVal(paddingBottom, 24)}px;
                    justify-content: ${alignment === "left" ? "flex-start" : alignment === "right" ? "flex-end" : "center"};
                }
                
                /* Keyframe Definitions */
                @keyframes anim-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes anim-pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.15); opacity: 0.7; }
                }
                @keyframes anim-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes anim-shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                @keyframes anim-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes anim-wave {
                    0% { opacity: 0.15; transform: translateY(-4px); }
                    50% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0.15; transform: translateY(4px); }
                }
                @keyframes anim-slide-down {
                    0% { transform: translateY(-10px); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(10px); opacity: 0; }
                }

                /* Class Assignments */
                .${id} .animate-bounce-loop {
                    animation: anim-bounce ${duration} infinite ease-in-out;
                }
                .${id} .animate-pulse-loop {
                    animation: anim-pulse ${duration} infinite ease-in-out;
                }
                .${id} .animate-spin-loop {
                    animation: anim-spin ${duration} infinite linear;
                }
                .${id} .animate-shake-loop {
                    animation: anim-shake ${duration} infinite ease-in-out;
                }
                .${id} .animate-float-loop {
                    animation: anim-float ${duration} infinite ease-in-out;
                }
                .${id} .animate-slide-loop {
                    animation: anim-slide-down ${duration} infinite ease-in-out;
                }

                /* Wave delays for stacked elements */
                .${id} .wave-1 {
                    animation: anim-wave ${duration} infinite ease-in-out;
                    animation-delay: 0s;
                }
                .${id} .wave-2 {
                    animation: anim-wave ${duration} infinite ease-in-out;
                    animation-delay: ${delayStep};
                }
                .${id} .wave-3 {
                    animation: anim-wave ${duration} infinite ease-in-out;
                    animation-delay: calc(${delayStep} * 2);
                }

                /* Responsive sizes for wrapper and svgs */
                .${id} .animation-inner-container {
                    width: ${getVal(size, 32)}px;
                    height: ${getVal(size, 32) * 1.5}px;
                }
                .${id} .animation-inner-container .svg-half {
                    width: ${getVal(size, 32)}px;
                    height: ${getVal(size, 32) / 2}px;
                }
                .${id} .animation-inner-container .svg-full {
                    width: ${getVal(size, 32)}px;
                    height: ${getVal(size, 32)}px;
                }

                @media (max-width: 768px) {
                    .${id} {
                        padding-top: ${getTabletVal(paddingTop, 16)}px;
                        padding-bottom: ${getTabletVal(paddingBottom, 16)}px;
                    }
                    .${id} .animation-inner-container {
                        width: ${getTabletVal(size, 24)}px;
                        height: ${getTabletVal(size, 24) * 1.5}px;
                    }
                    .${id} .animation-inner-container .svg-half {
                        width: ${getTabletVal(size, 24)}px;
                        height: ${getTabletVal(size, 24) / 2}px;
                    }
                    .${id} .animation-inner-container .svg-full {
                        width: ${getTabletVal(size, 24)}px;
                        height: ${getTabletVal(size, 24)}px;
                    }
                }
                @media (max-width: 640px) {
                    .${id} {
                        padding-top: ${getMobileVal(paddingTop, 16)}px;
                        padding-bottom: ${getMobileVal(paddingBottom, 16)}px;
                    }
                    .${id} .animation-inner-container {
                        width: ${getMobileVal(size, 24)}px;
                        height: ${getMobileVal(size, 24) * 1.5}px;
                    }
                    .${id} .animation-inner-container .svg-half {
                        width: ${getMobileVal(size, 24)}px;
                        height: ${getMobileVal(size, 24) / 2}px;
                    }
                    .${id} .animation-inner-container .svg-full {
                        width: ${getMobileVal(size, 24)}px;
                        height: ${getMobileVal(size, 24)}px;
                    }
                }
            `}} />

            <div className="flex flex-col items-center justify-center animation-inner-container" style={{ color }}>
                {animationType === "scroll-triple" && (
                    <div className="flex flex-col gap-0.5 items-center justify-center w-full">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="wave-1 svg-half">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="wave-2 svg-half">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="wave-3 svg-half">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                )}

                {animationType === "scroll-chevrons" && (
                    <div className="flex flex-col gap-1 items-center justify-center w-full animate-bounce-loop">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="svg-half">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="svg-half" style={{ marginTop: "-4px" }}>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                )}

                {animationType === "scroll-chevron-single" && (
                    <div className="w-full flex items-center justify-center animate-bounce-loop">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="svg-full">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                )}

                {animationType === "scroll-arrow" && (
                    <div className="w-full flex items-center justify-center animate-slide-loop">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-full">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                )}

                {animationType === "custom-icon" && (
                    <div className={`w-full flex items-center justify-center svg-full ${
                        customIconAnimation === "bounce" ? "animate-bounce-loop" :
                        customIconAnimation === "pulse" ? "animate-pulse-loop" :
                        customIconAnimation === "spin" ? "animate-spin-loop" :
                        customIconAnimation === "shake" ? "animate-shake-loop" :
                        customIconAnimation === "float" ? "animate-float-loop" : ""
                    }`}>
                        <DynamicIcon name={customIconName} size={getVal(size, 32)} />
                    </div>
                )}
            </div>
        </div>
    );
};
