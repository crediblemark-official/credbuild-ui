/// <reference types="@testing-library/jest-dom" />
import { test, expect, beforeAll } from "bun:test";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import { ProductListRender } from "../../../src/blocks/ProductList/ProductListRender";

const mockProducts = [
  {
    id: "1",
    name: "T-Shirt Classic",
    price: 150000,
    stock: 5,
    slug: "t-shirt-classic",
    images: [],
    createdAt: "2026-05-24T00:00:00.000Z",
    terms: [{ id: "cat1", name: "Fashion", slug: "fashion", taxonomyId: "category" }]
  },
  {
    id: "2",
    name: "T-Shirt Premium",
    price: 250000,
    stock: 12,
    slug: "t-shirt-premium",
    images: [],
    createdAt: "2026-05-23T00:00:00.000Z",
    terms: [{ id: "cat1", name: "Fashion", slug: "fashion", taxonomyId: "category" }]
  }
];

beforeAll(() => {
  // Override global fetch to bypass Happy DOM relative URL parsing
  global.fetch = (() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ products: mockProducts }),
    headers: { get: () => "application/json" }
  } as any)) as any;
});

test("ProductListRender renders title and list of products", async () => {
  await act(async () => {
    render(
      <ProductListRender
        content={{
          title: "Featured Products",
          description: "Check out our latest arrivals",
          limit: 4,
          sortBy: "newest",
          showRating: false,
          showStock: true,
          showBadges: true,
          showTitleAccent: true,
          actionType: "details"
        }}
        typography={{}}
        styling={{}}
        initialProducts={mockProducts}
      />
    );
  });

  expect(screen.getByText("Featured Products")).toBeTruthy();
  expect(screen.getByText("T-Shirt Classic")).toBeTruthy();
  expect(screen.getByText("T-Shirt Premium")).toBeTruthy();
});
