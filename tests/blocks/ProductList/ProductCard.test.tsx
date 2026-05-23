/// <reference types="@testing-library/jest-dom" />
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ProductCard } from "../../../src/blocks/ProductList/ProductCard";

test("ProductCard renders with a name", () => {
  render(
    <ProductCard 
        product={{ 
            id: "1", 
            name: "Test Product", 
            price: 10000, 
            stock: 10,
            slug: "test-product",
            images: [],
            createdAt: new Date().toISOString()
        }} 
    />
  );
  
  expect(screen.getByText("Test Product")).toBeTruthy();
});
