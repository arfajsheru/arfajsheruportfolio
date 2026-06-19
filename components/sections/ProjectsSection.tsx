import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <Container>
        <SectionHeading>Projects Section</SectionHeading>
        <p className="text-muted-foreground">This is Projects Section</p>
      </Container>
    </section>
  );
}
