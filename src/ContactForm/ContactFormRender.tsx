"use client";

import React from "react";
import { ContactFormProps } from "./types";

export const ContactFormRender = ({ content }: ContactFormProps) => {
    const { title, description, submitText } = content;
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const formData = new FormData(e.currentTarget);

        // 🛡️ Proteksi Spam via Honeypot: Jika field tersembunyi ini terisi oleh spambot, batalkan API post
        if (formData.get("website_honeypot")) {
            console.warn("Spambot detected via honeypot field");
            setTimeout(() => {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            }, 800);
            return;
        }

        const data = Object.fromEntries(formData.entries());
        delete data.website_honeypot; // Bersihkan field honeypot dari payload API

        // Sertakan emailTo dari konfigurasi blok visual editor
        const payload = {
            ...data,
            emailTo: content.emailTo || "info@example.com"
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed");
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch {
            setStatus("error");
        }
    };

    const isLoading = status === "loading";

    return (
        <section className="py-16 px-4 bg-white font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
                </div>

                {status === "success" ? (
                    <div className="max-w-2xl mx-auto bg-green-50 p-8 rounded-xl text-center text-green-800 border border-green-200">
                        <h3 className="text-xl font-bold mb-2">Pesan Terkirim!</h3>
                        <p>Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.</p>
                        <button onClick={() => setStatus("idle")} className="mt-4 text-sm underline hover:text-green-900">Kirim pesan lain</button>
                    </div>
                ) : (
                    <form className="max-w-2xl mx-auto space-y-6 bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm" onSubmit={onSubmit}>
                        {/* 🛡️ Honeypot Field: Tersembunyi secara visual untuk manusia */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                            <input 
                                type="text" 
                                name="website_honeypot" 
                                tabIndex={-1} 
                                autoComplete="off" 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                                <input id="contact-name" required name="name" type="text" disabled={isLoading} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none disabled:opacity-50" placeholder="Masukkan nama anda" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input id="contact-email" required name="email" type="email" disabled={isLoading} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none disabled:opacity-50" placeholder="email@contoh.com" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                            <input id="contact-subject" name="subject" type="text" disabled={isLoading} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none disabled:opacity-50" placeholder="Perihal pesanan..." />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                            <textarea id="contact-message" required name="message" rows={4} disabled={isLoading} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none disabled:opacity-50" placeholder="Tulis pesan anda disini..."></textarea>
                        </div>
                        <div className="pt-2">
                            <button disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-lg transition-transform active:scale-95 shadow-lg shadow-blue-500/30">
                                {isLoading ? "Mengirim..." : submitText}
                            </button>
                            {status === "error" && <p className="text-red-500 text-center mt-2 text-sm">Gagal mengirim pesan. Silakan coba lagi.</p>}
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

