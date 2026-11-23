interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const argumentParser = (
  args: string[]
): { target: number; values: number[] } => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 50) throw new Error("Too many arguments");

  const target = Number(args[2]);
  const values = args.slice(3).map(Number);

  if (isNaN(target) || !values.every((value) => !isNaN(value))) {
    throw new Error("Provided values were not numbers!");
  }

  return {
    target,
    values,
  };
};

const calculateExercises = (values: number[], targetValue: number): Results => {
  let sum = 0;
  values.forEach((value) => {
    sum += value;
  });

  let length = values.length;

  let days = values.filter((value) => value !== 0).length;

  let avg = sum / length;

  let ratingValue = 1;
  let description = "bad";
  let targetSuccess = false;

  if (avg >= targetValue)
    (ratingValue = 3), (description = "very good"), (targetSuccess = true);
  if (avg < targetValue && avg >= targetValue * 0.75)
    (ratingValue = 2), (description = "not too bad but could be better");

  return {
    periodLength: length,
    trainingDays: days,
    success: targetSuccess,
    rating: ratingValue,
    ratingDescription: description,
    target: targetValue,
    average: avg,
  };
};

try {
  const { target, values } = argumentParser(process.argv);
  console.log(calculateExercises(values, target));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
