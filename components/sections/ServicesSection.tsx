import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeading>Services Section</SectionHeading>
        <p className="text-muted-foreground">This is Services Section</p>
      </Container>
    </section>
  );
}
