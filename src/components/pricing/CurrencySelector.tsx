import { currencies, type CurrencyCode } from "@/lib/currency";

export function CurrencySelector({
  value,
  onChange,
}: {
  value: CurrencyCode;
  onChange: (code: CurrencyCode) => void;
}) {
  return (
    <label className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Currency
      </span>
      <select
        aria-label="Select display currency"
        value={value}
        onChange={(e) => onChange(e.target.value as CurrencyCode)}
        className="rounded-lg bg-transparent py-1 pr-1 text-sm font-semibold text-navy outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} — {c.symbol} {c.label}
          </option>
        ))}
      </select>
    </label>
  );
}
