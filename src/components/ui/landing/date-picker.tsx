import { useToggleState } from "@/hooks";
import * as React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownSelectInputProps {
  label: string;
  dates: string[];
  handleDateChange: (type: "year" | "month" | "day", value: string) => void;
  type: "year" | "month" | "day";
}

const DropdownSelectInput = ({ label, dates, handleDateChange, type }: DropdownSelectInputProps) => {
  const [ref, popover, togglePopover] = useToggleState(false);

  return (
    <span ref={ref} className={`dropdown w-full ${popover ? "border-primary" : "border-secondary"}`} onClick={togglePopover}>
      {label}
      <IoMdArrowDropdown size={20} className={`duration-300 absolute right-2 fill-secondary ${popover && "rotate-180"}`} />
      {popover && (
        <div className={`popover top-12`}>
          {dates?.map((date, index) => (
            <button key={index} onClick={() => handleDateChange(type, date)} className="w-full py-2 text-center border-b hover:bg-gray-200">
              {date}
            </button>
          ))}
        </div>
      )}
    </span>
  );
};

export const DatePicker = ({ onDateChange }: { onDateChange: (date: { year: string; month: string; day: string }) => void }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  const [selectedYear, setSelectedYear] = React.useState<string>("");
  const [selectedMonth, setSelectedMonth] = React.useState<string>("");
  const [selectedDay, setSelectedDay] = React.useState<string>("");

  const handleDateChange = (type: "year" | "month" | "day", value: string) => {
    if (type === "year") setSelectedYear(value);
    if (type === "month") setSelectedMonth(value);
    if (type === "day") setSelectedDay(value);

    onDateChange({
      year: type === "year" ? value : selectedYear,
      month: type === "month" ? value : selectedMonth,
      day: type === "day" ? value : selectedDay,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <DropdownSelectInput dates={years} handleDateChange={handleDateChange} type="year" label={selectedYear ? selectedYear : "Pilih Tahun"} />
      <DropdownSelectInput dates={months} handleDateChange={handleDateChange} type="month" label={selectedMonth ? selectedMonth : "Pilih Bulan"} />
      <DropdownSelectInput dates={days} handleDateChange={handleDateChange} type="day" label={selectedDay ? selectedDay : "Pilih Tanggal"} />
    </div>
  );
};
