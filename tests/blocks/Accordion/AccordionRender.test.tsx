/// <reference types="@testing-library/jest-dom" />
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import React from "react";
import { AccordionRender } from "../../../src/blocks/Accordion/AccordionRender";

test("AccordionRender renders items and details successfully", () => {
  const items = [
    { question: "What is CredBuild?", answer: "CredBuild is a drag-and-drop website builder." },
    { question: "Is it free?", answer: "Yes, it has a free tier." }
  ];

  render(
    <AccordionRender
      content={{
        title: "Frequently Asked Questions",
        items: items
      }}
      typography={{}}
      styling={{}}
    />
  );

  // Verify elements render
  expect(screen.getByText("Frequently Asked Questions")).toBeTruthy();
  expect(screen.getByText("What is CredBuild?")).toBeTruthy();
  expect(screen.getByText("Is it free?")).toBeTruthy();
  
  // Verify details answer rendering
  expect(screen.getByText("CredBuild is a drag-and-drop website builder.")).toBeTruthy();
});
