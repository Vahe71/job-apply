import { jobData } from "@/app/page";
import { JobDetailsLayout } from "@/app/sections/job-details-layout/JobDetailsLayout";
import { CloseIcon } from "../../public/icons/CloseIcon";
import { OpenNewTab } from "../../public/icons/OpenNewTab";

interface JobDetailsPopupProps {
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobDetailsPopup: React.FC<JobDetailsPopupProps> = ({
  setPopupVisible,
}) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,_0,_0,_0.42)] z-10 fixed top-0 left-0 flex  overflow-hidden">
      <div className="w-full flex justify-end pt-[116px]">
        <div className="bg-white p-[24px_20px_24px_40px] rounded-tl-[50px]  max-w-[1533px] w-full">
          <div className="w-full flex justify-between">
            <div
              className="cursor-pointer"
              onClick={() => setPopupVisible(false)}
            >
              <CloseIcon />
            </div>
            <div className="flex items-center gap-[4px] cursor-pointer">
              <OpenNewTab />
              <span className="text-[#18470D] text-[12px]">
                Open in a new tab
              </span>
            </div>
          </div>
          <hr className="h-[1px] text-[#EAEAEA] mt-[24px]" />
          <div className="py-[44px] overflow-y-auto h-full pr-[10px]">
            <JobDetailsLayout jobData={jobData} />
          </div>
        </div>
      </div>
    </div>
  );
};
