import { InputProps } from "@/types";

export const Input = ({ label, type = "text", placeholder, value, onChange, icon, id, theme = "dark" }: InputProps) => {
  return (
    <div className={`space-y-1 text-${theme}`}>
      <label>{label}</label>

      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-2 pl-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 border-secondary placeholder-gray-400 ${type === "date" ? "pr-4" : "pr-10"}`}
        />

        {icon && <span className="absolute text-gray-400 -translate-y-1/2 top-1/2 right-3 fill-gray-400">{icon}</span>}
      </div>
    </div>
  );
};
