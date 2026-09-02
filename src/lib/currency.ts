/**
 * Centralized currency configuration for pricing display.
 * Base currency is BDT. Rates are approximate, static reference conversions —
 * NOT live exchange rates. Update them here only.
 */

export type CurrencyCode =
  | "USD"
  | "GBP"
  | "EUR"
  | "BDT"
  | "CAD"
  | "AUD"
  | "INR"
  | "AED"
  | "SAR";

export type Currency = {
  code: CurrencyCode;
  symbol: string;
  label: string;
  /** Multiplier applied to the BDT base price. */
  rate: number;
  /** Rounding step for display, in the target currency. */
  step: number;
  /** Show the "≈" approximation marker before the amount. */
  approximate: boolean;
};

export const BASE_CURRENCY: CurrencyCode = "BDT";
export const DEFAULT_CURRENCY: CurrencyCode = "USD";

export const currencies: readonly Currency[] = [
  { code: "USD", symbol: "$", label: "US Dollar", rate: 0.0084, step: 5, approximate: true },
  { code: "GBP", symbol: "£", label: "British Pound", rate: 0.0066, step: 5, approximate: true },
  { code: "EUR", symbol: "€", label: "Euro", rate: 0.0077, step: 5, approximate: true },
  { code: "BDT", symbol: "৳", label: "Bangladeshi Taka", rate: 1, step: 1000, approximate: false },
  { code: "CAD", symbol: "C$", label: "Canadian Dollar", rate: 0.0115, step: 5, approximate: true },
  { code: "AUD", symbol: "A$", label: "Australian Dollar", rate: 0.0127, step: 5, approximate: true },
  { code: "INR", symbol: "₹", label: "Indian Rupee", rate: 0.73, step: 100, approximate: true },
  { code: "AED", symbol: "د.إ", label: "UAE Dirham", rate: 0.031, step: 10, approximate: true },
  { code: "SAR", symbol: "﷼", label: "Saudi Riyal", rate: 0.0315, step: 10, approximate: true },
];

export const currencyMap: Record<CurrencyCode, Currency> = currencies.reduce(
  (acc, c) => {
    acc[c.code] = c;
    return acc;
  },
  {} as Record<CurrencyCode, Currency>,
);

/** Explicit display overrides so headline prices stay exactly on message. */
const overrides: Partial<Record<CurrencyCode, Record<number, number>>> = {
  USD: { 25000: 210, 50000: 420, 90000: 750, 150000: 1250 },
};

export function convertFromBdt(amountBdt: number, code: CurrencyCode): number {
  const override = overrides[code]?.[amountBdt];
  if (override !== undefined) return override;
  const currency = currencyMap[code];
  const raw = amountBdt * currency.rate;
  return Math.round(raw / currency.step) * currency.step;
}

export function formatPrice(amountBdt: number, code: CurrencyCode): string {
  const currency = currencyMap[code];
  const value = convertFromBdt(amountBdt, code);
  const formatted = new Intl.NumberFormat("en-US").format(value);
  return `${currency.approximate ? "≈ " : ""}${currency.symbol}${formatted}`;
}

export const CURRENCY_STORAGE_KEY = "gsc-currency";

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && value in currencyMap;
}
