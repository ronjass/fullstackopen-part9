import patients from ".././data/patients.ts";
import type { Patient, NoSsnPatient } from "../types.ts";

//const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
  return patients;
};

const getNoSsnPatients = (): NoSsnPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  getNoSsnPatients,
  addPatient,
};
