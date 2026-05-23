"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!formRef.current) return;

        try {
            setLoading(true);

            await emailjs.sendForm(
                "service_oyjb9ui",
                "template_92hq2fi",
                formRef.current,
                "pj2U-Ey4LL3mtyrZe"
            );

            alert("Message sent successfully!");

            formRef.current.reset();
        } catch (error) {
            console.error(error);

            alert("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            {/* NAME */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-black/10 bg-black/2 px-5 py-4 outline-none transition focus:border-black/20 dark:border-white/10 dark:bg-white/3 dark:focus:border-white/20"
                />
            </div>

            {/* EMAIL */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-black/10 bg-black/2 px-5 py-4 outline-none transition focus:border-black/20 dark:border-white/10 dark:bg-white/3 dark:focus:border-white/20"
                />
            </div>

            {/* MESSAGE */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Message
                </label>

                <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-2xl border border-black/10 bg-black/2 px-5 py-4 outline-none transition focus:border-black/20 dark:border-white/10 dark:bg-white/3 dark:focus:border-white/20"
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-black px-6 py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-black"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}