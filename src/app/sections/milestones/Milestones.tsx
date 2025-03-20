"use client";

import { useState } from "react";

interface MilestonesProps {}

export const Milestones: React.FC<MilestonesProps> = ({}) => {
  const [paymentMethod, setPaymentMethod] = useState("milestone");
  return (
    <div>
      <div>
        <span className="text-[30px] font-medium">Milestones</span>
      </div>
      <p className="text-[20px] font-medium mt-[10px]">
        How do you want to be paid?
      </p>
      <div>
        <div className="flex gap-[8px] mt-[20px]">
          <div
            onClick={() => setPaymentMethod("milestone")}
            className={`w-[24px] h-[24px] rounded-[50%]  ${
              paymentMethod === "milestone"
                ? "border-[6px] border-[#18470D]"
                : "border-[1px] border-[#AEB3BC]"
            } cursor-pointer`}
          ></div>
          <div>
            <p className="text-[16px]">Per Milestone</p>
            <p className="mt-[8px] text-[#545454] text-[16px]">
              Break the project into smaller sections, known as milestones. You
              will be compensated for each milestone upon completion and
              approval.
            </p>
          </div>
        </div>
        <div className="flex gap-[8px] mt-[20px]">
          <div
            onClick={() => setPaymentMethod("completion")}
            className={`min-w-[18px] min-h-[24px] sm:min-w-[24px] lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] rounded-[50%]  ${
              paymentMethod === "completion"
                ? "border-[5px] border-[#18470D]"
                : "border-[2px] border-[#AEB3BC]"
            } cursor-pointer`}
          ></div>
          <div>
            <p className="text-[16px]">Upon work completion</p>
            <p className="mt-[8px] text-[#545454] text-[16px]">
              Receive the full payment at the end, once all tasks have been
              finished and delivered.
            </p>
          </div>
        </div>
      </div>

      {paymentMethod === "milestone" ? (
        <div className="mt-[39px]">
          <p className="text-[20px] font-medium">
            How many milestones would you like to set?
          </p>
          <div className="mt-[15px]"></div>
          <div className="border-t-[1px] border-[#AEB3BC] text-[20px] text-center flex justify-between pt-[15px]">
            <div>
              <p>Total cost</p>
              <p className="text-[#FF0000] ">€0.0</p>
            </div>
            <div>
              <p>Talent Service Charge</p>
              <p className="">€0.0</p>
            </div>
            <div>
              <p>Your Earnings</p>
              <p className="">€0.0</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mt-[40px] justify-between">
          <div>
            <label className="">
              <p className="text-[18px] text-[#545454]">Bid</p>
              <input
                className="w-[350px] max-w-[350px] h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px]"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="">
              <p className="text-[18px] text-[#545454]">10% Talent Service Charge</p>
              <input
              disabled={true}
                className="w-[350px] max-w-[350px] h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px]"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="">
              <p className="text-[18px] text-[#545454]">You’ll Receive</p>
              <input
                className="w-[350px] max-w-[350px] h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px]"
                type="text"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
