"use client";

import { PerMilestone } from "../per-milestone/PerMilestone";
import { Completion } from "../completion/Completion";

interface TermsProps {
  jobApplyData: {
    paymentMethod: string;
    milestones: { id: number, desc: string, dueDate: Date | null, amount: number | null }[];
    additionalInfo: string;
    bid: number | null
  };
  errors: {
    milestones: {
      id: number;
      desc: boolean;
      dueDate: boolean;
      amount: boolean
    }[];
    bid: boolean
  };
  onChangeApplyData: (keyName: string, value: any) => void;
}

export const Terms: React.FC<TermsProps> = ({
  jobApplyData,
  onChangeApplyData,
  errors
}) => {
  return (
    <div>
      <div>
        <span className="text-[16px] sm:text-[20px] lg:text-[30px] font-medium">Terms</span>
      </div>
      <p className="text-[16px] lg:text-[20px] font-medium mt-[13px] sm:mt-[10px]">
        How do you want to be paid?
      </p>
      <div>
        <div className="flex gap-[8px] mt-[30px] sm:mt-[19px]">
          <div>
            <div className="flex gap-[8px]"><div
              onClick={() => onChangeApplyData("paymentMethod", "milestone")}
              className={`w-[24px] h-[24px] rounded-[50%]  ${jobApplyData.paymentMethod === "milestone"
                ? "border-[6px] border-[#18470D]"
                : "border-[1px] border-[#AEB3BC]"
                } cursor-pointer`}
            ></div><p className="text-[16px]">Per Milestone</p></div>
            <p className="2xl:pl-[32px] lg:max-w-[874px] 2xl:max-w-none sm:max-w-[488px] mt-[8px] text-[#545454] text-[16px]">
              Break the project into smaller sections, known as milestones. You
              will be compensated for each milestone upon completion and
              approval.
            </p>
          </div>
        </div>
        <div className="flex gap-[8px] 2xl:mt-[28px] mt-[19px] sm:mt-[20px] lg:mt-[22px]">
          <div>
            <div className="flex gap-[8px]"><div
              onClick={() => onChangeApplyData("paymentMethod", "completion")}
              className={`min-w-[24px] w-[24px] h-[24px] w-[18px] h-[18px] rounded-[50%]  ${jobApplyData.paymentMethod === "completion"
                ? "border-[5px] border-[#18470D]"
                : "border-[2px] border-[#AEB3BC]"
                } cursor-pointer`}
            ></div><p className="text-[16px]">Upon work completion</p></div>
            <p className="sm:max-w-[438px] lg:max-w-none 2xl:pl-[32px] mt-[8px] text-[#545454] text-[16px]">
              Receive the full payment at the end, once all tasks have been
              finished and delivered.
            </p>
          </div>
        </div>
      </div>

      {jobApplyData.paymentMethod === "milestone" ? (
        <PerMilestone errors={errors} onChangeApplyData={onChangeApplyData} jobApplyData={jobApplyData} />
      ) : (
        <Completion onChangeApplyData={onChangeApplyData} jobApplyData={jobApplyData} />
      )}
    </div>
  );
};
