-- Booking requests table for Supabase
-- Apply this in the Supabase SQL editor or via migration tooling.

create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  event_date date not null,
  event_location text not null,
  event_type text not null,
  guest_count integer not null check (guest_count >= 1),
  message text not null,
  status text not null default 'new' check (
    status in ('new', 'contacted', 'accepted', 'declined')
  )
);

create index if not exists booking_requests_created_at_idx
  on public.booking_requests (created_at desc);

create index if not exists booking_requests_status_idx
  on public.booking_requests (status);

-- Lock the table down: with row level security enabled and no policies,
-- the public (anon) and logged-in (authenticated) API roles cannot read or
-- write any row. The website's server uses the service role key, which
-- bypasses row level security.
alter table public.booking_requests enable row level security;

revoke all on table public.booking_requests from anon, authenticated;
