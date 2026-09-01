import { Bot, Minus, X } from "lucide-react";

import { botIdentity } from "@/data/growSeoKnowledge";

export function ChatHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center gap-3 rounded-t-2xl bg-navy px-4 py-3.5 text-navy-foreground">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Bot className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-navy-foreground">{botIdentity.name}</p>
        <p className="flex items-center gap-1.5 text-xs text-navy-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          {botIdentity.status}
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Minimise chat"
        className="hidden h-8 w-8 items-center justify-center rounded-lg text-navy-foreground/70 transition-colors hover:bg-white/10 hover:text-navy-foreground sm:inline-flex"
      >
        <Minus className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-navy-foreground/70 transition-colors hover:bg-white/10 hover:text-navy-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
