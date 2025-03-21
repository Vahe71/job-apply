import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Убери, если будешь стилизовать вручную
import { getYear, getMonth } from "date-fns";

interface DatePickerProps {
  changeMilestoneData: (key: string, id:number, newData: any) => void; 
  milestoneId: number;
  milestoneDate: Date | null;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({changeMilestoneData, milestoneId, milestoneDate}) => {
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const years = Array.from({ length: (2051 - 2025) }, (_, i) => getYear(new Date()) + i);
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
            changeMilestoneData('dueDate', milestoneId, new Date(date))
          } else {
            setDueDate(null); 
          }
        }}
        dateFormat="dd.MM.yyyy"
        className="focus:outline-none outline-none flex-grow px-4 py-2 text-[#8B939F] text-[16px] font-medium border-[1px] border-[#AEB3BC] rounded-[12px] h-[42px] p-[8px] block w-full"
        calendarClassName="bg-white border border-gray-200 rounded-lg p-2"
        dayClassName={(date) =>
          "text-gray-900 hover:bg-blue-500 hover:text-white rounded-md w-10 h-10 flex items-center justify-center"
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
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-t-lg">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className="px-2 py-1 text-gray-600 hover:bg-gray-300 rounded-md"
            >
              ◀
            </button>

            <div className="flex items-center space-x-2">
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) =>
                  changeYear(parseInt(value))
                }
                className="border rounded-md px-2 py-1"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                className="border rounded-md px-2 py-1"
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className="px-2 py-1 text-gray-600 hover:bg-gray-300 rounded-md"
            >
              ▶
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
