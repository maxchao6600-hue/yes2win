import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CategoryVisual, type IconName } from "@/components/ui/Icon";

const values: Array<{ title: string; description: string; icon: IconName }> = [
  {
    title: "Official Partner",
    description: "Connected to the YES2WIN ecosystem through a dedicated partner portal experience.",
    icon: "shield",
  },
  {
    title: "Multi-Category",
    description: "Games across multiple entertainment categories — slots, live casino, sports and more.",
    icon: "spark",
  },
  {
    title: "Mobile Ready",
    description: "Optimised for modern mobile devices with a responsive browsing experience.",
    icon: "mobile",
  },
  {
    title: "Easy Access",
    description: "Simple registration and account access via centralised platform CTAs.",
    icon: "access",
  },
  {
    title: "Partner Support",
    description: "Dedicated partner-oriented information and support pathways.",
    icon: "support",
  },
];

export function TrustStrip() {
  return (
    <section className="-mt-8 pb-6 sm:-mt-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((item) => (
            <Card key={item.title} className="bg-white/95 p-5">
              <CategoryVisual name={item.icon} className="h-12 w-12" />
              <h2 className="mt-4 text-base font-bold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
