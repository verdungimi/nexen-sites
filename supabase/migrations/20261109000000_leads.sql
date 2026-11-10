-- Leads from nexensites.hu: demo requests, consultation bookings and contact messages.
-- The website writes with the service role key from server-side API routes only.
-- Row level security is on and there are no policies, so the anon and authenticated roles see nothing.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('demo', 'booking', 'contact')),
  name text not null,
  email text not null,
  company text,
  phone text,
  link text,
  -- answers of the five-question quiz (values from lib/quiz.ts)
  industry text,
  has_website text,
  goal text,
  lead_source text,
  timeline text,
  recommended_package text,
  message text,
  booking_date date,
  booking_time text,
  page text,
  utm jsonb
);

alter table public.leads enable row level security;

create index if not exists leads_created_at_idx on public.leads (created_at desc);
