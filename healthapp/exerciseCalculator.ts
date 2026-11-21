interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
