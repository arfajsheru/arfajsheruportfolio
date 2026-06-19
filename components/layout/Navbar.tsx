"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { NavLink } from "@/components/shared/NavLink";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section highlighting logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="text-xl font-semibold tracking-tight">
            Arfaj Sheru
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                active={activeSection === link.href.substring(1)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="ml-4">
              <Button asChild className="rounded-full px-6 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <a href="/Arfaj_Sheru_CV.pdf" target="_blank" rel="noopener noreferrer" download>
                  Download CV <Download className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </nav>

          <div className="md:hidden">
            <MobileMenu links={NAV_LINKS} activeSection={activeSection} />
          </div>
        </div>
      </Container>
    </header>
  );
}
