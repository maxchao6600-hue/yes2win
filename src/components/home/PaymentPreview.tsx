import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";

const methods = [
  { id: "bank", label: "Bank Transfer" },
  { id: "ewallet", label: "E-Wallet" },
  { id: "duitnow", label: "DuitNow" },
  { id: "tng", label: "Touch n Go" },
  { id: "online", label: "Online Banking" },
  { id: "crypto", label: "USDT / Crypto" },
  { id: "cards", label: "Bank Cards" },
  { id: "grab", label: "GrabPay" },
];

export function PaymentPreview() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Payments"
          title="A flexible payment ecosystem"
          description="YES2WIN references common channels such as bank transfer, e-wallets, DuitNow, Touch n Go, online banking and crypto. Availability depends on region and the live cashier."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {methods.map((method) => (
            <div
              key={method.id}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_-28px_rgba(6,78,59,0.4)]"
            >
              <div className="relative aspect-square">
                <Image
                  src={`/images/payment/${method.id}.webp`}
                  alt={`${method.label} icon`}
                  fill
                  sizes="(max-width:768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <p className="px-3 py-3 text-center text-sm font-semibold text-ink">{method.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href="/payment/" variant="secondary">
            View Payment Guide
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
