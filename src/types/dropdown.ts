export interface DropdownProps {
  parentClassName: string;
  className: string;
  data: {
    display: string;
    value: "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active" | null;
  }[];
  selectedValue: string | null;
  handleFiltered: (value: "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active" | null) => void;
}
