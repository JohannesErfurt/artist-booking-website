import type { Service, SiteConfig, Testimonial } from "./types";

export const siteConfig: SiteConfig = {
  name: "Quetschen-Hannes",
  headline: "Deine Feier – mein Termin",
  shortIntro:
    "Quetschen-Hannes ist der Berliner Schauspieler Hannes Ducke – mit Akkordeon, Gesang und einer guten Portion Humor. Ob Geburtstag, Hochzeit oder Hoffest: Er bringt handgemachte Musik und gute Laune zu deiner Feier.",
  description:
    "Quetschen-Hannes – Akkordeon, Gesang und Humor für deine Feier. Live-Unterhaltung mit Hannes Ducke aus Berlin für Geburtstage, Hochzeiten, Firmenfeiern und Feste.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: "hannesducke@yahoo.de",
  contactPhone: "0173 60 700 43",
  bookingCta: "Jetzt anfragen",
  ogImage: "/images/quetschen-hannes-og.jpg",
};

export const contactLinks = {
  phone: `tel:${siteConfig.contactPhone.replace(/\s/g, "")}`,
  email: `mailto:${siteConfig.contactEmail}`,
};

// Sources for the facts below: public actor profiles (schauspielervideos.de,
// neuestheater-hannover.de, neidig.org), the event listing for "Ein alter Witz
// geht in Pension" (stadtleben.de) and the artist's own flyer.
// TODO: have the artist review and approve all texts before launch.
export const artistBio = {
  fullBio:
    "Hinter dem Quetschen-Hannes steckt Hannes Ducke: 1959 in Dresden geboren, in Berlin zu Hause und seit Jahrzehnten auf der Bühne. Mit seinem Akkordeon – der „Quetsche“ –, seiner Stimme und viel Witz unterhält er sein Publikum dort, wo gefeiert wird. Neben dem Akkordeon spielt er Gitarre und Mundharmonika und singt Chansons sowie Berliner und jiddische Lieder.",
  experience:
    "Hannes Ducke ist ausgebildeter Schauspieler: 1985 schloss er sein Schauspielstudium in Leipzig ab und war anschließend an den Theatern in Bautzen, Anklam und Schwedt engagiert. Seit 2000 arbeitet er freischaffend, unter anderem an der Komödie Kassel, am Schlosstheater Celle, an der Comödie Fürth und an der Komödie am Altstadtmarkt in Braunschweig. Diese Bühnenerfahrung bringt er in jeden Auftritt mit – als Musiker, Sänger und Unterhalter.",
  achievements:
    "Als Quetschen-Hannes steht er seit vielen Jahren auf Kleinkunstbühnen und bei Festen, zum Beispiel mit dem humorvollen Kabarettprogramm „Ein alter Witz geht in Pension“ in Zilles Stubentheater in Berlin. Aus dem Fernsehen kennt man ihn aus Serien wie „Wolffs Revier“, „Lindenstraße“, „GZSZ“ und „Unter uns“.",
};

export const services: Service[] = [
  {
    id: "private-feiern",
    icon: "🎂",
    title: "Private Feiern",
    description:
      "Geburtstag, Hochzeit, Jubiläum oder Familienfest: Akkordeonmusik und Lieder zum Zuhören, Mitsingen und Schunkeln.",
  },
  {
    id: "feste",
    icon: "🎪",
    title: "Feste & Veranstaltungen",
    description:
      "Hoffest, Straßenfest, Vereins- oder Firmenfeier: Live-Musik, die ohne große Technik auskommt und nah am Publikum ist.",
  },
  {
    id: "kabarett",
    icon: "🎭",
    title: "Kabarett mit Akkordeon",
    description:
      "Humorvolle Unterhaltung mit Liedern, Witzen und Geschichten – vom Schauspieler mit der Quetsche.",
  },
];

export const bookingSteps = [
  {
    id: "anfragen",
    title: "Anfragen",
    description:
      "Schreib mir über das Formular oder ruf an: Wann, wo und was wird gefeiert?",
  },
  {
    id: "absprechen",
    title: "Absprechen",
    description:
      "Ich melde mich bei dir und wir klären gemeinsam Ablauf, Dauer und Musikwünsche.",
  },
  {
    id: "feiern",
    title: "Feiern",
    description:
      "Ich komme mit der Quetsche vorbei – und du kannst dich um deine Gäste kümmern.",
  },
];

// TODO: PLACEHOLDER – invented example text to preview the layout only.
// Replace with real, approved quotes (or empty the list) before launch.
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote:
      "Hannes hat unsere Feier mit seinem Akkordeon zu etwas ganz Besonderem gemacht. Alle haben mitgesungen und gelacht – genau so hatten wir es uns gewünscht!",
    attribution: "Beispiel-Kundin (Platzhalter)",
    role: "Beispiel: 60. Geburtstag",
  },
];

export const galleryImages = [
  {
    id: "quetschen-hannes",
    src: "/images/quetschen-hannes.jpg",
    alt: "Quetschen-Hannes sitzt lachend mit seinem rot-schwarzen Akkordeon auf einem Stuhl",
    caption: "Quetschen-Hannes mit seiner Quetsche",
    width: 1168,
    height: 1150,
  },
  {
    id: "quetschen-hannes-flyer",
    src: "/images/quetschen-hannes-flyer.jpg",
    alt: "Roter Flyer von Quetschen-Hannes mit dem Motto „Deine Feier – mein Termin“",
    caption: "Der Flyer: „Deine Feier – mein Termin“",
    width: 1200,
    height: 1646,
  },
];

export const videoEmbeds = [
  {
    id: "quetschen-hannes",
    title: "Quetschen-Hannes",
    youtubeId: "-N4YfuetieY",
    description: "Quetschen-Hannes in Aktion – Video vom eigenen Kanal.",
  },
  {
    id: "apres-church-2018",
    title: "Après Church mit Quetschen-Hannes",
    youtubeId: "Nzw2xUSu64c",
    description:
      "Live-Auftritt am 22. Juli 2018, aufgenommen von „Wir lieben Köpenick“.",
  },
];

export const navigationLinks = [
  { href: "/", label: "Start" },
  { href: "/about", label: "Über Hannes" },
  { href: "/gallery", label: "Galerie" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Kontakt" },
];

export const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/privacy", label: "Datenschutz" },
];

export const eventTypes = [
  "Geburtstag",
  "Hochzeit",
  "Familienfeier",
  "Firmenfeier",
  "Straßen- oder Vereinsfest",
  "Sonstiges",
] as const;
