-- Run in Supabase SQL Editor when using Supabase as inquiry backend

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  inquiry_type text not null,
  event_date text,
  guest_count text,
  location text,
  message text not null,
  source_page text
);

alter table public.inquiries enable row level security;

-- Allow anonymous inserts from the API route (service role bypasses RLS)
-- If using anon key only, create an insert policy:
create policy "Allow public insert"
  on public.inquiries
  for insert
  to anon
  with check (true);

-- No public read — admin access via Supabase dashboard only
