"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Globe, Smartphone, Building2, Code2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const currentStack = [
  { name: "React.js", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "React Native", icon: "/skills/react-native.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "NestJS", icon: "/skills/nestjs.svg" },
  { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
  { name: "Prisma ORM", icon: "/skills/prisma.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
];

const categories = [
  {
    id: "01",
    title: "Frontend",
    description: "Building responsive and modern user interfaces.",
    codeVar: "frontend",
    codeItems: ["React.js", "Next.js", "TypeScript"],
    skills: [
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "React Native", icon: "/skills/react-native.svg" },
      { name: "Expo", icon: "/skills/expo.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
      { name: "shadcn/ui", icon: "/skills/shadcnui.svg" },
      { name: "HTML5", icon: "/skills/html5.svg" },
      { name: "CSS3", icon: "/skills/css3.svg" },
    ],
  },
  {
    id: "02",
    title: "Backend",
    description: "Building scalable APIs and server-side applications.",
    codeVar: "backend",
    codeItems: ["Node.js", "NestJS", "Express.js"],
    skills: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "NestJS", icon: "/skills/nestjs.svg" },
      { name: "Fastify", icon: "/skills/fastify.svg" },
    ],
  },
  {
    id: "03",
    title: "Database & ORM",
    description: "Designing and managing reliable databases.",
    codeVar: "database",
    codeItems: ["PostgreSQL", "MongoDB", "Prisma"],
    skills: [
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Prisma ORM", icon: "/skills/prisma.svg" },
      { name: "Mongoose", icon: "/skills/mongoose.svg" },
    ],
  },
  {
    id: "04",
    title: "Tools & Workflow",
    description: "Tools used for development, testing, and collaboration.",
    codeVar: "tools",
    codeItems: ["Git", "GitHub", "Postman"],
    skills: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "Swagger", icon: "/skills/swagger.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
      { name: "Chrome DevTools", icon: "/skills/chrome.svg" },
      { name: "pgAdmin", icon: "/skills/pgadmin.svg" },
      { name: "Prisma Studio", icon: "/skills/prisma-studio.svg" },
    ],
  },
];

const builds = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Enterprise-grade web apps with React & Next.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform iOS & Android using React Native.",
  },
  {
    icon: Building2,
    title: "Enterprise CRM Systems",
    description: "Custom CRMs and business management platforms.",
  },
  {
    icon: Code2,
    title: "REST APIs",
    description: "Scalable, documented APIs with NestJS & Node.js.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TechPill({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      variants={itemFade}
      className="group flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 transition-all duration-300 hover:border-foreground hover:-translate-y-0.5"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm border border-black/5 p-1">
        <img
          src={icon}
          alt={name}
          className="h-full w-full object-contain transition-transform group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
}

function SkillItem({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      variants={itemFade}
      className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:border-foreground hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-black/5 p-2">
        <img
          src={icon}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-[11px] font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-tight">
        {name}
      </span>
      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-foreground transition-all duration-400 group-hover:w-1/2 rounded-t-full" />
    </motion.div>
  );
}

function CodeSnippet({ varName, items }: { varName: string; items: string[] }) {
  return (
    <div className="w-full rounded-xl border border-zinc-800/80 bg-[#1e1e1e] shadow-lg overflow-hidden flex flex-col font-mono text-xs sm:text-sm group">
      {/* Traffic light window controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#333333]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-4 text-xs text-[#858585] font-medium tracking-wide">{varName}.ts</span>
      </div>

      {/* Code Content */}
      <div className="p-4 md:p-6 overflow-x-auto text-[#abb2bf] text-[13px] sm:text-sm leading-relaxed">
        <div className="flex">
          {/* Line numbers */}
          <div className="flex flex-col text-right pr-4 text-[#495162] select-none">
            <span>1</span>
            {items.map((_, i) => <span key={i}>{i + 2}</span>)}
            <span>{items.length + 2}</span>
          </div>

          {/* Code */}
          <div className="flex flex-col">
            <span>
              <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">{varName}</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#abb2bf]">[</span>
            </span>
            {items.map((item, i) => (
              <span key={item} className="pl-6">
                <span className="text-[#98c379]">"{item}"</span>
                {i < items.length - 1 && <span className="text-[#abb2bf]">,</span>}
              </span>
            ))}
            <span><span className="text-[#abb2bf]">];</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCategoryCard({
  id,
  title,
  description,
  codeVar,
  codeItems,
  skills,
}: (typeof categories)[number]) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:border-foreground/30"
    >
      {/* Decorative accent dot in the sharp corner */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-foreground/50 transition-colors" />
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-foreground/50 transition-colors" />

      {/* Card Header */}
      <div className="border-b border-border p-6 pb-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
              {id}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 mt-1 shrink-0" />
        </div>
        {/* Developer Code Snippet */}
        <CodeSnippet varName={codeVar} items={codeItems} />
      </div>

      {/* Skill Grid */}
      <div className="p-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-4 sm:grid-cols-5 gap-2"
        >
          {skills.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function BuildCard({
  icon: Icon,
  title,
  description,
}: (typeof builds)[number]) {
  return (
    <motion.div
      variants={itemFade}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-foreground/50"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-all duration-500 group-hover:scale-110 group-hover:border-foreground/20 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h4 className="mt-5 text-lg font-bold tracking-tight text-foreground">
          {title}
        </h4>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-foreground transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <section id="skills" className="pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-20 md:gap-28"
        >

          {/* ── Section Header ─────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="mb-8 rounded-full border border-border px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Skills &amp; Technologies
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Technologies I Use To{" "}
              <span className="text-muted-foreground italic font-light">
                Build Modern
              </span>{" "}
              Applications
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A carefully selected technology stack that helps me build scalable
              web applications, mobile applications, APIs, and enterprise
              software solutions.
            </p>
          </motion.div>

          {/* ── Current Stack ──────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
                Current Stack
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {currentStack.map((tech) => (
                <TechPill key={tech.name} {...tech} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Technology Categories ──────────────────────────────── */}
          <div className="flex flex-col gap-10">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
                Technology Categories
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <SkillCategoryCard key={cat.id} {...cat} />
              ))}
            </div>
          </div>

          {/* ── What I Build ───────────────────────────────────────── */}
          <div className="flex flex-col gap-10">
            <motion.div variants={fadeUp} className="text-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
                  What I Build
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                What I{" "}
                <span className="text-muted-foreground italic font-light">
                  Build
                </span>
              </h3>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {builds.map((build) => (
                <BuildCard key={build.title} {...build} />
              ))}
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
