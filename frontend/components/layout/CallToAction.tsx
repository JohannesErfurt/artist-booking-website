import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { contactLinks, siteConfig } from "@/content/site";

type CallToActionProps = {
  title?: string;
  description?: string;
};

export function CallToAction({
  title = "Lust auf Musik bei deiner Feier?",
  description = "Schick mir die Eckdaten zu deiner Feier oder ruf einfach an – ich melde mich bei dir.",
}: CallToActionProps) {
  return (
    <section className="bg-brand-600 py-16 sm:py-20">
      <div className="container-page text-center">
        <h2 className="text-4xl text-balance sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="dark" size="lg">
            {siteConfig.bookingCta}
          </Button>
          <Button href={contactLinks.phone} variant="secondary" size="lg">
            <PhoneIcon />
            {siteConfig.contactPhone}
          </Button>
        </div>
      </div>
    </section>
  );
}
