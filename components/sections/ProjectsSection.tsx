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
  Utensils,
  Heart,
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
    link: "https://furnixcrm.com",
    tagline: "Operations software purpose-built for modular kitchen, wardrobe, and furniture manufacturers.",
    type: "Web & Mobile Suite",
    icon: Layers,
    problem:
      "Furniture manufacturers were managing leads in spreadsheets and production in WhatsApp groups — causing delays, missed handoffs, and zero factory floor visibility.",
    solution:
      "Built a comprehensive operations platform featuring a full project lifecycle CRM, Track & Trace mobile scanning for factory floor, and Scan & Pack dispatch verification.",
    impact: [
      "End-to-end project visibility from lead to AMC",
      "Real-time machine-wise production floor tracking",
      "98% on-time delivery with zero dispatch errors",
      "Automated client notifications and billing"
    ],
    techStack: [
      { label: "Frontend", tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", tech: ["Node.js", "NestJS", "REST APIs"] },
      { label: "Database", tech: ["PostgreSQL", "Prisma ORM"] },
      { label: "Mobile", tech: ["React Native", "Expo"] },
    ],
    highlights: [
      { icon: Users, label: "CRM Lifecycle", value: "360°" },
      { icon: TrendingUp, label: "Factory Tracking", value: "Real-Time" },
      { icon: Zap, label: "On-time Delivery", value: "98%" },
    ],
    modules: [
      {
        title: "CRM Platform",
        badge: "Sales & Ops",
        description: "End-to-end lifecycle management - from first lead to after-sales AMC - with role-based access for every team member.",
        features: [
          "Lead nurturing, closure & site measurement stages",
          "Client documentation & approvals flow",
          "Production → Dispatch → Installation tracking",
          "Payment milestone capture at any project stage",
          "Franchisee Dealer Portal & target tracking",
          "AMC management (free + chargeable AMC)"
        ]
      },
      {
        title: "Track & Trace",
        badge: "Factory Floor",
        description: "Real-time factory visibility. Set up machine masters and let your team scan parts at every production stage.",
        features: [
          "Machine & worker master configurations",
          "Barcode / QR scan via mobile app interface",
          "Multi-stage tracking: Cutting, Edgebanding, Sanding, etc.",
          "API integrations with cutting/nesting software",
          "Live admin dashboard per project & machine",
          "Production bottleneck alerts"
        ]
      },
      {
        title: "Scan & Pack",
        badge: "Dispatch Operations",
        description: "Eliminate dispatch errors. Scan-to-pack ensures every piece reaches the right site in the right order.",
        features: [
          "Project-based packing workflows",
          "Multi-mode scan options for packing teams",
          "Built directly into the same mobile app",
          "Site-wise dispatch checklists",
          "Partial & full dispatch tracking"
        ]
      }
    ],
    status: "Production",
  },
  {
    index: "02",
    label: "E-Commerce Suite",
    name: "Pestobazaar",
    link: "https://pestobazaar.com",
    tagline: "E-commerce platform and cross-platform mobile applications for premium pest control solutions.",
    type: "Web & Mobile App",
    icon: ShoppingCart,
    problem:
      "Pest control operators and retail customers lacked a unified, mobile-first shopping experience with offline capability to buy professional insecticides, traps, and equipment on the go.",
    solution:
      "Engineered a full-stack e-commerce platform including a cross-platform React Native app (iOS & Android) powered by a scalable Node.js/Express backend and MongoDB cluster.",
    impact: [
      "Cross-platform iOS and Android app deployment",
      "Instant multi-attribute search and filtering engine",
      "99.9% payment success rate via webhook retry handlers",
      "Automated stock-threshold alerts and inventory sync"
    ],
    highlights: [
      { icon: ShoppingCart, label: "React Native Mobile", value: "iOS / Android" },
      { icon: Globe, label: "Payment Checkout", value: "Razorpay" },
      { icon: CheckCircle2, label: "Server Architecture", value: "Full Stack" },
    ],
    modules: [
      {
        title: "React Native App",
        badge: "Mobile (iOS & Android)",
        description: "High-performance cross-platform application developed in React Native to provide a seamless mobile shopping experience.",
        features: [
          "Single codebase deployment for iOS & Android",
          "Persistent local cart storage & offline session support",
          "Fast multi-attribute product search with instant filters",
          "Push notifications for shipping updates & deals",
          "In-app barcode scans for B2B product identification"
        ]
      },
      {
        title: "Backend API Engine",
        badge: "Server & DB",
        description: "Robust RESTful API architecture built on Node.js and Express to manage core platform data flows and business rules.",
        features: [
          "Flexible document schemas utilizing MongoDB & Mongoose",
          "JWT-based security with access & refresh token rotation",
          "Dynamic product catalog and category trees management",
          "Real-time stock level recalculation algorithms",
          "Automated PDF order invoice builder integrations"
        ]
      },
      {
        title: "Operations & Checkout",
        badge: "Integrations",
        description: "End-to-end checkout processing, payment collections, and operations dashboards.",
        features: [
          "Razorpay payment gateway with safe webhook handlers",
          "Automated dispatch notifications via Email & SMS",
          "Dynamic coupons, promo codes, and discount engines",
          "Admin control panel for order and catalog tracking"
        ]
      }
    ],
    status: "Production",
  },
  {
    index: "03",
    label: "Dining & Ordering Suite",
    name: "Cafe Rajasthan",
    link: "https://cr-hotel.vercel.app",
    tagline: "High-performance restaurant e-commerce menu and digital ordering system.",
    type: "Web Application",
    icon: Utensils,
    problem:
      "Traditional restaurants lacked an interactive digital web application enabling customers to explore menus, filter diets, and order dining items without operational friction.",
    solution:
      "Developed a modern web storefront app featuring slide-out user controls, dynamic food menu items filters, persistent wishlist state, and a multi-step order checkout flow.",
    impact: [
      "Highly responsive digital food menu and web app",
      "Robust Veg / Non-Veg diet-based filter configuration",
      "Persistent state management for wishlist and cart items",
      "Interactive multi-step order placement workflows"
    ],
    highlights: [
      { icon: ShoppingCart, label: "Food Ordering", value: "E-Commerce" },
      { icon: Globe, label: "Interface Design", value: "Responsive" },
      { icon: CheckCircle2, label: "State Management", value: "Persistent" },
    ],
    modules: [
      {
        title: "Interactive Menu",
        badge: "Client UX",
        description: "Dynamic menu presentation with visual categories, food items, and smart filters.",
        features: [
          "Diet preferences switcher (Veg / Non-Veg options)",
          "Subcategory tag filters (Soup, Starters, Drinks)",
          "Dynamic search bar with instant keyword matching",
          "Visual carousel slides for featured dining items"
        ]
      },
      {
        title: "Cart & State Engine",
        badge: "Store Management",
        description: "State-driven shopping cart counting, items addition/removals, and wishlist persistent storage.",
        features: [
          "Granular cart items addition, removals & edits",
          "Dynamic price updates and discount allocations",
          "Dedicated favorites / wishlist persistent bookmarking",
          "Smooth overlay sidebar for prompt cart checkout"
        ]
      },
      {
        title: "User Operations",
        badge: "Workflows",
        description: "Slide-out navigation profiles, checkout pages, and restaurant billing pipelines.",
        features: [
          "Interactive user account profile sidebar drawer",
          "Multi-step order review and billing checkout page",
          "Responsive order tracking history listings",
          "Frictionless client form fields validation controls"
        ]
      }
    ],
    status: "Production",
  },
  {
    index: "04",
    label: "Donation & Sponsorship Suite",
    name: "United Welfare Portal",
    link: "https://www.unitedwelfarefoundation.com/",
    tagline: "Donation management and student sponsorship platform built for transparent welfare operations.",
    type: "Web Portal",
    icon: Heart,
    problem:
      "Non-profits struggled to manage recurring sponsorships, verify student financial eligibility transparently, and keep donors updated on the direct impact of their contributions.",
    solution:
      "Engineered a secure web portal featuring a transaction-grade donation ledger, eligibility auditing workflows for student profiles, and a transparent sponsor dashboard feed.",
    impact: [
      "Streamlined recurring sponsorship tracking pipeline",
      "Automated tax-exempt receipting and ledger accounting",
      "Dynamic eligibility check & document verification workflows",
      "Real-time sponsor dashboard tracking sponsored students"
    ],
    highlights: [
      { icon: Users, label: "Student Tracking", value: "Sponsorships" },
      { icon: Globe, label: "Donation Engine", value: "Secure Ledger" },
      { icon: CheckCircle2, label: "Sponsor Access", value: "Transparent" },
    ],
    modules: [
      {
        title: "Donation Engine",
        badge: "Payments & Ledger",
        description: "Secure donation collection, recurring sponsorship pipelines, and automated ledger recording.",
        features: [
          "Integrated secure payment gateways for one-time & recurring donations",
          "Automated digital tax-exemption receipt generation",
          "Transparent fund allocation ledger tracking",
          "Real-time donation campaign metrics analytics"
        ]
      },
      {
        title: "Student & Scholar Profiles",
        badge: "Welfare Database",
        description: "Student onboarding, eligibility audits, and active academic progress tracking.",
        features: [
          "Student scholarship application processing workflows",
          "Dynamic eligibility check & document verification engine",
          "Academic performance scorecards tracking system",
          "Comprehensive student welfare database profiles"
        ]
      },
      {
        title: "Sponsor Engagement Portal",
        badge: "Transparency",
        description: "Dedicated dashboard for sponsors to track their sponsored students and communicate impact.",
        features: [
          "Sponsor self-service dashboard with profile tracking",
          "Direct student progress updates & report cards feeds",
          "Impact analytics displaying fund utilization details",
          "Automated sponsorship renewal notifications & reminders"
        ]
      }
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

      {/* Horizontal connector line connecting vertical scroll line to project icon */}
      <div className="absolute left-0 w-12 h-px bg-foreground/15 top-[68px] hidden md:block" />

      {/* Connection Node Indicator */}
      <span className="absolute left-0 top-[68px] -translate-x-[5px] -translate-y-[5px] z-10 hidden md:flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/30 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-foreground/70"></span>
      </span>

      <div className="md:pl-12 pt-10 pb-16 border-b border-border last:border-0">
        {/* Project Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          <div className="flex items-start gap-5 w-full">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-foreground shadow-sm shadow-black/5 relative transition-all duration-300">
              <ProjectIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                <span className="text-xl md:text-2xl font-mono font-medium text-foreground/30 tracking-tight shrink-0 select-none">
                  {project.index} /
                </span>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground/80 transition-colors inline-flex items-center gap-2 group/title"
                  >
                    {project.name}
                    <ArrowUpRight className="h-7 w-7 text-muted-foreground group-hover/title:text-foreground group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-300 shrink-0" />
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-3 text-base text-foreground/85 max-w-lg leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content: Problem & Solution Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Problem */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Problem
            </p>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{project.problem}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Solution
            </p>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Modules Row (3 Columns) */}
        {project.modules && (
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
                Core System Modules &amp; Features
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {project.modules.map((mod) => (
                <motion.div
                  key={mod.title}
                  variants={itemFade}
                  className="group relative flex flex-col rounded-3xl border border-border bg-card/60 hover:bg-card hover:border-foreground/20 p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h4 className="text-base font-bold text-foreground">{mod.title}</h4>
                    <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground whitespace-nowrap">
                      {mod.badge}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                  <div className="h-px bg-border/40 w-full mb-4" />
                  <ul className="flex flex-col gap-2.5 mt-auto">
                    {mod.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-foreground/45 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Impact & Highlights Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Impact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Key Project Impact
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/40 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-3 gap-3"
          >
            {project.highlights.map((h) => {
              const HIcon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  variants={itemFade}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-center justify-center items-center"
                >
                  <HIcon className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-black text-foreground">{h.value}</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">{h.label}</p>
                </motion.div>
              );
            })}
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
          className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-light">Projects</span>
              {/* Underline drawn on scroll */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-foreground/20 origin-left"
              />
            </span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
            Enterprise-grade applications built with scalable architecture, clean code, and a
            focus on real business outcomes.
          </p>
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
