import express, { type Response } from "express";
import patientService from "../services/patientService.ts";
import { NoSsnPatient } from "../types.ts";

const router = express.Router();

router.get("/", (_req, res: Response<NoSsnPatient[]>) => {
  const data = patientService.getNoSsnPatients();
  res.send(data);
});

router.post("/", (_req, res) => {
  res.send("Saving a patient!");
});

export default router;
