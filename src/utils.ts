import React from "react";
import { ResponsiveSliderField } from "@crediblemark/build";

export type ResponsiveValue = React.ComponentProps<typeof ResponsiveSliderField>['value'];

export const getVal = (val: ResponsiveValue | undefined, fallback: number): number => {
    if (typeof val === 'number') return val;
    return (val as any)?.desktop ?? fallback;
};

export const getTabletVal = (val: ResponsiveValue | undefined, fallback: number): number => {
    if (typeof val === 'number') return val;
    return (val as any)?.tablet ?? (val as any)?.desktop ?? fallback;
};

export const getMobileVal = (val: ResponsiveValue | undefined, fallback: number): number => {
    if (typeof val === 'number') return val;
    return (val as any)?.mobile ?? (val as any)?.tablet ?? (val as any)?.desktop ?? fallback;
};
