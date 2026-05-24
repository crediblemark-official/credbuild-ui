/// <reference types="@testing-library/jest-dom" />
import { test, expect, beforeAll, mock } from "bun:test";
import { render, act } from "@testing-library/react";
import React from "react";

// Mock next/image and next/link
mock.module("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, sizes, className, src, alt, ...rest } = props;
    return <img src={src} alt={alt} className={className} {...rest} />;
  }
}));

mock.module("next/link", () => ({
  __esModule: true,
  default: (props: any) => {
    const { href, children, ...rest } = props;
    return <a href={href} {...rest}>{children}</a>;
  }
}));

import { buildUiPreset } from "../src/preset";

beforeAll(() => {
  // Mock fetch globally to prevent happy-dom relative URL construction errors
  global.fetch = (() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ products: [], posts: [] }),
    headers: { get: () => "application/json" }
  } as any)) as any;
});

// Run smoke tests for all blocks in the preset
for (const [name, componentConfig] of Object.entries(buildUiPreset.components)) {
  test(`Preset Smoke Test: block "${name}" renders without throwing`, async () => {
    const defaultProps = componentConfig.defaultProps || {};
    
    await act(async () => {
      render(componentConfig.render(defaultProps as any));
    });
    
    // If it renders without throwing any exceptions, the smoke test passes
    expect(true).toBe(true);
  });
}
