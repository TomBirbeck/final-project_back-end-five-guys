import pool from '../index.js';

await pool.query(
  'Create table if not exists diary (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, patient_id INT, date TEXT, mood INT, details TEXT); '
);

await pool.query(
  'Create table if not exists prescription (prescription_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, patient_id INT, name TEXT, reason TEXT, total NUMERIC, frequency TEXT, dosage NUMERIC, date TEXT, active BOOLEAN, measurement TEXT, monitoring BOOLEAN, monitoringSchedule NUMERIC, override TEXT, quantity NUMERIC, status TEXT);'
);

await pool.query(
  'Create table if not exists doctor (doctor_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, patients INT [], name TEXT, email INT, gp_surgery TEXT); '
);

await pool.query(
  'Create table if not exists allergy (allergy_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, patient_id INT, name TEXT, reason TEXT);'
);
await pool.query(
  'Create table if not exists signUp (signUp_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, code INT, patient_email TEXT, used BOOLEAN);'
);
await pool.query(
  'Create table if not exists patient (patient_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, firstName text, surname TEXT, title TEXT, address TEXT, pregnant BOOLEAN, dob TEXT, gender TEXT, gpSurgery TEXT, nhsNumber INT, phoneNumber INT, postcode TEXT, email TEXT, prepaid TEXT); '
);