import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <Container>
        <SectionHeading>Contact Section</SectionHeading>
        <p className="text-muted-foreground">This is Contact Section</p>
      </Container>
    </section>
  );
}
