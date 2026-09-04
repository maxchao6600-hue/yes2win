import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLocale } from "@/i18n/locale";
import { getHomeCopy } from "@/i18n/get-content";
import { localizePath } from "@/i18n/paths";

export async function Intro() {
  const locale = await getLocale();
  const copy = getHomeCopy(locale).intro;

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {copy.links.map((link) => (
                <Link
                  key={link.href}
                  href={localizePath(link.href, locale)}
                  className="inline-flex rounded-full border border-brand-200 bg-brand-50/70 px-4 py-2 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.points.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.5rem] border border-line bg-white p-5 shadow-[0_18px_50px_-34px_rgba(6,78,59,0.4)]"
              >
                <h3 className="text-lg font-bold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
