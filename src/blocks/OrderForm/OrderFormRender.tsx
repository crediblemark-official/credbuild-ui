"use client";

import React, { useEffect, useState, useId } from "react";
import { Loader2, ShieldCheck, ShoppingCart, ArrowRight, CheckCircle, Package, Info, Copy, Check } from "lucide-react";
import { OrderFormProps } from "./types";
import { getVal, getTabletVal, getMobileVal } from "../../utils";

export const OrderFormRender = ({ content, styling }: OrderFormProps) => {
    const { productId, formTitle = "Lengkapi Data:" } = content || {};
    const {
        showLabels = true,
        showNameField = true,
        showPhoneField = true,
        showEmailField = true,
        showAddressField = false,
        showPaymentField = true,
        showCourierField = false,
        showNotesField = false,
        showSummaryField = true,
        showDiscountField = false,
        showSubmitButton = true,
        submitButtonText = "Kirimkan",
        mainColor = "#eab308",
        backgroundColor = "#ffffff",
        padding,
        borderRadius
    } = styling || {};

    const id = "order-form-" + useId().replace(/:/g, "");
    
    // States
    const [isActive, setIsActive] = useState(true);
    const [product, setProduct] = useState<any>(null);
    const [siteSettings, setSiteSettings] = useState<any>(null);
    const [paymentSettings, setPaymentSettings] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(1);
    const [courier, setCourier] = useState("JNE");
    const [notes, setNotes] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; type: "percentage" | "fixed"; value: number } | null>(null);
    
    const [userSelectedMethod, setUserSelectedMethod] = useState<"system" | "whatsapp" | null>(null);
    const [systemPaymentMethod, setSystemPaymentMethod] = useState<"system" | "manual">("system");
    const [copied, setCopied] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [submittedOrder, setSubmittedOrder] = useState<{ id: string; method: string } | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Mount load
    useEffect(() => {
        let isMounted = true;
        
        const loadData = async () => {
            try {
                // Fetch products to check active store integration
                const prodRes = await fetch("/api/products");
                if (prodRes.status === 404) {
                    if (isMounted) setIsActive(false);
                    return;
                }
                if (!prodRes.ok) {
                    throw new Error("Failed to load products");
                }
                const prodData = await prodRes.json();
                const list = prodData.data || prodData.products || prodData;
                
                let foundProduct = null;
                if (Array.isArray(list) && productId) {
                    foundProduct = list.find((p: any) => p.id === productId);
                }
                
                if (isMounted) {
                    setProduct(foundProduct || null);
                }

                // Fetch general settings
                try {
                    const settingsRes = await fetch("/api/settings");
                    if (settingsRes.ok) {
                        const settingsData = await settingsRes.json();
                        if (isMounted) setSiteSettings(settingsData);
                    }
                } catch (e) {
                    console.warn("Settings API fallback error:", e);
                }

                // Fetch payment settings
                try {
                    const payRes = await fetch("/api/settings/payments");
                    if (payRes.ok) {
                        const payData = await payRes.json();
                        if (isMounted) setPaymentSettings(payData);
                    }
                } catch (e) {
                    console.warn("Payments API fallback error:", e);
                }

            } catch (err) {
                console.error("OrderForm initialization error:", err);
                if (isMounted) setIsActive(false);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, [productId]);

    // Derived settings
    const showOrders = siteSettings?.enabledOrders ?? true;
    const showWhatsapp = siteSettings?.enabledWhatsappCheckout ?? false;
    const defaultMethod = !showOrders && showWhatsapp ? "whatsapp" : "system";
    const checkoutMethod = userSelectedMethod || defaultMethod;

    // Price helpers
    const basePrice = Number(product?.price || 0);
    const originalPrice = Number(product?.originalPrice || 0);
    // Prioritaskan mata uang dari setelan pembayaran toko, fallback ke mata uang produk
    const currency = paymentSettings?.currency || product?.currency || "IDR";

    const formatPrice = (amount: number) => {
        return amount.toLocaleString("id-ID", {
            style: "currency",
            currency: currency,
            maximumFractionDigits: 0
        });
    };

    // Calculate totals
    const subtotal = basePrice * quantity;
    let discountAmount = 0;
    if (appliedDiscount) {
        if (appliedDiscount.type === "percentage") {
            discountAmount = (subtotal * appliedDiscount.value) / 100;
        } else {
            discountAmount = appliedDiscount.value;
        }
    }
    const totalPayable = Math.max(0, subtotal - discountAmount);

    const handleApplyDiscount = () => {
        const codeClean = discountCode.trim().toUpperCase();
        if (codeClean === "DISKON10" || codeClean === "PROMO10") {
            setAppliedDiscount({ code: codeClean, type: "percentage", value: 10 });
        } else if (codeClean === "HEMAT50K") {
            setAppliedDiscount({ code: codeClean, type: "fixed", value: 50000 });
        } else {
            alert("Kode diskon tidak valid!");
        }
    };

    const handleRemoveDiscount = () => {
        setAppliedDiscount(null);
        setDiscountCode("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyToClipboard = () => {
        if (paymentSettings?.accountNumber) {
            navigator.clipboard.writeText(paymentSettings.accountNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isProcessing) return;
        setIsProcessing(true);
        setStatus("loading");

        const targetMethod = checkoutMethod === "system" ? systemPaymentMethod : checkoutMethod;

        // Construct complete detailed address payload
        let detailedAddress = formData.address || "No Address Provided";
        if (showCourierField && courier) {
            detailedAddress += ` (Kurir: ${courier})`;
        }
        if (showNotesField && notes) {
            detailedAddress += ` (Catatan: ${notes})`;
        }

        const payload = {
            name: formData.name || "Guest Customer",
            email: formData.email || "guest@situsbisnis.com",
            phone: formData.phone || "-",
            address: detailedAddress,
            city: formData.city || undefined,
            zip: formData.zip || undefined,
            paymentMethod: targetMethod,
            items: [
                {
                    productId: product.id,
                    quantity: quantity,
                    price: basePrice
                }
            ]
        };

        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                throw new Error("Failed to place order");
            }

            const orderData = await res.json();
            const orderId = orderData.id;

            if (targetMethod === "whatsapp") {
                // WhatsApp integration
                const phone = siteSettings?.whatsappNumber || siteSettings?.socialWhatsapp || "";
                let cleanPhone = phone.replace(/\D/g, '');
                if (cleanPhone.startsWith('0')) {
                    cleanPhone = '62' + cleanPhone.substring(1);
                }
                if (!cleanPhone) {
                    cleanPhone = "6281234567890"; // default admin phone fallback
                }

                let messageText = `Halo Admin, saya ingin memesan produk berikut:\n\n`;
                messageText += `*ID PESANAN:* *#${orderId.slice(0, 8).toUpperCase()}*\n`;
                messageText += `*STATUS:* *PENDING* (Menunggu Konfirmasi)\n\n`;
                messageText += `*DETAIL PESANAN:*\n`;
                messageText += `1. *${product.name}*\n`;
                messageText += `   Kuantitas: ${quantity} pcs\n`;
                messageText += `   Harga Satuan: ${formatPrice(basePrice)}\n`;
                messageText += `   Subtotal: ${formatPrice(subtotal)}\n`;
                if (appliedDiscount) {
                    messageText += `   Diskon (${appliedDiscount.code}): -${formatPrice(discountAmount)}\n`;
                }
                messageText += `   Total: ${formatPrice(totalPayable)}\n\n`;

                if (showCourierField && courier) {
                    messageText += `*KURIR:* ${courier}\n`;
                }

                messageText += `*INFORMASI PENGIRIMAN:*\n`;
                messageText += `- Nama Penerima: ${formData.name || "Guest"}\n`;
                messageText += `- No. WhatsApp: ${formData.phone || "-"}\n`;
                messageText += `- Email: ${formData.email || "-"}\n`;
                if (showAddressField) {
                    messageText += `- Alamat Lengkap: ${formData.address}, ${formData.city || "-"}, ${formData.zip || "-"}\n`;
                }
                if (showNotesField && notes) {
                    messageText += `- Catatan: ${notes}\n`;
                }

                messageText += `\n*TOTAL BAYAR:* *${formatPrice(totalPayable)}*\n\n`;
                messageText += `Mohon segera diproses ya admin. Terima kasih!`;

                const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;
                
                setStatus("success");
                setSubmittedOrder({ id: orderId, method: "whatsapp" });
                
                // Open WA link in a new window/tab
                window.open(waUrl, "_blank");
            } else {
                setStatus("success");
                setSubmittedOrder({ id: orderId, method: targetMethod });
                
                // Wait briefly then redirect client to payment details or invoice
                setTimeout(() => {
                    if (orderData.paymentUrl) {
                        window.location.href = `/checkout/payment/${orderId}`;
                    } else {
                        window.location.href = `/checkout/success?orderId=${orderId}`;
                    }
                }, 1000);
            }
        } catch (err) {
            console.error("Submission failed:", err);
            setStatus("error");
        } finally {
            setIsProcessing(false);
        }
    };

    // Render loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center py-20 font-sans">
                <Loader2 className="animate-spin text-zinc-400 mr-2" size={24} />
                <span className="text-sm text-zinc-500 font-medium">Memuat formulir pemesanan...</span>
            </div>
        );
    }

    // Render auto-deactivated state
    if (!isActive) {
        return (
            <div className="max-w-2xl mx-auto my-8 p-8 border border-red-200/50 rounded-2xl bg-red-500/5 text-red-600 text-center font-sans">
                <span className="text-2xl mb-2 block">⚠️</span>
                <h3 className="text-md font-bold mb-1 text-red-800">Store Integration Required</h3>
                <p className="text-xs text-red-600/80 max-w-md mx-auto leading-relaxed">
                    Form pemesanan ini memerlukan integrasi toko aktif di platform Anda.
                </p>
            </div>
        );
    }

    // Render configuration error state (no product selected)
    if (!productId || !product) {
        return (
            <div className="max-w-2xl mx-auto my-8 p-8 border border-amber-200/50 rounded-2xl bg-amber-500/5 text-amber-700 text-center font-sans">
                <span className="text-2xl mb-2 block">🛍️</span>
                <h3 className="text-md font-bold mb-1 text-amber-800">Pilih Produk</h3>
                <p className="text-xs text-amber-700/80 max-w-md mx-auto leading-relaxed font-normal">
                    Silakan pilih produk terlebih dahulu di panel pengaturan editor visual untuk menampilkan form pemesanan.
                </p>
            </div>
        );
    }

    // Render success checkout state
    if (status === "success" && submittedOrder) {
        return (
            <section className={`${id} px-4 font-sans`} style={{ backgroundColor }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .${id} {
                        padding-top: ${getVal(padding, 40)}px;
                        padding-bottom: ${getVal(padding, 40)}px;
                    }
                    .${id} .success-card {
                        border-radius: ${getVal(borderRadius, 16)}px;
                    }
                    @media (max-width: 768px) {
                        .${id} {
                            padding-top: ${getTabletVal(padding, 32)}px;
                            padding-bottom: ${getTabletVal(padding, 32)}px;
                        }
                    }
                    @media (max-width: 640px) {
                        .${id} {
                            padding-top: ${getMobileVal(padding, 24)}px;
                            padding-bottom: ${getMobileVal(padding, 24)}px;
                        }
                    }
                `}} />
                <div className="max-w-2xl mx-auto">
                    <div className="success-card bg-white p-8 border border-zinc-200/80 shadow-xl text-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                            <CheckCircle size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Pemesanan Berhasil!</h2>
                        <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto leading-relaxed">
                            {submittedOrder.method === "whatsapp" 
                                ? "Terima kasih! Pesanan Anda telah dirangkum. Silakan kirimkan chat ke Admin di WhatsApp untuk menyelesaikan pembayaran."
                                : "Pesanan Anda berhasil dikonfirmasi. Mengarahkan Anda ke halaman rincian pembayaran..."}
                        </p>
                        
                        <div className="bg-zinc-50 rounded-xl p-4 mb-6 border border-zinc-100 max-w-xs mx-auto">
                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-1">ID Pesanan</p>
                            <p className="font-mono text-xs font-bold text-zinc-900 select-all tracking-wider">
                                #{submittedOrder.id.slice(0, 8).toUpperCase()}
                            </p>
                        </div>

                        {submittedOrder.method === "whatsapp" && (
                            <button
                                onClick={() => {
                                    setStatus("idle");
                                    setSubmittedOrder(null);
                                }}
                                className="px-6 py-2.5 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 transition-all outline-none"
                            >
                                Buat Pesanan Baru
                            </button>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`${id} px-4 font-sans`} style={{ backgroundColor }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .${id} {
                    padding-top: ${getVal(padding, 40)}px;
                    padding-bottom: ${getVal(padding, 40)}px;
                }
                .${id} .order-form-card {
                    border-radius: ${getVal(borderRadius, 16)}px;
                }
                .${id} .highlight-text {
                    color: ${mainColor};
                }
                .${id} .btn-primary {
                    background-color: ${mainColor};
                    color: #ffffff;
                }
                .${id} .btn-primary:hover:not(:disabled) {
                    opacity: 0.95;
                }
                @media (max-width: 768px) {
                    .${id} {
                        padding-top: ${getTabletVal(padding, 32)}px;
                        padding-bottom: ${getTabletVal(padding, 32)}px;
                    }
                    .${id} .order-form-card {
                        border-radius: ${getTabletVal(borderRadius, 12)}px;
                    }
                }
                @media (max-width: 640px) {
                    .${id} {
                        padding-top: ${getMobileVal(padding, 24)}px;
                        padding-bottom: ${getMobileVal(padding, 24)}px;
                    }
                    .${id} .order-form-card {
                        border-radius: ${getMobileVal(borderRadius, 8)}px;
                    }
                }
            `}} />
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Form Fields */}
                    <div className="lg:col-span-7 space-y-6">
                        
                        {/* Title & Description */}
                        {formTitle && (
                            <h2 className="text-xl font-extrabold tracking-tight text-zinc-900">
                                {formTitle}
                            </h2>
                        )}

                        {/* Transaction Method Tabs */}
                        {showOrders && showWhatsapp && (
                            <div className="bg-white border border-zinc-200/80 rounded-xl p-4 shadow-sm">
                                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Pilih Metode Transaksi</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setUserSelectedMethod("system")}
                                        className={`flex flex-col items-center gap-2 p-3.5 rounded-xl border-2 transition-all ${
                                            checkoutMethod === "system"
                                                ? "bg-zinc-50/50 -translate-y-[1px] shadow-sm"
                                                : "border-zinc-100 bg-zinc-50/20 hover:bg-zinc-50/60 text-zinc-500 hover:border-zinc-200"
                                        }`}
                                        style={{ 
                                            borderColor: checkoutMethod === "system" ? mainColor : undefined,
                                        }}
                                    >
                                        <div 
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                                checkoutMethod === "system" ? "text-white shadow-sm" : "bg-zinc-200 text-zinc-600"
                                            }`}
                                            style={{ backgroundColor: checkoutMethod === "system" ? mainColor : undefined }}
                                        >
                                            <ShieldCheck size={16} />
                                        </div>
                                        <span className="text-xs font-bold text-zinc-800">Sistem Pesanan</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setUserSelectedMethod("whatsapp")}
                                        className={`flex flex-col items-center gap-2 p-3.5 rounded-xl border-2 transition-all ${
                                            checkoutMethod === "whatsapp"
                                                ? "border-emerald-500 bg-emerald-500/[0.02] -translate-y-[1px] shadow-sm"
                                                : "border-zinc-100 bg-zinc-50/20 hover:bg-zinc-50/60 text-zinc-500 hover:border-zinc-200"
                                        }`}
                                    >
                                        <div 
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                                checkoutMethod === "whatsapp" ? "bg-emerald-500 text-white shadow-sm" : "bg-zinc-200 text-zinc-600"
                                            }`}
                                        >
                                            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-zinc-800">Transaksi via WhatsApp</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        <form id="order-form-builder" onSubmit={onSubmit} className="space-y-4">
                            {/* Full Name */}
                            {showNameField && (
                                <div className="space-y-1.5">
                                    {showLabels && <label htmlFor="order-name" className="text-xs font-semibold text-zinc-700 block">Nama Lengkap</label>}
                                    <input
                                        id="order-name"
                                        type="text"
                                        name="name"
                                        required
                                        disabled={isProcessing}
                                        placeholder="Contoh: Budi Sudarsono"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50"
                                    />
                                </div>
                            )}

                            {/* Phone */}
                            {showPhoneField && (
                                <div className="space-y-1.5">
                                    {showLabels && <label htmlFor="order-phone" className="text-xs font-semibold text-zinc-700 block">Nomor Telepon / WhatsApp</label>}
                                    <input
                                        id="order-phone"
                                        type="tel"
                                        name="phone"
                                        required
                                        disabled={isProcessing}
                                        placeholder="Contoh: 081234567890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50"
                                    />
                                </div>
                            )}

                            {/* Email */}
                            {showEmailField && (
                                <div className="space-y-1.5">
                                    {showLabels && <label htmlFor="order-email" className="text-xs font-semibold text-zinc-700 block">Alamat Email</label>}
                                    <input
                                        id="order-email"
                                        type="email"
                                        name="email"
                                        required
                                        disabled={isProcessing}
                                        placeholder="budi@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50"
                                    />
                                </div>
                            )}

                            {/* Address details */}
                            {showAddressField && (
                                <div className="space-y-3.5 border-t border-zinc-100 pt-4">
                                    <div className="space-y-1.5">
                                        {showLabels && <label htmlFor="order-address" className="text-xs font-semibold text-zinc-700 block">Alamat Lengkap</label>}
                                        <input
                                            id="order-address"
                                            type="text"
                                            name="address"
                                            required
                                            disabled={isProcessing}
                                            placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            {showLabels && <label htmlFor="order-city" className="text-xs font-semibold text-zinc-700 block">Kota / Kabupaten</label>}
                                            <input
                                                id="order-city"
                                                type="text"
                                                name="city"
                                                required
                                                disabled={isProcessing}
                                                placeholder="Contoh: Jakarta Pusat"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            {showLabels && <label htmlFor="order-zip" className="text-xs font-semibold text-zinc-700 block">Kode POS</label>}
                                            <input
                                                id="order-zip"
                                                type="text"
                                                name="zip"
                                                required
                                                disabled={isProcessing}
                                                placeholder="Contoh: 10110"
                                                value={formData.zip}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Courier selection */}
                            {showCourierField && (
                                <div className="space-y-1.5">
                                    {showLabels && <label htmlFor="order-courier" className="text-xs font-semibold text-zinc-700 block">Opsi Pengiriman</label>}
                                    <select
                                        id="order-courier"
                                        value={courier}
                                        disabled={isProcessing}
                                        onChange={(e) => setCourier(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50 cursor-pointer"
                                    >
                                        <option value="JNE">JNE (Gratis Ongkir)</option>
                                        <option value="J&T">J&T (Gratis Ongkir)</option>
                                        <option value="Sicepat">Sicepat (Gratis Ongkir)</option>
                                        <option value="POS Indonesia">POS Indonesia (Gratis Ongkir)</option>
                                    </select>
                                </div>
                            )}

                            {/* Notes */}
                            {showNotesField && (
                                <div className="space-y-1.5">
                                    {showLabels && <label htmlFor="order-notes" className="text-xs font-semibold text-zinc-700 block">Catatan Pesanan</label>}
                                    <textarea
                                        id="order-notes"
                                        rows={3}
                                        disabled={isProcessing}
                                        placeholder="Catatan tambahan (opsional)..."
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-normal text-zinc-800 focus:ring-4 focus:ring-zinc-500/5 focus:border-zinc-400 transition-all outline-none disabled:opacity-50 resize-none"
                                    />
                                </div>
                            )}
                        </form>

                        {/* Payment Method Cards */}
                        {showPaymentField && checkoutMethod === "system" && (
                            <div className="space-y-4 pt-4 border-t border-zinc-100 animate-in fade-in duration-300">
                                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <ShieldCheck size={14} className="text-zinc-500" /> Metode Pembayaran
                                </h3>

                                {paymentSettings ? (
                                    <div className="space-y-3.5">
                                        {/* Sub tabs for automatic / manual */}
                                        {paymentSettings.duitkuEnabled && (paymentSettings.bankName && paymentSettings.accountNumber) && (
                                            <div className="grid grid-cols-2 gap-2 bg-zinc-100/50 border border-zinc-200/50 p-1 rounded-xl">
                                                <button
                                                    type="button"
                                                    onClick={() => setSystemPaymentMethod("system")}
                                                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all outline-none ${
                                                        systemPaymentMethod === "system"
                                                            ? "bg-white text-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                                                            : "text-zinc-500 hover:text-zinc-700"
                                                    }`}
                                                >
                                                    Otomatis (Instant)
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setSystemPaymentMethod("manual")}
                                                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all outline-none ${
                                                        systemPaymentMethod === "manual"
                                                            ? "bg-white text-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                                                            : "text-zinc-500 hover:text-zinc-700"
                                                    }`}
                                                >
                                                    Transfer Manual
                                                </button>
                                            </div>
                                        )}

                                        {systemPaymentMethod === "system" && paymentSettings.duitkuEnabled ? (
                                            <div 
                                                className="p-4 rounded-xl border transition-all"
                                                style={{ 
                                                    backgroundColor: `${mainColor}04`, 
                                                    borderColor: `${mainColor}15` 
                                                }}
                                            >
                                                <h4 className="font-bold text-zinc-850 text-xs">Sistem Pembayaran Instan (Duitku)</h4>
                                                <p className="text-[11px] text-zinc-500 font-normal mt-0.5 mb-3 leading-relaxed">
                                                    Selesaikan pesanan secara instan via QRIS, Virtual Account, GoPay, OVO, ShopeePay, DANA, dll.
                                                </p>
                                                <div className="flex gap-1.5 flex-wrap">
                                                    {["QRIS", "BCA", "Mandiri", "BNI", "BRI", "Gopay", "OVO", "Dana"].map((logo) => (
                                                        <span key={logo} className="bg-white border border-zinc-200 text-[10px] font-bold text-zinc-600 px-2.5 py-1 rounded-md shadow-sm select-none">
                                                            {logo}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            /* Manual Bank Transfer Card */
                                            (paymentSettings.bankName && paymentSettings.accountNumber) ? (
                                                <div 
                                                    className="p-4 rounded-xl border transition-all"
                                                    style={{ 
                                                        backgroundColor: `${mainColor}04`, 
                                                        borderColor: `${mainColor}15` 
                                                    }}
                                                >
                                                    <h4 className="font-bold text-zinc-850 text-xs mb-3">Transfer Bank Manual</h4>
                                                    <div className="bg-white p-3 rounded-lg border border-zinc-200/80 shadow-sm space-y-2.5 text-xs font-normal">
                                                        <div className="flex justify-between">
                                                            <span className="text-zinc-500">Nama Bank:</span>
                                                            <span className="font-semibold text-zinc-800">{paymentSettings.bankName}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-zinc-500">Nama Pemilik:</span>
                                                            <span className="font-semibold text-zinc-800">{paymentSettings.accountHolder}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-zinc-500">Nomor Rekening:</span>
                                                            <div className="flex items-center gap-1">
                                                                <span className="font-mono font-bold text-zinc-800 text-sm tracking-tight">{paymentSettings.accountNumber}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={copyToClipboard}
                                                                    className="p-1 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-500 transition-all outline-none"
                                                                >
                                                                    {copied ? <Check size={10} className="text-emerald-600 font-bold" /> : <Copy size={10} />}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="p-4 bg-amber-50 text-amber-800 rounded-xl text-xs font-medium border border-amber-100 flex items-start gap-2">
                                                    <Info size={14} className="mt-0.5 flex-shrink-0 text-amber-600" />
                                                    <span>Metode pembayaran manual belum terpasang. Harap lengkapi di dashboard.</span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-4 bg-zinc-50 text-zinc-500 rounded-xl text-xs font-medium border border-zinc-200 flex items-start gap-2">
                                        <Loader2 className="animate-spin text-zinc-400 mt-0.5" size={14} />
                                        <span>Memuat setelan metode pembayaran...</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {checkoutMethod === "whatsapp" && (
                            <div className="p-4 rounded-xl border bg-emerald-50/20 border-emerald-500/20 shadow-sm animate-in fade-in duration-300">
                                <h3 className="font-bold text-emerald-800 text-xs mb-1">Pemesanan Langsung WhatsApp</h3>
                                <p className="text-[11px] text-zinc-600 font-normal leading-relaxed">
                                    Semua detail pesanan akan secara otomatis terformat dalam pesan chat WhatsApp dan dikirim ke Admin toko Anda setelah Anda menekan tombol submit.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Order Summary (Sticky Desktop Card) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-6 space-y-6">
                        <div className="order-form-card bg-white p-6 border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-5">
                            
                            {/* Product Card Info */}
                            <div className="flex gap-4 items-center pb-4 border-b border-zinc-100">
                                <div className="w-16 h-16 bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 flex-shrink-0 relative shadow-sm flex items-center justify-center">
                                    {product.images && product.images.length > 0 ? (
                                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <Package className="text-zinc-300" size={24} />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-zinc-800 text-sm truncate">{product.name}</h4>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="font-extrabold text-zinc-900 text-sm">{formatPrice(basePrice)}</span>
                                        {originalPrice > basePrice && (
                                            <span className="text-zinc-400 line-through text-[10px] font-normal">{formatPrice(originalPrice)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Summary calculation interactive items */}
                            {showSummaryField && (
                                <div className="space-y-4">
                                    {/* Quantity Select */}
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-semibold text-zinc-500">Kuantitas</span>
                                        <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden h-8">
                                            <button
                                                type="button"
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-8 h-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 font-bold transition-colors outline-none text-sm"
                                            >
                                                -
                                            </button>
                                            <span className="px-3.5 font-bold text-zinc-800 select-none">{quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-8 h-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 font-bold transition-colors outline-none text-sm"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Coupon Discount code */}
                                    {showDiscountField && (
                                        <div className="space-y-2 border-t border-zinc-100 pt-3.5">
                                            {appliedDiscount ? (
                                                <div className="flex justify-between items-center bg-emerald-50 text-emerald-800 border border-emerald-500/20 px-3 py-2 rounded-lg text-xs">
                                                    <span className="font-semibold">Kupon Aktif: {appliedDiscount.code}</span>
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveDiscount}
                                                        className="text-emerald-700 hover:text-emerald-900 font-bold underline outline-none"
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Kode diskon (e.g. DISKON10)"
                                                        value={discountCode}
                                                        onChange={(e) => setDiscountCode(e.target.value)}
                                                        className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-1.5 text-xs focus:border-zinc-400 outline-none transition-all text-zinc-800 font-medium"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleApplyDiscount}
                                                        className="px-3 py-1.5 border border-zinc-300 hover:bg-zinc-50 text-zinc-700 rounded-lg text-xs font-bold active:scale-95 transition-all outline-none"
                                                    >
                                                        Gunakan
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Subtotal, Shipping, and Total Pay */}
                                    <div className="space-y-2.5 pt-3.5 border-t border-zinc-100 text-xs font-medium text-zinc-500">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span className="text-zinc-800 font-semibold">{formatPrice(subtotal)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pengiriman</span>
                                            <span className="text-emerald-600 font-bold">Gratis</span>
                                        </div>
                                        {appliedDiscount && (
                                            <div className="flex justify-between text-emerald-700">
                                                <span>Diskon</span>
                                                <span className="font-bold">-{formatPrice(discountAmount)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-end pt-3 border-t border-zinc-100">
                                            <div>
                                                <span className="text-xs font-semibold text-zinc-500">Total Bayar</span>
                                                <div className="text-lg font-black tracking-tight mt-0.5 highlight-text">
                                                    {formatPrice(totalPayable)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            {showSubmitButton && (
                                <button
                                    form="order-form-builder"
                                    type="submit"
                                    disabled={isProcessing}
                                    className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center outline-none"
                                    style={{
                                        backgroundColor: checkoutMethod === "whatsapp" ? "#22c55e" : mainColor,
                                        boxShadow: `0 4px 14px -3px ${checkoutMethod === "whatsapp" ? "rgba(34, 197, 94, 0.4)" : `${mainColor}40`}`
                                    }}
                                >
                                    {isProcessing ? (
                                        <Loader2 className="animate-spin text-white mr-2" size={14} />
                                    ) : checkoutMethod === "whatsapp" ? (
                                        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current text-white mr-2" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    ) : (
                                        <ArrowRight className="mr-1.5" size={14} />
                                    )}
                                    {isProcessing 
                                        ? "Memproses..." 
                                        : checkoutMethod === "whatsapp" 
                                            ? "Kirim Pesanan ke WhatsApp" 
                                            : submitButtonText}
                                </button>
                            )}

                            {status === "error" && (
                                <p className="text-red-500 text-center text-xs font-semibold">
                                    Gagal mengirim pesanan. Silakan coba kembali.
                                </p>
                            )}

                            <p className="text-center text-[10px] text-zinc-400 flex items-center justify-center font-bold tracking-wider uppercase gap-1.5 pt-2">
                                <ShieldCheck size={14} className="text-emerald-600" /> Transaksi Aman & Terenkripsi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
