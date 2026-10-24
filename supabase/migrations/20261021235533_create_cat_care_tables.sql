/*
# Create cat care booking tables (single-tenant, no auth)

1. New Tables
- `bookings` — agendamentos de cuidados de gatos
  - `id` (uuid, primary key)
  - `owner_name` (text, nome do dono)
  - `owner_email` (text, email do dono)
  - `owner_phone` (text, telefone do dono)
  - `cat_name` (text, nome do gato)
  - `cat_breed` (text, raça do gato, opcional)
  - `cat_age` (text, idade do gato, opcional)
  - `service_type` (text, tipo de serviço: banho, tosa, hospedagem, veterinário, etc.)
  - `appointment_date` (date, data do agendamento)
  - `appointment_time` (time, horário do agendamento)
  - `notes` (text, observações adicionais, opcional)
  - `status` (text, status do agendamento: pendente, confirmado, concluído, cancelado)
  - `created_at` (timestamp)
- `booking_photos` — fotos dos gatos enviadas com o agendamento
  - `id` (uuid, primary key)
  - `booking_id` (uuid, foreign key para bookings)
  - `storage_path` (text, caminho da foto no Supabase Storage)
  - `photo_url` (text, URL pública da foto)
  - `caption` (text, legenda da foto, opcional)
  - `created_at` (timestamp)
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD because the data is intentionally shared/public (no sign-in screen).
- Enable public read/write on the cat-photos storage bucket.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_name text NOT NULL,
  owner_email text NOT NULL,
  owner_phone text NOT NULL,
  cat_name text NOT NULL,
  cat_breed text,
  cat_age text,
  service_type text NOT NULL DEFAULT 'banho',
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pendente',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS booking_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  storage_path text NOT NULL,
  photo_url text NOT NULL,
  caption text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_photos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
CREATE POLICY "anon_update_bookings" ON bookings FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
CREATE POLICY "anon_delete_bookings" ON bookings FOR DELETE
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_booking_photos" ON booking_photos;
CREATE POLICY "anon_select_booking_photos" ON booking_photos FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_booking_photos" ON booking_photos;
CREATE POLICY "anon_insert_booking_photos" ON booking_photos FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_booking_photos" ON booking_photos;
CREATE POLICY "anon_update_booking_photos" ON booking_photos FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_booking_photos" ON booking_photos;
CREATE POLICY "anon_delete_booking_photos" ON booking_photos FOR DELETE
TO anon, authenticated USING (true);

-- Storage bucket for cat photos (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('cat-photos', 'cat-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for public read/write
DROP POLICY IF EXISTS "anon_upload_cat_photos" ON storage.objects;
CREATE POLICY "anon_upload_cat_photos" ON storage.objects
FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'cat-photos');

DROP POLICY IF EXISTS "anon_read_cat_photos" ON storage.objects;
CREATE POLICY "anon_read_cat_photos" ON storage.objects
FOR SELECT TO anon, authenticated
USING (bucket_id = 'cat-photos');

DROP POLICY IF EXISTS "anon_delete_cat_photos" ON storage.objects;
CREATE POLICY "anon_delete_cat_photos" ON storage.objects
FOR DELETE TO anon, authenticated
USING (bucket_id = 'cat-photos');
