"use client";

import CustomDatePicker from "@/components/CustomDatePicker";
import { useEffect, useState } from "react";

interface MilestonesProps {
  jobApplyData: {
    paymentMethod: string;
    milestones: {
      id: number;
      desc: string;
      dueDate: Date | null;
      amount: number | null;
    }[];
  };
  onChangeApplyData: (keyName: string, value: any) => void;
}

export const PerMilestone: React.FC<MilestonesProps> = ({
  jobApplyData,
  onChangeApplyData,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 1024) {
      setIsBrowser(true);
    }
  }, []);
  const addMilestone = () => {
    onChangeApplyData("milestones", [
      ...jobApplyData.milestones,
      { id: jobApplyData.milestones.length + 1, dueDate: null, amount: 0 },
    ]);
  };
  const changeMilestoneData = (key: string, id: number, newData: any) => {
    onChangeApplyData(
      "milestones",
      jobApplyData.milestones.map((milestone) => {
        if (milestone.id === id) {
          return {
            ...milestone,
            [key]: newData,
          };
        }
        return milestone;
      })
    );
  };

  const validateNumberInput = (value: string) => {
    return value.replace(/^0+/, "").replace(/[^0-9]/g, "") || "1";
  };
  return (
    <div>
      <div className="mt-[39px]">
        <p className="text-[20px] font-medium">
          How many milestones would you like to set?
        </p>
        <div className="mt-[15px] flex flex-col gap-[18px]">
          {jobApplyData.milestones.map((item, i) => {
            return (
              <div key={i} className="flex">
                <span
                  className={`mr-[12px] ${
                    i === 0 ? " mt-[44px] " : " mt-[9px] "
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex w-full justify-between">
                  <div className="flex w-full lg:max-w-[409px] 2xl:max-w-[637px]">
                    <div className="w-full">
                      {(i === 0 || isBrowser) && (
                        <span className="block mb-[8px] text-[#545454] text-[18px]">
                          Description
                        </span>
                      )}

                      <input
                        defaultValue={item.desc}
                        onChange={(e) =>
                          changeMilestoneData("desc", item.id, e.target.value)
                        }
                        className="text-[#8B939F] text-[16px] font-medium border-[1px] border-[#AEB3BC] rounded-[12px] h-[42px] p-[8px] w-full outline-none"
                        type="text"
                        placeholder="Describe Milestone 1"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:max-w-[314px] 2xl:max-w-[350px]">
                    {(i === 0 || isBrowser) && (
                      <span className="block mb-[8px] text-[#545454] text-[18px]">
                        Due Date
                      </span>
                    )}
                    <CustomDatePicker
                      milestoneId={item.id}
                      milestoneDate={item.dueDate}
                      changeMilestoneData={changeMilestoneData}
                    />
                  </div>
                  <div className="w-full lg:max-w-[314px] 2xl:max-w-[350px]">
                    {(i === 0 || isBrowser) && (
                      <span className="block mb-[8px] text-[#545454] text-[18px]">
                        Amount
                      </span>
                    )}

                    <input
                      value={item.amount || ""}
                      onChange={(e) =>
                        changeMilestoneData(
                          "amount",
                          item.id,
                          validateNumberInput(e.target.value)
                        )
                      }
                      className="text-[#8B939F] text-[16px] font-medium border-[1px] border-[#AEB3BC] rounded-[12px] h-[42px] p-[8px] w-full outline-none"
                      type="text"
                      placeholder="€ 0.0"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-[8px]">
          <span
            onClick={() => addMilestone()}
            className="text-[#18470D] ml-[20px] select-none cursor-pointer"
          >
            +Add Milestone
          </span>
        </div>
        <div className="border-t-[1px] mt-[43px] border-[#AEB3BC] text-[20px] text-center flex justify-between pt-[15px]">
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
    </div>
  );
};
