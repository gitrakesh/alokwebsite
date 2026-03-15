-- PostgreSQL/Supabase schema suggestion
create table if not exists contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  message text not null,
  created_at timestamptz default now()
);

create table if not exists consultation_bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  company text not null,
  project_type text not null,
  budget text not null,
  timeline text not null,
  services text not null,
  description text not null,
  preferred_contact text not null,
  created_at timestamptz default now()
);
