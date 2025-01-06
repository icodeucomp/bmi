import { ButtonProps } from "@/types";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`px-4 text-sm md:text-base py-2 md:px-8 duration-300 ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
};
