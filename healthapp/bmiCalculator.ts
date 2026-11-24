interface Values {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): Values => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");
  if (Number(args[2]) === 0 || Number(args[3]) === 0)
    throw new Error("Height and/or weight can't be 0!");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export function calculateBmi(height: number, weight: number): string {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) return "Underweight";
  else if (bmi >= 18.5 && bmi < 25.0) return "Normal range";
  else if (bmi >= 25.0) return "Overweight";
  return "Invalid BMI"; // Added return statement for completeness
}

try {
  if (process.argv[1] === import.meta.filename) {
    const { height, weight } = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  }
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
