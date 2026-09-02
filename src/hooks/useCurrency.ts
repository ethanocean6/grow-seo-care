import { useEffect, useState } from "react";

import {
  CURRENCY_STORAGE_KEY,
  DEFAULT_CURRENCY,
  isCurrencyCode,
  type CurrencyCode,
} from "@/lib/currency";

/** Selected display currency, persisted in localStorage. Hydration-safe. */
export function useCurrency() {
  const [currency, setCurrency] = useState<CurrencyCode>(DEFAULT_CURRENCY);

  useEffect(() => {
    const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (isCurrencyCode(stored)) setCurrency(stored);
  }, []);

  const update = (code: CurrencyCode) => {
    setCurrency(code);
    try {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, code);
    } catch {
      /* storage unavailable — selection still applies for this session */
    }
  };

  return { currency, setCurrency: update };
}
