/// <reference types="@testing-library/jest-dom" />
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MetaPixelRender } from "../../../src/blocks/MetaPixel/MetaPixelRender";

test("MetaPixelRender renders tracker info box in editor mode", () => {
  render(
    <MetaPixelRender
      content={{
        pixelId: "123456789",
      }}
    />
  );

  // Verifikasi info box untuk admin/editor muncul
  expect(screen.getByText("Meta Pixel Tracker")).toBeTruthy();
  expect(screen.getByText("Pixel ID: 123456789 (Aktif)")).toBeTruthy();
});
