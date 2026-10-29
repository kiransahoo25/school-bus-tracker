CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. SCHOOLS
CREATE TABLE IF NOT EXISTS schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  timezone TEXT DEFAULT 'Asia/Kolkata',
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. USERS (Parents, Drivers, Conductors, Admins)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id),
  role TEXT NOT NULL CHECK (role IN ('parent','driver','conductor','admin','superadmin')),
  phone TEXT UNIQUE NOT NULL,
  name TEXT,
  email TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. STUDENTS
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id),
  name TEXT NOT NULL,
  grade TEXT,
  section TEXT,
  student_code TEXT,
  home_address TEXT,
  home_lat DOUBLE PRECISION,
  home_lng DOUBLE PRECISION,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. PARENT-STUDENT LINK
CREATE TABLE IF NOT EXISTS parent_students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_user_id UUID REFERENCES users(id),
  student_id UUID REFERENCES students(id),
  relationship TEXT,
  verified_at TIMESTAMPTZ,
  UNIQUE(parent_user_id, student_id)
);

-- 5. BUSES
CREATE TABLE IF NOT EXISTS buses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id),
  plate_number TEXT NOT NULL,
  capacity INT DEFAULT 40,
  is_active BOOLEAN DEFAULT true
);

-- 6. ROUTES
CREATE TABLE IF NOT EXISTS routes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id),
  name TEXT NOT NULL,
  direction TEXT CHECK (direction IN ('morning','evening','both')),
  bus_id UUID REFERENCES buses(id),
  driver_id UUID REFERENCES users(id),
  conductor_id UUID REFERENCES users(id),
  is_active BOOLEAN DEFAULT true
);

-- 7. STOPS
CREATE TABLE IF NOT EXISTS stops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID REFERENCES routes(id),
  name TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  sequence INT NOT NULL,
  scheduled_pickup TIME,
  scheduled_drop TIME,
  geofence_radius_m INT DEFAULT 150
);

-- 8. TRIPS
CREATE TABLE IF NOT EXISTS trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID REFERENCES routes(id),
  bus_id UUID REFERENCES buses(id),
  driver_id UUID REFERENCES users(id),
  conductor_id UUID REFERENCES users(id),
  direction TEXT CHECK (direction IN ('morning','evening')),
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled','active','completed','cancelled')),
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 9. BOARDING EVENTS
CREATE TABLE IF NOT EXISTS boarding_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID REFERENCES trips(id),
  student_id UUID REFERENCES students(id),
  stop_id UUID REFERENCES stops(id),
  event_type TEXT CHECK (event_type IN ('BOARDED','DROPPED','ABSENT','UNVERIFIED')),
  verified_by UUID REFERENCES users(id),
  method TEXT DEFAULT 'MANUAL',
  recorded_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(trip_id, student_id, event_type)
);