"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  FileText,
  Download,
  Eye,
  X,
  Briefcase,
  Smartphone,
  Code2,
  Layers,
  Zap,
  BookOpen,
  Play,
  FolderGit2,
  Bug,
  Globe,
  Database,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const selfTaughtTechCategories = [
  { label: "Frontend", icon: Globe, techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", icon: Code2, techs: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Database", icon: Database, techs: ["PostgreSQL", "MongoDB", "Prisma ORM"] },
  { label: "Mobile", icon: Smartphone, techs: ["React Native", "Expo"] },
];

const howILearned = [
  { icon: Play, title: "YouTube Learning", description: "Learned through tutorials, project walkthroughs, and practical coding sessions." },
  { icon: BookOpen, title: "Documentation", description: "Built the habit of reading official docs, guides, and implementation references." },
  { icon: FolderGit2, title: "Project-Based", description: "Built multiple personal projects to understand real-world development workflows." },
  { icon: Bug, title: "Problem Solving", description: "Improved analytical thinking by debugging, experimenting, and iterating." },
];

const proTechStack = [
  "React.js", "Next.js", "React Native", "Expo",
  "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma ORM",
];

const responsibilities = [
  "Developed and maintained enterprise CRM and business management platforms.",
  "Delivered Lead Management modules and workflow automation solutions.",
  "Worked on Manufacturing and Production Management systems.",
  "Developed Track & Trace solutions for operational visibility.",
  "Built scalable REST APIs and backend workflows.",
  "Developed responsive web applications using React.js and Next.js.",
  "Built cross-platform mobile applications using React Native and Expo.",
  "Collaborated on database architecture and business process optimization.",
];

const achievements = [
  { icon: Briefcase, title: "Enterprise CRM", description: "Built and maintained CRM workflows supporting business operations." },
  { icon: Layers, title: "Track & Trace System", description: "Contributed to real-time production visibility and tracking systems." },
  { icon: Smartphone, title: "Cross-Platform Apps", description: "Developed responsive web and mobile experiences using modern tech." },
  { icon: Code2, title: "API Development", description: "Designed scalable APIs and backend workflows for business processes." },
];

const currentFocus = [
  "Enterprise CRM Systems", "Manufacturing Platforms",
  "Mobile Applications", "Workflow Automation",
  "API Development", "Database Optimization",
];

const documents = [
  { id: "offer", icon: FileText, title: "Offer Letter", company: "VLOQ", description: "Official offer letter confirming my Software Developer position.", file: "/documents/offer-letter.pdf" },
  { id: "joining", icon: FileText, title: "Joining Letter", company: "VLOQ", description: "Official joining confirmation document.", file: "/documents/joining-letter.pdf" },
];

const trustBadges = [
  "Professional Industry Experience",
  "Official Employment Verification",
  "Active Software Developer",
  "Enterprise Project Experience",
];

// ─── Parallax Floating Number ─────────────────────────────────────────────────

