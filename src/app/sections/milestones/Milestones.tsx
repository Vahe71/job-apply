"use client";

import CustomDatePicker from "@/components/CustomDatePicker";
import { PerMilestone } from "../per-milestone/PerMilestone";
import { Completion } from "../completion/Completion";

interface MilestonesProps {
  jobApplyData: {
    paymentMethod: string;
    milestones: {id: number, desc: string, dueDate: Date | null, amount: number | null}[];
    additionalInfo: string;
    bid: number
  };
  onChangeApplyData: (keyName: string, value: any) => void;
}

export const Milestones: React.FC<MilestonesProps> = ({
  jobApplyData,
  onChangeApplyData,
}) => {
  return (
    <div>
      <div>
        <span className="text-[30px] font-medium">Terms</span>
      </div>
      <p className="text-[20px] font-medium mt-[10px]">
        How do you want to be paid?
      </p>
      <div>
        <div className="flex gap-[8px] mt-[20px]">
          <div
            onClick={() => onChangeApplyData("paymentMethod", "milestone")}
            className={`w-[24px] h-[24px] rounded-[50%]  ${
              jobApplyData.paymentMethod === "milestone"
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
            onClick={() => onChangeApplyData("paymentMethod", "completion")}
            className={`min-w-[18px] min-h-[24px] sm:min-w-[24px] lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] rounded-[50%]  ${
              jobApplyData.paymentMethod === "completion"
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

      {jobApplyData.paymentMethod === "milestone" ? (
        <PerMilestone onChangeApplyData={onChangeApplyData} jobApplyData={jobApplyData} />
      ) : (
        <Completion onChangeApplyData={onChangeApplyData} jobApplyData={jobApplyData} />
      )}
    </div>
  );
};
