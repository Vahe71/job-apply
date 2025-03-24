import { CalendarIcon } from "../../../../public/icons/CalendarIcon";
import { MoneyIcon } from "../../../../public/icons/MoneyIcon";
import { PersonBrainIcon } from "../../../../public/icons/PersonBrainIcon";

interface AboutProjectProps {
  jobData: {
    projectScope: string;
    projectExperienceLevel: string;
    projectBudget: number;
  };
  customStyles?: string;
}
export const AboutProject: React.FC<AboutProjectProps> = ({
    jobData,
    customStyles
}) => {
  return (
    <div className={`${customStyles} mb-[44px]`}>
      <div className="flex gap-[8px]">
        <div>
          <CalendarIcon />
        </div>
        <div>
          <p className="font-medium text-[16px] sm:text-[20px]">{jobData.projectScope}</p>
          <p className="text-[#545454] text-[14px] mt-[4px]">Work Scope</p>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div>
          <PersonBrainIcon />
        </div>
        <div>
          <p className="font-medium text-[16px] sm:text-[20px]">{jobData.projectExperienceLevel}</p>
          <p className="text-[#545454] text-[14px] mt-[4px]">
            Experience Level
          </p>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div>
          <MoneyIcon />
        </div>
        <div>
          <p className="font-medium text-[16px] sm:text-[20px]">${jobData.projectBudget}</p>
          <p className="text-[#545454] text-[14px] mt-[4px]">Budget</p>
        </div>
      </div>
    </div>
  );
};
