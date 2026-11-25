import express, { type Response } from "express";
import diagnosisService from "../services/diagnosisService.ts";
import { Diagnosis } from "../types.ts";

const router = express.Router();

router.get("/", (_req, res: Response<Diagnosis[]>) => {
  const data = diagnosisService.getDiagnoses();
  res.send(data);
});

router.post("/", (_req, res) => {
  res.send("Saving a diagnosis!");
});

export default router;
