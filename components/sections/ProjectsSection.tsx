"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Smartphone,
  ShoppingCart,
  Layers,
  Database,
  Code2,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/shared/Container";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    index: "01",
    label: "Enterprise CRM",
    name: "Furnix CRM",
    tagline: "Enterprise business management platform for furniture manufacturers.",
    type: "Web Application",
    icon: Layers,
    problem:
      "Furniture manufacturers were managing leads, production, and delivery using disconnected spreadsheets — causing delays, missed follow-ups, and zero operational visibility.",
    solution:
      "Built a comprehensive CRM and business management platform centralizing lead management, order tracking, production workflows, and delivery management in one unified system.",
    impact: [
      "Centralized lead pipeline and follow-up workflows",
      "Real-time production and order status visibility",
      "Track & Trace system for delivery operations",
      "Automated business process notifications",
    ],
    techStack: [
      { label: "Frontend", tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", tech: ["Node.js", "NestJS", "REST APIs"] },
      { label: "Database", tech: ["PostgreSQL", "Prisma ORM"] },
      { label: "Mobile", tech: ["React Native", "Expo"] },
    ],
    highlights: [
      { icon: Users, label: "Lead Management", value: "Full Pipeline" },
      { icon: TrendingUp, label: "Production Tracking", value: "Real-Time" },
      { icon: Zap, label: "Workflow Automation", value: "Automated" },
    ],
    status: "Production",
  },
  {
    index: "02",
    label: "E-Commerce Platform",
    name: "Pestobazaar",
    tagline: "Full-stack e-commerce platform for pet products and accessories.",
    type: "E-Commerce Application",
    icon: ShoppingCart,
    problem:
      "Pet product retailers lacked a dedicated, performant e-commerce platform with efficient inventory management, seamless checkout flows, and mobile-first shopping experiences.",
    solution:
      "Developed a full-stack e-commerce application featuring product catalog management, shopping cart, secure payment integration, and an admin dashboard for inventory and order management.",
    impact: [
      "Complete product catalog with category management",
      "Secure Razorpay payment gateway integration",
      "Admin dashboard for orders and inventory",
      "Mobile-optimized shopping experience",
    ],
    techStack: [
      { label: "Frontend", tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", tech: ["Node.js", "Express.js", "REST APIs"] },
      { label: "Database", tech: ["MongoDB", "Mongoose"] },
      { label: "Payments", tech: ["Razorpay", "JWT Auth"] },
    ],
    highlights: [
      { icon: ShoppingCart, label: "E-Commerce", value: "Full Stack" },
      { icon: Globe, label: "Responsive", value: "Mobile First" },
      { icon: CheckCircle2, label: "Payments", value: "Integrated" },
    ],
    status: "Production",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const ProjectIcon = project.icon;

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Scroll-drawn left accent line */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute left-0 top-0 bottom-0 w-px bg-foreground/20 origin-top hidden md:block"
      />

      <div className="md:pl-12 pt-10 pb-16 border-b border-border last:border-0">
        {/* Project Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-foreground">
              <ProjectIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                  {project.index}
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {project.label}
                </span>
                <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground">
                  {project.status}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
                {project.name}
              </h3>
              <p className="mt-3 text-base text-muted-foreground max-w-lg leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground shrink-0 mt-2 hidden md:block" />
        </motion.div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isEven ? "" : "lg:flex lg:flex-row-reverse"}`}>
          {/* Left: Problem + Solution */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            {/* Problem */}
            <motion.div variants={itemFade} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Problem
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div variants={itemFade} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Solution
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-3 gap-3"
            >
              {project.highlights.map((h) => {
                const HIcon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    variants={itemFade}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-center"
                  >
                    <HIcon className="h-4 w-4 text-muted-foreground mx-auto" />
                    <p className="text-sm font-black text-foreground">{h.value}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{h.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Impact + Tech */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            {/* Impact */}
            <motion.div variants={itemFade} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-5">
                Impact
              </p>
              <ul className="flex flex-col gap-3">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/40 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemFade} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-5">
                Tech Stack
              </p>
              <div className="flex flex-col gap-4">
                {project.techStack.map((cat) => (
                  <div key={cat.label}>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-2">
                      {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16 md:mb-24"
        >
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
            Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
              Selected{" "}
              <span className="italic font-light text-muted-foreground">Work</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed md:text-right">
              Enterprise-grade applications built with scalable architecture, clean code, and a
              focus on real business outcomes.
            </p>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.index} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
