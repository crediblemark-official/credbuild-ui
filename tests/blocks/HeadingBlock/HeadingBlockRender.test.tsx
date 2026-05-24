/// <reference types="@testing-library/jest-dom" />
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HeadingBlockRender } from "../../../src/blocks/HeadingBlock/HeadingBlockRender";

test("HeadingBlockRender renders with dynamic level tags", () => {
  const { container } = render(
    <HeadingBlockRender
      content={{
        title: "Main Dynamic Title",
        level: "h3"
      }}
      styling={{
        textColor: "#ff0000",
        textAlign: "center"
      }}
      typography={{
        fontSize: { desktop: 48, tablet: 40, mobile: 32 }
      }}
    />
  );

  expect(screen.getByText("Main Dynamic Title")).toBeTruthy();
  
  // Verify it is rendered as h3 tag
  const headingElement = container.querySelector("h3");
  expect(headingElement).toBeTruthy();
  expect(headingElement?.textContent).toBe("Main Dynamic Title");
});
