"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Product {
    id: string;
    name: string;
    price: string | number;
    currency?: string;
}

interface ProductSelectFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export const ProductSelectField = ({ value, onChange }: ProductSelectFieldProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetch("/api/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to load products");
                }
                return res.json();
            })
            .then((data) => {
                if (!isMounted) return;
                const list = data.data || data;
                if (Array.isArray(list)) {
                    setProducts(list);
                } else {
                    setProducts([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                if (!isMounted) return;
                setError(err.message || "Failed to load products");
                setLoading(false);
            });
        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center gap-2 p-3 bg-muted/10 border border-border/50 rounded-xl text-xs text-muted-foreground">
                <Loader2 className="animate-spin" size={14} />
                <span>Memuat daftar produk...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-xs text-destructive-foreground">
                ⚠️ Store integration required. Failed to fetch from /api/products.
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-xs text-yellow-600">
                Belum ada produk aktif di toko Anda. Silakan tambahkan produk di dashboard.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-1.5">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-foreground"
            >
                <option value="">-- Pilih Produk --</option>
                {products.map((p) => {
                    const priceNum = Number(p.price || 0);
                    const formattedPrice = priceNum.toLocaleString("id-ID", { style: "currency", currency: p.currency || "IDR", maximumFractionDigits: 0 });
                    return (
                        <option key={p.id} value={p.id}>
                            {p.name} ({formattedPrice})
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
