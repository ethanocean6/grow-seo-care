CREATE TABLE public.chat_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  service TEXT,
  website_url TEXT,
  message TEXT,
  conversation_summary TEXT,
  source_page TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.chat_leads TO anon;
GRANT INSERT ON public.chat_leads TO authenticated;
GRANT ALL ON public.chat_leads TO service_role;

ALTER TABLE public.chat_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a chat lead"
  ON public.chat_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);