import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy, getPaymentMethods } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function PaymentPreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).payment;
  const methods = getPaymentMethods(locale);
  const points = "points" in copy && Array.isArray(copy.points) ? copy.points : [];

  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        {points.length > 0 ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {points.map((point) => (
              <div key={point.title} className="rounded-2xl border border-line bg-brand-50/40 p-4">
                <h3 className="text-base font-bold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </div>
            ))}
          </div>
        ) : null}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {methods.map((method) => (
            <div
              key={method.id}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_-28px_rgba(6,78,59,0.4)]"
            >
              <div className="relative aspect-square">
                <Image
                  src={method.image}
                  alt={`${method.name} ${copy.iconAltSuffix}`}
                  fill
                  sizes="(max-width:768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <p className="px-3 py-3 text-center text-sm font-semibold text-ink">{method.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href={localizePath("/payment/", locale)} variant="secondary">
            {copy.cta}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
