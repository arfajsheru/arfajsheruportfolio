import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <Container>
        <SectionHeading>Skills Section</SectionHeading>
        <p className="text-muted-foreground">This is Skills Section</p>
      </Container>
    </section>
  );
}
