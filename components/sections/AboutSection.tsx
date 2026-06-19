import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading>About Section</SectionHeading>
        <p className="text-muted-foreground">This is About Section</p>
      </Container>
    </section>
  );
}
