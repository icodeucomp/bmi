export interface loginRequest {
  email: string;
  password: string;
}

export interface registerRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: "male" | "female" | null;
}

export interface BmiRequest {
  gender: "male" | "female" | null;
  height: string;
  weight: string;
  dateOfBirth: string;
}

export interface HealthyRequest {
  gender: "male" | "female" | null;
  height: string;
  weight: string;
  dateOfBirth: string;
  activityLevel: "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active";
}
