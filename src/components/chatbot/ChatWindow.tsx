import { useServerFn } from "@tanstack/react-start";
import { Headset, HelpCircle, Mail } from "lucide-react";
import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";

import { botIdentity, ctaLinks } from "@/data/growSeoKnowledge";
import { askGrowAssistant } from "@/lib/chat.functions";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { HumanHandoff } from "./HumanHandoff";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { MessageList, type ChatMessage } from "./MessageList";
import { QuickReplies } from "./QuickReplies";

const newId = () => Math.random().toString(36).slice(2);

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const ask = useServerFn(askGrowAssistant);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: newId(), role: "assistant", content: botIdentity.welcomeMessage },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [showHandoff, setShowHandoff] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const send = useCallback(
    async (text: string) => {
      const nextMessages: ChatMessage[] = [
        ...messages,
        { id: newId(), role: "user", content: text },
      ];
      setMessages(nextMessages);
      setShowQuickReplies(false);
      setIsLoading(true);

      try {
        const result = await ask({
          data: {
            messages: nextMessages.map(({ role, content }) => ({ role, content })),
          },
        });
        setMessages((prev) => [
          ...prev,
          {
            id: newId(),
            role: "assistant",
            content: result.ok ? result.content : result.error,
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: newId(),
            role: "assistant",
            content: "Sorry, something went wrong. Please try again.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [ask, messages],
  );

  const conversationSummary = messages
    .map((m) => `${m.role === "user" ? "Visitor" : "AI"}: ${m.content}`)
    .join("\n");

  return (
    <div className="flex h-[min(78vh,600px)] w-[min(92vw,384px)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-lift)] max-sm:h-[85vh] max-sm:w-[calc(100vw-1.5rem)]">
      <ChatHeader onClose={onClose} />

      <div className="flex-1 space-y-3 overflow-y-auto px-3.5 py-4">
        <MessageList messages={messages} isLoading={isLoading} />

        {showQuickReplies ? (
          <div className="pt-1">
            <p className="mb-2 text-xs font-semibold text-muted-foreground">Quick questions</p>
            <QuickReplies onSelect={send} disabled={isLoading} />
          </div>
        ) : null}

        {showHandoff && !showLeadForm ? (
          <HumanHandoff onRequestForm={() => setShowLeadForm(true)} />
        ) : null}

        {showLeadForm ? (
          <LeadCaptureForm
            conversationSummary={conversationSummary}
            onDone={() => {
              setShowLeadForm(false);
              setShowHandoff(false);
              setMessages((prev) => [
                ...prev,
                {
                  id: newId(),
                  role: "assistant",
                  content:
                    "Thanks! ✅ I've shared your details with the Grow Seo Care team. They'll reach out to you soon. Anything else I can help with?",
                },
              ]);
            }}
            onCancel={() => setShowLeadForm(false)}
          />
        ) : null}
      </div>

      <div className="space-y-2.5 border-t border-border bg-card px-3.5 py-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowQuickReplies((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy hover:border-primary hover:text-primary"
          >
            <HelpCircle className="h-3 w-3" aria-hidden="true" />
            Quick Questions
          </button>
          <Link
            to={ctaLinks.contact}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy hover:border-primary hover:text-primary"
          >
            <Mail className="h-3 w-3" aria-hidden="true" />
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => {
              setShowHandoff(true);
              setShowLeadForm(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-navy hover:border-primary hover:text-primary"
          >
            <Headset className="h-3 w-3" aria-hidden="true" />
            Talk to a Human
          </button>
        </div>

        <ChatInput onSend={send} disabled={isLoading} />
      </div>
    </div>
  );
}
