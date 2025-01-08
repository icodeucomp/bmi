export interface DropdownProps {
  parentClassName: string;
  className: string;
  data: {
    display: string;
    value: "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active";
  }[];
  selectedValue: string;
  handleFiltered: (value: "sedentary" | "lightly active" | "moderately active" | "very active" | "extra active") => void;
}
