"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { LayoutTemplate, Smartphone, Server, Database, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "VLOQ", label: "Software Developer" },
  { value: "MCA", label: "Master's Degree" },
  { value: "Mumbai", label: "India" },
];

const serviceCards = [
  {
    id: "01",
    title: "Web Development",
    description: "Building modern web applications using React.js and Next.js.",
    icon: LayoutTemplate,
  },
  {
    id: "02",
    title: "Mobile Development",
    description: "Cross-platform Android and iOS applications using React Native.",
    icon: Smartphone,
  },
  {
    id: "03",
    title: "Backend Development",
    description: "Scalable APIs and business logic using Node.js and NestJS.",
    icon: Server,
  },
  {
    id: "04",
    title: "Database Design",
    description: "Designing efficient PostgreSQL and MongoDB architectures.",
    icon: Database,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariant}
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* Header Section */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div variants={fadeUpVariant} className="mb-8 rounded-full border border-border px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Me
            </motion.div>
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]"
            >
              Building Reliable <span className="text-muted-foreground italic font-light">Web & Mobile</span> Applications
            </motion.h2>
          </div>

          {/* Stats Grid */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-foreground/50 overflow-hidden"
              >
                {/* Subtle gradient background that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <ArrowUpRight className="absolute right-5 top-5 h-6 w-6 opacity-0 -translate-x-4 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-foreground" />
                
                <span className="text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-3 transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </span>
                
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground text-center relative z-10 transition-colors duration-500 group-hover:text-foreground">
                  {stat.label}
                </span>

                {/* Bottom highlight bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 bg-foreground transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
              </div>
            ))}
          </motion.div>

          {/* Description Columns */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            <div className="flex flex-col gap-6">
              <p>
                I am a Full Stack Developer based in Mumbai, India, with 1+ years of professional experience building scalable web and mobile applications.
              </p>
              <p>
                Currently working as a Software Developer at VLOQ, I contribute to enterprise CRM systems, business management platforms, and cross-platform mobile applications.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p>
                I enjoy solving real-world business challenges by creating efficient, maintainable, and user-focused software solutions.
              </p>
              <p>
                Alongside my professional work, I am pursuing a Master of Computer Applications (MCA) to further strengthen my technical foundation and software engineering expertise.
              </p>
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="flex flex-col gap-12 md:gap-16">
            <motion.h3 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tighter text-center w-full">
              What I <span className="text-muted-foreground italic font-light">Do</span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUpVariant}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-foreground/50"
                  >
                    {/* Subtle gradient background that reveals on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Background Number */}
                    <div className="absolute -right-4 -top-4 text-[100px] lg:text-[120px] font-black leading-none text-muted-foreground/5 transition-all duration-500 group-hover:text-muted-foreground/10 group-hover:-right-2 group-hover:-top-2 z-0">
                      {card.id}
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background transition-all duration-500 group-hover:scale-110 group-hover:border-foreground/20 text-foreground shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-auto">
                        <h4 className="mb-3 text-lg font-bold tracking-tight text-foreground">{card.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                    
                    {/* Bottom highlight bar */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 bg-foreground transition-all duration-500 group-hover:w-1/2 rounded-t-full" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quote Section */}
          <motion.div variants={fadeUpVariant} className="border-t border-border pt-10 md:pt-16 text-center max-w-4xl mx-auto w-full">
            <p className="text-2xl md:text-4xl font-light italic leading-normal text-foreground">
              "I enjoy transforming business requirements into <span className="font-medium text-muted-foreground not-italic">scalable digital solutions</span> that deliver real value to users and organizations."
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

