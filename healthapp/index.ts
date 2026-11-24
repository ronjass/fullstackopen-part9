import express from "express";
import { calculateBmi } from "./bmiCalculator.ts";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req: any, res: any) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const result = calculateBmi(height, weight);

  res.send({
    weight: weight,
    height: height,
    bmi: result,
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
