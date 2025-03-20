import { LocationIcon } from "../../../../public/icons/LocationIcon";

interface JobHeaderProps {
  postedDate: string;
  country: string;
  title: string;
  buttonVisible: boolean;
}

export const JobHeader: React.FC<JobHeaderProps> = ({
  postedDate,
  country,
  title,
  buttonVisible
}) => {
  return (
    <div className=" h-[125px] border-[1px] border-[#CBEC5E] rounded-[16px] p-[14px_28px_20px] flex justify-between">
      <div>
        <h1 className="text-[40px] font-medium">{title}</h1>
        <div className="flex gap-[17px] text-[#545454] text-[16px] mt-[7px]">
          <span>{postedDate}</span>
          <div className="flex items-center gap-[2px]">
            <LocationIcon />
            <span>{country}</span>
          </div>
        </div>
      </div>
      {buttonVisible && (
        <div className="mt-[6px]">
          <button className="w-[200px] h-[48px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] font-medium cursor-pointer">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};
