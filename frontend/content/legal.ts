// Legal details for the Impressum and the privacy policy.
//
// Values starting with "TODO" are missing inputs from the site owner. They
// are shown highlighted on the legal pages and MUST be replaced before
// launch. Do not invent these details.
export const legalInfo = {
  // Legal (civil) name of the person responsible for the site.
  responsibleName: "Hannes Ducke",
  stageName: "Quetschen-Hannes",
  street: "Luisenstraße 10",
  postalCodeAndCity: "12557 Berlin",
  country: "Deutschland",
  // Leave empty if there is no VAT ID (e.g. Kleinunternehmer, § 19 UStG).
  vatId: "",
  // Shown as "Stand" on the privacy policy; update when the text changes.
  privacyPolicyDate: "Oktober 2026",
  // How long booking requests are kept after the enquiry is settled.
  retentionPeriod: "zwölf Monate",
};

export function isPlaceholder(value: string): boolean {
  return value.startsWith("TODO");
}
