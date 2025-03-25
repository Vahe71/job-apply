import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Убери, если будешь стилизовать вручную
import { getYear, getMonth } from "date-fns";
import { MiniCalendarIcon } from "../../public/icons/MiniCalendarIcon";
import { GreenArrow } from "../../public/icons/GreenArrow";
import { BlackArrow } from "../../public/icons/BlackArrow";

interface DatePickerProps {
  changeMilestoneData: (key: string, id: number, newData: any) => void;
  milestoneId: number;
  milestoneDate: Date | null;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  changeMilestoneData,
  milestoneId,
  milestoneDate,
}) => {
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const years = Array.from(
    { length: 2051 - 2025 },
    (_, i) => getYear(new Date()) + i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    console.log(dueDate);
  }, [dueDate]);

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <DatePicker
        placeholderText="00/00/00"
        selected={milestoneDate}
        onChange={(date) => {
          if (date) {
            setDueDate(new Date(date));
            changeMilestoneData("dueDate", milestoneId, new Date(date));
          } else {
            setDueDate(null);
          }
        }}
        dateFormat="dd.MM.yyyy"
        className="focus:outline-none outline-none flex-grow text-[#8B939F] text-[16px] font-medium block my-[12px] w-full"
        calendarClassName="bg-white border border-gray-200 !rounded-[12px] p-2 pt-[18px] w-[350px] min-h-[350px] !flex flex-col items-center shadow-[2px_2px_5px_0px_rgba(0,0,0,0.1)]"
        dayClassName={(date) =>
          "max-w-[25px] h-[25px] !m-0 text-[13px] hover:!bg-[#F0F1F4] rounded-[4px] hover:text-red-200   flex items-center justify-center"
        }
        todayButton="Today"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex justify-between items-center p-2 pt-0 pb-[10px] rounded-t-lg">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className="mr-[3px] cursor-pointer"
            >
              <GreenArrow />
            </button>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(parseInt(value))
                  }
                  className="date-year-dropdown outline-none border-[#AEB3BC] border-[1px] rounded-[12px] h-[42px] w-[93px] appearance-none p-[9px_8px] text-[#8B939F] text-[16px]"
                >
                  {years.map((year) => (
                    <option className="" key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <BlackArrow />
                </div>
              </div>

              <div className="relative">
                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                   className="outline-none border-[#AEB3BC] border-[1px] rounded-[12px] h-[42px] w-[125px] appearance-none p-[9px_8px] text-[#8B939F] text-[16px]"
                >
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <BlackArrow />
                </div>
              </div>
            </div>

            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className="ml-[3px] rotate-180 cursor-pointer"
            >
              <GreenArrow />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