function ParallaxChar({ char, speed = 40, className = "" }: { char: string; speed?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const springY = useSpring(y, { damping: 20, stiffness: 80 });
  return (
    <motion.span style={{ y: springY }} className={`inline-block will-change-transform ${className}`}>
      {char}
    </motion.span>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TechPill({ name, dashed = false }: { name: string; dashed?: boolean }) {
  return (
    <motion.span
      variants={itemFade}
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-foreground hover:-translate-y-0.5 ${
        dashed ? "border border-dashed border-border" : "border border-border"
      }`}
    >
      {name}
    </motion.span>
  );
}

function SmallCard({
  icon: Icon,
  title,
  description,
  dashed = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  dashed?: boolean;
}) {
  return (
    <motion.div
      variants={itemFade}
      className={`group relative flex flex-col gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${
        dashed
          ? "border border-dashed border-border bg-background hover:bg-card"
          : "border border-border bg-card hover:border-foreground/30"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl text-foreground transition-all duration-300 group-hover:scale-110 ${
          dashed ? "border border-dashed border-border bg-card" : "border border-border bg-background"
        }`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-bold tracking-tight text-foreground">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function DocumentCard({
  doc,
  onPreview,
}: {
  doc: (typeof documents)[number];
  onPreview: (file: string, title: string) => void;
}) {
  const Icon = doc.icon;
  return (
    <motion.div
      variants={itemFade}
      className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold tracking-tight text-foreground">{doc.title}</h4>
          <p className="text-xs font-medium text-muted-foreground mt-0.5">{doc.company}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
      <div className="flex gap-3 mt-auto">
        <Button
          variant="default"
          size="sm"
          className="flex-1 rounded-full bg-foreground text-background hover:bg-foreground/90 h-9 text-xs"
          onClick={() => onPreview(doc.file, doc.title)}
        >
          <Eye className="h-3.5 w-3.5 mr-1.5" /> View
        </Button>
        <Button variant="outline" size="sm" className="flex-1 rounded-full h-9 text-xs" asChild>
          <a href={doc.file} download>
            <Download className="h-3.5 w-3.5 mr-1.5" /> Download
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

function PdfModal({ file, title, onClose }: { file: string; title: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col w-full max-w-3xl h-[90vh] rounded-3xl border border-border bg-background overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4 shrink-0">
          <div>
            <h3 className="font-bold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">VLOQ · Official Document</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full h-9 text-xs" asChild>
              <a href={file} download><Download className="h-3.5 w-3.5 mr-1.5" /> Download</a>
            </Button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden bg-muted/20">
          <iframe src={`${file}#toolbar=0&navpanes=0`} className="h-full w-full" title={title} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Chapter Header ──────────────────────────────────────────────────────────

function ChapterHeader({
  number,
  label,
  period,
  statusLabel,
  active = false,
}: {
  number: string;
  label: string;
  period: string;
  statusLabel: string;
  active?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative flex items-start gap-6 mb-12 md:mb-16">
      {/* Big Chapter Number (parallax) */}
      <div
        className="select-none font-black text-[6rem] md:text-[9rem] leading-none tracking-tighter text-foreground/5 shrink-0 -mt-4"
        aria-hidden
      >
        <ParallaxChar char={number} speed={30} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 pt-4">
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] w-fit ${
          active
            ? "border-foreground/30 bg-card text-foreground"
            : "border-dashed border-border text-muted-foreground"
        }`}>
          {active && <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />}
          {statusLabel}
        </div>
        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">
          {label}
        </h3>
        <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 shrink-0" /> {period}
        </p>
      </div>

      {/* Scroll-animated bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
        style={{ scaleX: lineScale }}
      />
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [previewDoc, setPreviewDoc] = useState<{ file: string; title: string } | null>(null);

  // Parallax for the large background word
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgWordY = useTransform(sectionProgress, [0, 1], [-60, 60]);
  const bgWordOpacity = useTransform(sectionProgress, [0, 0.2, 0.8, 1], [0, 0.04, 0.04, 0]);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">

      {/* ── Subtle grid ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* ── Parallax Background Word ─────────────────────────────────────────── */}
      <motion.div
        style={{ y: bgWordY, opacity: bgWordOpacity }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span className="text-[20vw] font-black uppercase tracking-tighter text-foreground leading-none">
          EXP
        </span>
      </motion.div>

      {previewDoc && (
        <PdfModal file={previewDoc.file} title={previewDoc.title} onClose={() => setPreviewDoc(null)} />
      )}

      <Container className="relative z-10">
        <div className="flex flex-col gap-24 md:gap-36">

          {/* ══ SECTION HEADER ══════════════════════════════════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Experience
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
              My{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic font-light">Journey</span>
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
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              From self-driven learning to building enterprise software solutions — a continuous
              journey of growth, curiosity, and craftsmanship.
            </p>
          </motion.div>

          {/* ══ CHAPTER 01: SELF-TAUGHT ══════════════════════════════════════════ */}
          <div>
            <ChapterHeader
              number="01"
              label="Self-Taught Developer"
              period="2023 – 2025"
              statusLabel="Skill Development · Completed"
            />

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
            >
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Before entering the software industry, I spent two years deeply invested in
                self-study — learning through YouTube tutorials, official documentation, and
                building personal projects from scratch.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                This journey helped me develop strong fundamentals across frontend, backend,
                databases, APIs, and mobile development before making the leap into professional work.
              </p>
            </motion.div>

            {/* How I Learned */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {howILearned.map((item) => (
                <SmallCard key={item.title} {...item} dashed />
              ))}
            </motion.div>

            {/* Technologies Learned */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-dashed border-border bg-background p-6 md:p-8"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Technologies Learned
              </p>
              <div className="flex flex-col gap-6">
                {selfTaughtTechCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <div key={cat.label}>
                      <div className="flex items-center gap-2 mb-3">
                        <CatIcon className="h-3.5 w-3.5 text-muted-foreground/60" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {cat.label}
                        </span>
                      </div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerFast}
                        className="flex flex-wrap gap-2"
                      >
                        {cat.techs.map((t) => <TechPill key={t} name={t} dashed />)}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ══ TRANSITION MARKER ════════════════════════════════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-border" />
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-3 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-background">
                <span className="text-xs font-black uppercase tracking-[0.2em]">Joined VLOQ</span>
                <ArrowRight className="h-3.5 w-3.5" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">June 2025</span>
              </div>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Self-Learning → Professional Work
              </p>
            </div>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          {/* ══ CHAPTER 02: PROFESSIONAL ════════════════════════════════════════ */}
          <div>
            <ChapterHeader
              number="02"
              label="Software Developer"
              period="June 2025 – Present · VLOQ · Mumbai, India"
              statusLabel="Currently Working"
              active
            />

            {/* Description + Meta */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 mb-12"
            >
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Currently working as a Full Stack Developer contributing to enterprise CRM
                systems, business management platforms, manufacturing solutions, and
                cross-platform mobile applications at VLOQ.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Company", value: "VLOQ" },
                  { label: "Location", value: "Mumbai, India" },
                  { label: "Since", value: "June 2025" },
                  { label: "Type", value: "Full-Time" },
                ].map((meta) => (
                  <div key={meta.label} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{meta.label}</span>
                    <span className="text-sm font-semibold text-foreground">{meta.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Responsibilities — stagger list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
            >
              {responsibilities.map((r, i) => (
                <motion.div
                  key={r}
                  variants={itemFade}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4"
                >
                  <span className="mt-0.5 text-[10px] font-black text-muted-foreground/40 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-12"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Technologies Used
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerFast}
                className="flex flex-wrap gap-2"
              >
                {proTechStack.map((t) => <TechPill key={t} name={t} />)}
              </motion.div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {achievements.map((a) => <SmallCard key={a.title} {...a} />)}
            </motion.div>
          </div>

          {/* ══ CURRENT FOCUS + TRUST BADGES ══════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-background">
                  <Zap className="h-4 w-4 text-foreground" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Currently Working On
                </span>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {currentFocus.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemFade}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col gap-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-1">
                Professional Verification
              </p>
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge}
                  variants={itemFade}
                  className="flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ══ VERIFIED DOCUMENTS ════════════════════════════════════════════ */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
                  Verified Professional Experience
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
                  Supporting{" "}
                  <span className="italic font-light text-muted-foreground">Documents</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Supporting documents validating my professional software development experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto w-full"
            >
              {documents.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  doc={doc}
                  onPreview={(file, title) => setPreviewDoc({ file, title })}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
