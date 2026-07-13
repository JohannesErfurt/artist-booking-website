import { siteConfig, artistBio } from "@/content/site";

export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    description: siteConfig.shortIntro,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    jobTitle: "Actor and Musician",
  };
}

export function getMusicianStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: siteConfig.name,
    description: artistBio.fullBio,
    url: siteConfig.url,
    genre: ["TODO: replace with final genres"],
  };
}
