import Link from "next/link";

import Section from "@/components/common/section";
import SectionBadge from "@/components/common/section-badge";
import SectionDescription from "@/components/common/section-description";
import SectionHeading from "@/components/common/section-heading";

import ContactForm from "./ContactForm";
import { SOCIAL_LINKS } from "./social-links";

export default function ContactSection() {
    return (
        <Section id="contact" className="bg-white dark:bg-black">
            <div className="grid gap-16 lg:grid-cols-2">
                {/* LEFT */}
                <div>
                    <SectionBadge>Contact</SectionBadge>

                    <SectionHeading>
                        Let&apos;s build something
                        great together.
                    </SectionHeading>

                    <SectionDescription>
                        Feel free to reach out for collaboration,
                        freelance opportunities, or just to say hello.
                    </SectionDescription>

                    {/* SOCIAL LINKS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = social.icon;

                            return (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-black/2 px-5 py-3 transition hover:border-black/20 hover:bg-black/4 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5"
                                >
                                    <Icon className="text-lg" />

                                    <span>{social.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="rounded-4xl border border-black/10 bg-black/2 p-8 dark:border-white/10 dark:bg-white/3">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}