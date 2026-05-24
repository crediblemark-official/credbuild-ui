/// <reference types="@testing-library/jest-dom" />
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import React from "react";
import { CTARender } from "../../../src/blocks/CTA/CTARender";

test("CTARender renders title, subtitle, and CTA button with correct link", () => {
  render(
    <CTARender
      content={{
        title: "Build Your Dream Website",
        subtitle: "The ultimate visual editor for Next.js and Tailwind CSS.",
        buttonText: "Get Started Now",
        buttonLink: "https://crediblemark.com/get-started",
      }}
      typography={{
        titleSize: { desktop: 56, tablet: 48, mobile: 32 },
        descriptionSize: { desktop: 20, tablet: 18, mobile: 16 },
      }}
      styling={{
        backgroundColor: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
        padding: { desktop: 100, tablet: 80, mobile: 60 },
        titleColor: "#ffffff",
        descriptionColor: "rgba(255, 255, 255, 0.95)",
        buttonColor: "#ffffff",
        buttonTextColor: "#dc2626",
      }}
    />
  );

  // Assertions
  expect(screen.getByText("Build Your Dream Website")).toBeTruthy();
  expect(screen.getByText("The ultimate visual editor for Next.js and Tailwind CSS.")).toBeTruthy();
  
  const linkElement = screen.getByRole("link", { name: /Get Started Now/i });
  expect(linkElement).toBeTruthy();
  expect(linkElement.getAttribute("href")).toBe("https://crediblemark.com/get-started");
});
