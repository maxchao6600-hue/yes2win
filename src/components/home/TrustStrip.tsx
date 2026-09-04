import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CategoryVisual, type IconName } from "@/components/ui/Icon";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";

/** Icons stay locale-independent and align with the order of `copy.trust.items`. */
const icons: IconName[] = ["shield", "spark", "mobile", "access", "support"];

export async function TrustStrip() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).trust;

  return (
    <section className="-mt-8 pb-6 sm:-mt-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {copy.items.map((item, index) => (
            <Card key={item.title} className="bg-white/95 p-5">
              <CategoryVisual name={icons[index] ?? "shield"} className="h-12 w-12" />
              <h2 className="mt-4 text-base font-bold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
