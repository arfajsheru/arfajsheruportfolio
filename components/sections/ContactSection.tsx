"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "arfajsheru@example.com",
    href: "mailto:arfajsheru@example.com",
    description: "Drop me an email anytime.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 XXXXX XXXXX",
    href: "https://wa.me/yourwhatsapp",
    description: "Available for quick chats.",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/arfajsheru",
    href: "https://github.com/arfajsheru",
    description: "See my open-source work.",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/arfajsheru",
    href: "https://linkedin.com/in/arfajsheru",
    description: "Connect professionally.",
  },
];

const availabilityItems = [
  "Full-Time Employment",
  "Freelance Projects",
  "Enterprise Applications",
  "Technical Consulting",
  "Remote Collaboration",
];

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: connect to a form service (Formspree, Resend, etc.)
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-12 text-center h-full"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
          <Send className="h-6 w-6 text-foreground" />
        </div>
        <h4 className="text-2xl font-black tracking-tight text-foreground">Message Sent!</h4>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="What&apos;s this about?"
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/40 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/40 transition-colors resize-none"
        />
      </div>

      <Button
        type="submit"
        className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold tracking-wide mt-2 group"
      >
        Send Message
        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-16 md:gap-24">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
                Let&apos;s{" "}
                <span className="italic font-light text-muted-foreground">Work</span>
                <br />
                Together
              </h2>
              <p className="text-base text-muted-foreground max-w-sm leading-relaxed md:text-right">
                Open to full-time roles, freelance projects, and technical collaborations.
                I respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* ── Location + Availability ─────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available for Opportunities</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
              <span className="text-sm font-medium text-foreground">Open to Remote</span>
            </div>
          </motion.div>

          {/* ── Main Grid ───────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

            {/* Left: Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <h3 className="text-xl font-black tracking-tight text-foreground mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </motion.div>

            {/* Right: Links + Availability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="flex flex-col gap-4"
            >
              {/* Contact Links */}
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    variants={itemFade}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-foreground mt-0.5 truncate">
                        {link.value}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
                  </motion.a>
                );
              })}

              {/* Availability Card */}
              <motion.div
                variants={itemFade}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  Open For
                </p>
                <div className="flex flex-col gap-2">
                  {availabilityItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Footer Divider ───────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
          >
            <p className="text-sm font-bold tracking-tight text-foreground">
              Arfaj Sheru · Full Stack Developer
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, TypeScript & Tailwind CSS · {new Date().getFullYear()}
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
