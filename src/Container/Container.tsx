"use client";

import dynamic from "next/dynamic";

import React from "react";
import type { ComponentConfig } from "@crediblemark/build";
import { SliderField, ColorPickerField, ResponsiveSliderField } from "@crediblemark/build";
import { MediaPickerField } from "@/components/credbuild/MediaPickerField";
const ContainerRender = dynamic<ContainerProps>(() => import("./ContainerRender").then(m => m.ContainerRender));
import type { ContainerProps } from "./types";

export type { ContainerProps };

export const Container: ComponentConfig<ContainerProps> = {
    label: "Container",
    fields: {
        content: {
            type: "object",
            label: "Content",
            objectFields: {
                contentWidth: {
                    type: "select", label: "Width Type",
                    options: [{ label: "Boxed", value: "boxed" }, { label: "Full Width", value: "full" }],
                },
                width: {
                    type: "custom", label: "Boxed Width",
                    render: ({ value, onChange }) => <SliderField value={value || ""} onChange={(v) => onChange(String(v))} unit="px" max={2000} defaultValue="1140px" />
                },
            }
        },
        media: {
            type: "object",
            label: "Media",
            objectFields: {
                backgroundImage: { 
                    type: "custom", 
                    label: "Background Image",
                    render: ({ value, onChange }) => <MediaPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
            }
        },
        styling: {
            type: "object",
            label: "Styling",
            objectFields: {
                containerLayout: {
                    type: "radio", label: "Layout",
                    options: [{ label: "Flexbox", value: "flex" }, { label: "Grid", value: "grid" }]
                },
                mobileBehavior: {
                    type: "radio", label: "Mobile Behavior (Mobile Only)",
                    options: [{ label: "Stack / Wrap", value: "wrap" }, { label: "Horizontal Scroll", value: "scroll" }]
                },
                scrollBehavior: {
                    type: "radio", label: "Scroll Behavior (All Devices)",
                    options: [{ label: "None", value: "none" }, { label: "Horizontal Scroll", value: "horizontal" }]
                },
                itemWidth: {
                    type: "custom", label: "Scroll Item Width (%)",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={10} max={100} step={1} defaultValue={85} />
                },

                minHeight: {
                    type: "custom", label: "Min Height",
                    render: ({ value, onChange }) => <SliderField value={value || "100px"} onChange={(v) => onChange(String(v))} unit="px" max={1000} defaultValue="100px" />
                },
                columnGap: {
                    type: "custom", label: "Column Gap",
                    render: ({ value, onChange }) => <SliderField value={value || ""} onChange={(v) => onChange(String(v))} unit="px" max={100} defaultValue="20px" />
                },
                rowGap: {
                    type: "custom", label: "Row Gap",
                    render: ({ value, onChange }) => <SliderField value={value || ""} onChange={(v) => onChange(String(v))} unit="px" max={100} defaultValue="20px" />
                },
                flexDirection: {
                    type: "radio", label: "Flex Direction",
                    options: [
                        { label: "Row →", value: "row" }, { label: "Col ↓", value: "column" },
                        { label: "Row Rev ←", value: "row-reverse" }, { label: "Col Rev ↑", value: "column-reverse" }
                    ],
                },
                flexWrap: {
                    type: "radio", label: "Flex Wrap",
                    options: [{ label: "No Wrap", value: "nowrap" }, { label: "Wrap", value: "wrap" }]
                },
                gridColumns: {
                    type: "select", label: "Grid Presets",
                    options: [
                        { label: "1 Column", value: "1" },
                        { label: "2 Columns (1:1)", value: "2" },
                        { label: "3 Columns (1:1:1)", value: "3" },
                        { label: "4 Columns (1:1:1:1)", value: "4" },
                        { label: "2 Columns (1:2)", value: "1fr 2fr" },
                        { label: "2 Columns (2:1)", value: "2fr 1fr" },
                        { label: "3 Columns (1:2:1)", value: "1fr 2fr 1fr" },
                        { label: "Custom Template", value: "custom" },
                    ]
                },
                gridTemplate: { 
                    type: "text", 
                    label: "Custom Grid Template (e.g. 1fr 2fr)",
                },
                gridRows: {
                    type: "custom", label: "Grid Rows",
                    render: ({ value, onChange }) => <SliderField value={value || ""} onChange={(v) => onChange(String(v))} unit="" max={12} min={1} defaultValue="1" useUnits={false} />
                },
                gridAutoFlow: {
                    type: "select", label: "Grid Auto Flow",
                    options: [
                        { label: "Row", value: "row" }, { label: "Column", value: "column" },
                        { label: "Row Dense", value: "row dense" }, { label: "Col Dense", value: "column dense" }
                    ]
                },
                justifyContent: {
                    type: "select", label: "Justify Content",
                    options: [
                        { label: "Start", value: "flex-start" }, { label: "Center", value: "center" },
                        { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" },
                        { label: "Space Around", value: "space-around" },
                    ]
                },
                alignItems: {
                    type: "select", label: "Align Items",
                    options: [
                        { label: "Start", value: "flex-start" }, { label: "Center", value: "center" },
                        { label: "End", value: "flex-end" }, { label: "Stretch", value: "stretch" },
                    ]
                },
                justifyItems: {
                    type: "select", label: "Justify Items",
                    options: [
                        { label: "Start", value: "start" }, { label: "Center", value: "center" },
                        { label: "End", value: "end" }, { label: "Stretch", value: "stretch" },
                    ]
                },
                backgroundColor: {
                    type: "custom", label: "Background Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                backgroundGradient: { type: "text", label: "Background Gradient (CSS)" },
                backgroundSize: {
                    type: "select", label: "BG Size",
                    options: [{ label: "Cover", value: "cover" }, { label: "Contain", value: "contain" }, { label: "Auto", value: "auto" }]
                },
                backdropBlur: {
                    type: "select", label: "Backdrop Blur",
                    options: [
                        { label: "None", value: "" },
                        { label: "Small (4px)", value: "4px" },
                        { label: "Medium (8px)", value: "8px" },
                        { label: "Large (16px)", value: "16px" },
                        { label: "Extra Large (24px)", value: "24px" },
                    ]
                },
                overlayColor: {
                    type: "custom", label: "Overlay Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                borderStyle: {
                    type: "select", label: "Border Type",
                    options: [{ label: "None", value: "none" }, { label: "Solid", value: "solid" }, { label: "Dashed", value: "dashed" }, { label: "Dotted", value: "dotted" }]
                },
                borderWidth: {
                    type: "custom", label: "Border Width",
                    render: ({ value, onChange }) => <SliderField value={value || ""} onChange={(v) => onChange(String(v))} unit="px" max={20} defaultValue="0px" />
                },
                borderColor: {
                    type: "custom", label: "Border Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                borderRadius: {
                    type: "custom", label: "Border Radius",
                    render: ({ value, onChange }) => <SliderField value={value || ""} onChange={(v) => onChange(String(v))} unit="px" max={100} defaultValue="0px" />
                },
                boxShadow: { type: "text", label: "Box Shadow" },
                textColor: {
                    type: "custom", label: "Text Color",
                    render: ({ value, onChange }) => <ColorPickerField value={value || ""} onChange={(v) => onChange(v as any)} />
                },
                textAlign: {
                    type: "radio", label: "Text Align",
                    options: [{ label: "Left", value: "left" }, { label: "Center", value: "center" }, { label: "Right", value: "right" }]
                },
                marginTop: {
                    type: "custom", label: "Margin Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={-100} max={200} step={4} />
                },
                marginBottom: {
                    type: "custom", label: "Margin Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={-100} max={200} step={4} />
                },
                marginLeft: {
                    type: "custom", label: "Margin Left",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={-100} max={200} step={4} />
                },
                marginRight: {
                    type: "custom", label: "Margin Right",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={-100} max={200} step={4} />
                },
                paddingTop: {
                    type: "custom", label: "Padding Top",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingBottom: {
                    type: "custom", label: "Padding Bottom",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingLeft: {
                    type: "custom", label: "Padding Left",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },
                paddingRight: {
                    type: "custom", label: "Padding Right",
                    render: ({ value, onChange }) => <ResponsiveSliderField value={value || {}} onChange={(v) => onChange(v as any)} min={0} max={200} step={4} />
                },

                zIndex: { type: "number", label: "Z-Index" },
                overflow: {
                    type: "select", label: "Overflow",
                    options: [{ label: "Visible", value: "visible" }, { label: "Hidden", value: "hidden" }, { label: "Scroll", value: "scroll" }]
                },
                cssId: { type: "text", label: "CSS ID" },
                cssClass: { type: "text", label: "CSS Class" },
                position: {
                    type: "select", label: "Position",
                    options: [
                        { label: "Relative", value: "relative" },
                        { label: "Absolute", value: "absolute" },
                        { label: "Sticky", value: "sticky" },
                        { label: "Fixed", value: "fixed" }
                    ]
                },
                top: { type: "text", label: "Top Offset (px/%/vh)" },
                animation: {
                    type: "select", label: "Entrance Animation",
                    options: [
                        { label: "None", value: "none" },
                        { label: "Fade In", value: "fadeIn" },
                        { label: "Slide Up", value: "slideUp" },
                        { label: "Zoom In", value: "zoomIn" },
                        { label: "Slide Right", value: "slideRight" },
                    ]
                },
            }
        }
    },
    defaultProps: {
        content: {
            contentWidth: "boxed",
            width: "1140px",
        },
        media: {
            backgroundImage: "",
        },
        styling: {
            containerLayout: "grid",
            mobileBehavior: "wrap",
            minHeight: "100px",
            columnGap: "20px",
            rowGap: "20px",
            gridColumns: "3",
            gridRows: "1",
            gridAutoFlow: "row",
            justifyItems: "stretch",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            paddingTop: { desktop: 20, tablet: 20, mobile: 20 },
            paddingBottom: { desktop: 20, tablet: 20, mobile: 20 },
            paddingLeft: { desktop: 0, tablet: 0, mobile: 0 },
            paddingRight: { desktop: 0, tablet: 0, mobile: 0 },
            marginTop: { desktop: 0, tablet: 0, mobile: 0 },
            marginBottom: { desktop: 0, tablet: 0, mobile: 0 },
            scrollBehavior: "none",
            itemWidth: { desktop: 100, tablet: 85, mobile: 85 },

            backgroundColor: "transparent",
            borderStyle: "none",
            borderWidth: "0px",
        }
    },
    render: (props) => <ContainerRender {...props} />,
};
