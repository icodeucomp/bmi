import { useToggleState } from "@/hooks";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownSelectInputProps {
  label: string;
  dates: number[] | string[];
  handleFiltered: (value: number | string) => void;
}

const DropdownSelectInput = ({ label, dates, handleFiltered }: DropdownSelectInputProps) => {
  const [ref, popover, togglePopover] = useToggleState(false);

  return (
    <span ref={ref} className={`dropdown w-full ${popover ? "border-primary" : "border-secondary"}`} onClick={togglePopover}>
      {label}
      <IoMdArrowDropdown size={20} className={`duration-300 absolute right-2 fill-secondary ${popover && "rotate-180"}`} />
      {popover && (
        <div className={`popover top-12`}>
          {dates?.map((date, index) => (
            <button key={index} onClick={() => handleFiltered(date)} className="w-full px-4 py-2 text-start hover:bg-gray/20">
              {date}
            </button>
          ))}
        </div>
      )}
    </span>
  );
};

const DatePicker: React.FC = () => {
  const [date, setDate] = useState<number | string | null>(null);
  const [month, setMonth] = useState<number | string | null>(null);
  const [year, setYear] = useState<number | string | null>(null);

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const handleFilterDate = (value: number | string) => {
    setDate(value);
  };
  const handleFilterMonth = (value: number | string) => {
    setMonth(value);
  };
  const handleFilterYear = (value: number | string) => {
    setYear(value);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <DropdownSelectInput dates={dates} handleFiltered={handleFilterDate} label={date ? date.toString() : "Pilih Tanggal"} />
      <DropdownSelectInput dates={months} handleFiltered={handleFilterMonth} label={month ? month.toString() : "Pilih Bulan"} />
      <DropdownSelectInput dates={years} handleFiltered={handleFilterYear} label={year ? year.toString() : "Pilih Tahun"} />
    </div>
  );
};

export default DatePicker;
