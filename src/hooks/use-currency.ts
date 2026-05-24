"use client";

import { useState, useEffect } from "react";
import { formatPrice, getCurrencySymbol } from "../lib/currency";

export function useCurrency() {
    const [currency, setCurrency] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("storeCurrency") || "USD";
        }
        return "USD";
    });

    const shouldFetch = typeof window !== "undefined" && window.location.protocol.startsWith("http");
    const [loading, setLoading] = useState(shouldFetch);

    useEffect(() => {
        if (!shouldFetch) return;

        // Fetch authoritative setting from server
        fetch("/api/settings/payments")
            .then(res => {
                const contentType = res.headers.get("content-type");
                if (res.ok && contentType && contentType.includes("application/json")) {
                    return res.json();
                }
                return null;
            })
            .then(data => {
                if (data && data.currency) {
                    setCurrency(data.currency);
                    localStorage.setItem("storeCurrency", data.currency);
                }
            })
            .catch(err => console.error("Currency fetch error:", err))
            .finally(() => setLoading(false));
    }, [shouldFetch]);

    const format = (price: number | string) => {
        return formatPrice(price, currency);
    };

    const symbol = getCurrencySymbol(currency);

    return { currency, formatPrice: format, symbol, loading };
}
