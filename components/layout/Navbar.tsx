"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Download, X, Menu } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">

            {/* Logo / Wordmark */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="group flex items-center gap-2.5"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background text-[11px] font-black shrink-0 transition-all duration-300 group-hover:scale-95">
                AS
              </div>
              <span className="text-sm font-bold tracking-tight text-foreground">
                Arfaj Sheru
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-foreground/6"
                        transition={{ type: "spring", stiffness: 380, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/Arfaj_Sheru_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted/50"
              >
                <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                Resume
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-bold text-background transition-all duration-200 hover:bg-foreground/90"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted/50"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 36 }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-72 flex-col bg-background border-l border-border md:hidden"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background text-[11px] font-black">
                    AS
                  </div>
                  <span className="text-sm font-bold text-foreground">Arfaj Sheru</span>
                </div>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = active === link.href.slice(1);
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-foreground/6 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Panel Footer CTAs */}
              <div className="p-4 border-t border-border flex flex-col gap-3">
                <a
                  href="/Arfaj_Sheru_CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" /> Download Resume
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="flex h-10 items-center justify-center gap-2 rounded-full bg-foreground text-sm font-bold text-background hover:bg-foreground/90 transition-colors"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
