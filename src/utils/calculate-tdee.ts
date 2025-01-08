type Gender = "male" | "female";
type ActivityLevel = "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active" | null;

interface User {
  gender: Gender;
  weight: number; // in kg
  height: number; // in cm
  age: number; // in years
  activityLevel: ActivityLevel;
}

// Function to calculate BMR
const calculateBMR = (user: User): number => {
  const { gender, weight, height, age } = user;
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// Function to calculate TDEE
export const calculateTDEE = (user: User): number => {
  const bmr = calculateBMR(user);
  const activityMultiplier = {
    sedentary: 1.2,
    "lightly active": 1.375,
    "moderately active": 1.55,
    "very active": 1.725,
    "extra active": 1.9,
  };

  return bmr * activityMultiplier[user.activityLevel!];
};
