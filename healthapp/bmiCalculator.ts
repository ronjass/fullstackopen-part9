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

const calculateBmi = (height: number, weight: number): void => {
  let bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) console.log("Underweight");
  else if (bmi >= 18.5 && bmi < 25.0) console.log("Normal range");
  else if (bmi >= 25.0) console.log("Overweight");
};

try {
  const { height, weight } = parseArguments(process.argv);
  calculateBmi(height, weight);
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
