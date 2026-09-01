import { Bot } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function MessageList({
  messages,
  isLoading,
}: {
  messages: ChatMessage[];
  isLoading: boolean;
}) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col gap-3">
      {messages.map((message) =>
        message.role === "user" ? (
          <div key={message.id} className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground">
              {message.content}
            </div>
          </div>
        ) : (
          <div key={message.id} className="flex items-start gap-2">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary">
              <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
              <div className="chat-markdown">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ),
      )}

      {isLoading ? (
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <div className="flex gap-1 rounded-2xl rounded-bl-md bg-surface px-4 py-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div ref={endRef} />
    </div>
  );
}
