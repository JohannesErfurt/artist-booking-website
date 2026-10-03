import { siteConfig, artistBio } from "@/content/site";

export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    description: siteConfig.shortIntro,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    jobTitle: "Akkordeonspieler und Entertainer",
    alternateName: "Hannes Ducke",
    telephone: siteConfig.contactPhone,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  };
}

export function getMusicianStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: siteConfig.name,
    description: artistBio.fullBio,
    url: siteConfig.url,
    genre: ["Akkordeon", "Chanson", "Kabarett"],
  };
}
