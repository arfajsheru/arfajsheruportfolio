"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, MessageCircle, MapPin, Download, ArrowRight, Briefcase, FolderGit2, Cpu, MonitorSmartphone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const technologies = [
  "React.js", "Next.js", "React Native", "Node.js",
  "NestJS", "PostgreSQL", "MongoDB", "Prisma", "TypeScript"
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/arfajsheru", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/arfajsheru", label: "LinkedIn" },
  { icon: Mail, href: "mailto:arfajsheru@example.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/yourwhatsapp", label: "WhatsApp" },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Typewriter = () => {
  const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Mobile Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="inline-block min-h-[40px] md:min-h-[48px] lg:min-h-[60px]">
      {text}
      <span className="animate-pulse text-foreground/50">|</span>
    </span>
  );
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 flex items-center overflow-hidden bg-[url('/assets/hero-mobile.png')] md:bg-[url('/assets/hero-desktop.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Optional: Add a subtle overlay if the background image affects text readability */}
      {/* <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" /> */}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Side: Content */}
          <motion.div
            className="flex flex-col space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Top Badge */}
            <motion.div variants={fadeUpVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 text-sm font-medium text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mumbai, India • Available for Freelance</span>
              </div>
            </motion.div>

            {/* Headings */}
            <motion.div variants={fadeUpVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground flex flex-col sm:flex-row sm:items-center">
                <Typewriter />
              </h1>
            </motion.div>

            {/* Description - Made shorter & wider for desktop */}
            <motion.p variants={fadeUpVariants} className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
              Experience in building scalable enterprise web and mobile applications. Specializing in modern architectures using React.js, Next.js, Node.js, and Prisma to deliver high-performance solutions.
            </motion.p>

            {/* CTA Buttons & Socials */}
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <div className="flex flex-row gap-3 w-full sm:w-auto">
                <Button asChild size="lg" className="w-1/2 sm:w-auto h-12 px-5 sm:h-14 sm:px-8 text-sm sm:text-base rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl group">
                  <Link href="#projects">
                    View Projects <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-1/2 sm:w-auto h-12 px-5 sm:h-14 sm:px-8 text-sm sm:text-base rounded-full border-border/50 bg-background/50 backdrop-blur-md hover:bg-muted/50 transition-all shadow-sm hover:shadow-md">
                  <a href="/Arfaj_Sheru_CV.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" /> Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Unique SVG Stats Boxes */}
            <motion.div variants={fadeUpVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5">
              {[
                { icon: Briefcase, top: "1+", bottom: "Years Experience" },
                { icon: FolderGit2, top: "2+", bottom: "Major Projects" },
                { icon: Cpu, top: "10+", bottom: "Technologies" },
                { icon: MonitorSmartphone, top: "Full Stack", bottom: "Developer" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative group flex flex-col items-start p-5 bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md text-left space-y-3 h-full min-h-[110px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  style={{
                    clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)"
                  }}
                >
                  {/* Decorative SVG Accent inside the box */}
                  <svg className="absolute top-0 right-0 w-16 h-16 text-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0L0 100" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 20L20 100" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 40L40 100" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 60L60 100" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 80L80 100" stroke="currentColor" strokeWidth="2" />
                  </svg>

                  {/* Accent colored borders on the cut corners using absolute positioning */}
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-foreground/20 group-hover:bg-foreground/50 transition-colors" />
                  <div className="absolute top-0 left-0 w-[2px] h-4 bg-foreground/20 group-hover:bg-foreground/50 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-foreground/20 group-hover:bg-foreground/50 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-4 bg-foreground/20 group-hover:bg-foreground/50 transition-colors" />

                  <div className="relative z-10 p-2.5 rounded-br-xl rounded-tl-xl bg-foreground/5 text-foreground group-hover:bg-foreground/10 transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="relative z-10 flex flex-col">
                    <span className="text-2xl font-bold text-foreground leading-none">{stat.top}</span>
                    <span className="text-xs text-muted-foreground font-medium mt-1.5">{stat.bottom}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={fadeUpVariants} className="pt-4">
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-xs font-semibold rounded-full border border-border/50 bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md text-foreground hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Enhanced Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-8 h-full flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] rounded-xl border border-zinc-800/80 bg-[#1e1e1e] shadow-2xl overflow-hidden flex flex-col font-mono text-sm group">
              {/* Traffic light window controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#333333]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-4 text-xs text-[#858585] font-medium tracking-wide">developer.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto text-[#abb2bf] text-[13px] sm:text-sm leading-relaxed">
                <div className="flex">
                  {/* Line numbers */}
                  <div className="flex flex-col text-right pr-4 text-[#495162] select-none">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                  </div>

                  {/* Code */}
                  <div className="flex flex-col">
                    <span>
                      <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> {"{"}
                    </span>
                    <span className="pl-6">
                      <span className="text-[#e06c75]">name</span>: <span className="text-[#98c379]">"Arfaj Sheru"</span>,
                    </span>
                    <span className="pl-6">
                      <span className="text-[#e06c75]">role</span>: <span className="text-[#98c379]">"Full Stack Developer"</span>,
                    </span>
                    <span className="pl-6">
                      <span className="text-[#e06c75]">skills</span>: <span className="text-[#abb2bf]">[</span><span className="text-[#98c379]">"React"</span>, <span className="text-[#98c379]">"Next.js"</span>, <span className="text-[#98c379]">"Node.js"</span>, <span className="text-[#98c379]">"React Native"</span><span className="text-[#abb2bf]">]</span>,
                    </span>
                    <span className="pl-6">
                      <span className="text-[#e06c75]">location</span>: <span className="text-[#98c379]">"Mumbai, India"</span>,
                    </span>
                    <span className="pl-6">
                      <span className="text-[#e06c75]">availableForWork</span>: <span className="text-[#d19a66]">true</span>,
                    </span>
                    <span>{"};"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
