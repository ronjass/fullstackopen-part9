import diagnoses from ".././data/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

const addDiagnosis = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnosis,
};
