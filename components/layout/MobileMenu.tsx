"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/shared/NavLink";

interface MobileMenuProps {
  links: { name: string; href: string }[];
  activeSection: string;
}

export function MobileMenu({ links, activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b bg-background shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                active={activeSection === link.href.substring(1)}
                onClick={closeMenu}
                className="text-base"
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="w-full" asChild onClick={closeMenu}>
              <a href="/Arfaj_Sheru_CV.pdf" target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
