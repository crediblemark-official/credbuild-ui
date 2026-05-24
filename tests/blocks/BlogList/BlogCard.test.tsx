/// <reference types="@testing-library/jest-dom" />
import { test, expect, mock } from "bun:test";
import { render, screen } from "@testing-library/react";
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

import { BlogCard } from "../../../src/blocks/BlogList/BlogCard";

test("BlogCard renders post title, text, and link", () => {
  const post = {
    id: "1",
    title: "Understanding React 19",
    content: "React 19 brings exciting new features like Server Components, Server Actions, and more.",
    slug: "understanding-react-19",
    imageUrl: "https://example.com/react-19.jpg",
    createdAt: "2026-05-24T00:00:00.000Z",
    published: true
  };

  render(
    <BlogCard
      post={post}
      cardBackgroundColor="#ffffff"
      cardBorderColor="#e4e4e7"
      cardTitleColor="#1f2937"
      cardTextColor="#4b5563"
      cardDateColor="#71717a"
      linkColor="#2563eb"
    />
  );

  // Assertions
  expect(screen.getByText("Understanding React 19")).toBeTruthy();
  expect(screen.getByText(/React 19 brings exciting/)).toBeTruthy();
  
  const linkElement = screen.getByRole("link", { name: /Read Full Article/i });
  expect(linkElement).toBeTruthy();
  expect(linkElement.getAttribute("href")).toBe("/blog/understanding-react-19");
});
