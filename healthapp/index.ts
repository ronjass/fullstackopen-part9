import express, { Request, Response } from "express";
import { calculateBmi } from "./bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req: Request, res: Response) => {
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

app.post("/exercises", (req: Request, res: Response) => {
  const body = req.body as { daily_exercises?: number[]; target?: number };
  const { daily_exercises, target } = body;

  if (!daily_exercises || !target) {
    res.status(400).json({ error: "parameters missing" });
  }

  if (
    typeof target !== "number" ||
    isNaN(target) ||
    !daily_exercises.every(
      (exercise) => typeof exercise === "number" && !isNaN(exercise)
    )
  ) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const result = calculateExercises(daily_exercises, target);
  console.log(result);

  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
