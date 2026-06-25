/// <reference types="@testing-library/jest-dom" />
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import React from "react";
import { PixelTrackerRender } from "../../../src/blocks/PixelTracker/PixelTrackerRender";

test("PixelTrackerRender renders all active pixel information in editor mode", () => {
  if (typeof window !== "undefined") {
    (window as any).__CREDBUILD_INTERNAL_DO_NOT_USE = {};
  }

  render(
    <PixelTrackerRender
      content={{
        metaPixelId: "META_123",
        tiktokPixelId: "TIKTOK_456",
        googleAnalyticsId: "GA_789",
      }}
    />
  );

  // Verifikasi info box untuk admin/editor muncul beserta statusnya
  expect(screen.getByText("All-in-One Pixel Tracker")).toBeTruthy();
  expect(screen.getByText("Active (ID: META_123)")).toBeTruthy();
  expect(screen.getByText("Active (ID: TIKTOK_456)")).toBeTruthy();
  expect(screen.getByText("Active (ID: GA_789)")).toBeTruthy();
});
