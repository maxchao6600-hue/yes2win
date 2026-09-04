import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy, getProviders } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function ProvidersPreview() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).providers;
  const providers = getProviders(locale);

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <CtaLink href={`${localizePath("/games/", locale)}#providers`} variant="secondary">
            {copy.cta}
          </CtaLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {providers.map((provider) => (
            <article
              key={provider.id}
              className="rounded-3xl border border-line bg-white p-5 shadow-[0_18px_50px_-34px_rgba(6,78,59,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-800">
                {provider.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{provider.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                {provider.focus}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{provider.description}</p>
              <p className="mt-4 text-xs font-medium text-ink-muted">{provider.categories.join(" · ")}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
