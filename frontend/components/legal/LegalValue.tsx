import { isPlaceholder } from "@/content/legal";

type LegalValueProps = {
  value: string;
};

// Renders a legal detail. Missing owner inputs are highlighted so they
// cannot go live unnoticed.
export function LegalValue({ value }: LegalValueProps) {
  if (isPlaceholder(value)) {
    return (
      <mark className="rounded bg-yellow-200 px-1 font-semibold text-black">
        {value}
      </mark>
    );
  }

  return <>{value}</>;
}
