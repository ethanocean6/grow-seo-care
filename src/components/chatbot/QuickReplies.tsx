import { quickQuestions } from "@/data/growSeoKnowledge";

export function QuickReplies({
  onSelect,
  disabled,
}: {
  onSelect: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {quickQuestions.map((question) => (
        <button
          key={question}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(question)}
          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-primary hover:bg-brand-soft hover:text-primary disabled:opacity-50"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
