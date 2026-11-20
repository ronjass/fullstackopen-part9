const calculateBmi = (height: number, weight: number): string => {
  if (height === 0) {
    throw new Error("Can't divide by 0!");
  }
  if (weight === 0) {
    throw new Error("Weight can't be 0!");
  } else {
    let bmi = weight / (height / 100) ** 2;
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 25.0) return "Normal range";
    else if (bmi >= 25.0) return "Overweight";
    else throw new Error("Calculation can't be done!");
  }
};

try {
  console.log(calculateBmi(180, 74));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
