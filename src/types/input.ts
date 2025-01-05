import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  type: HTMLInputTypeAttribute;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  theme?: "light" | "dark";
}
