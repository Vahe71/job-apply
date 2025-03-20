import { EmptyStarIcon } from "../../../../public/icons/EmptyStarIcon";
import { FullStarIcon } from "../../../../public/icons/FullStarIcon";
import { HalfStarIcon } from "../../../../public/icons/HalfStarIcon";
import { PaymentVerifiedIcon } from "../../../../public/icons/PaymentVerifiedIcon";

interface AboutClientProps {
  jobData: {
    postedDate: string;
    country: string;
    title: string;
    descriptionText: string;
    descriptionList?: string[];
    paymentVerified: boolean;
    rating: number;
    reviews: number;
    postedJobsCount: number;
    totalSpentMoney: number;
    memberSince: string;
    jobLink: string;
    city: string;
    cityTime: string;
    hireRate: number;
    openJob: number;
    hires: number;
    active: number;
  };
}

export const AboutClient: React.FC<AboutClientProps> = ({ jobData }) => {
  return (
    <div className="border-[1px] border-[#CBEC5E] rounded-[16px] p-[28px_28px_45px] w-full">
      <span className="text-[30px] font-medium">About the client</span>
      {jobData.paymentVerified && (
        <div className="flex gap-[7px] mt-[14px]">
          <PaymentVerifiedIcon />
          <span className="text-[#545454] text-[16px]">
            Payment Method Verified
          </span>
        </div>
      )}
      <div className="mt-[5px] flex gap-[7px] items-center">
        <div className="flex gap-[1px]">
          {Array.from({ length: jobData.rating }).map((_, index) => (
            <div key={index}>
              <FullStarIcon />
            </div>
          ))}
          {!Number.isInteger(jobData.rating) && <HalfStarIcon />}
          {Array.from({ length: 5 - jobData.rating }).map((_, index) => (
            <div key={index}>
              <EmptyStarIcon />
            </div>
          ))}
        </div>
        <span className="text-[16px] text-[#545454]">
          {Number.isInteger(jobData.rating)
            ? `${jobData.rating}.0`
            : jobData.rating}
        </span>
      </div>
      <div className="mt-[16px]">
        <span className="text-[#545454] text-[16px]">
          {jobData.rating} of {jobData.reviews} reviews
        </span>
      </div>
      <p className="text-[#545454] text-[18px] font-medium mt-[25px]">
        {jobData.country}
      </p>
      <p className="text-[#545454] text-[18px] mt-[10px]">
        {jobData.city} {jobData.cityTime}
      </p>
      <p className="text-[#545454] text-[18px] font-medium mt-[25px]">
        {jobData.postedJobsCount} jobs posted
      </p>
      <p className="text-[#545454] text-[18px] mt-[10px]">
        {jobData.hireRate}% hire rate, {jobData.openJob} open job
      </p>
      <p className="text-[#545454] text-[18px] font-medium  mt-[24px]">
        ${jobData.totalSpentMoney} total spent
      </p>
      <p className="text-[#545454] text-[18px] mt-[10px]">
        {jobData.hires} hires, {jobData.active} active
      </p>
      <p className="text-[#545454] text-[18px] mt-[10px]">
        Member since {jobData.memberSince}
      </p>
      <p className="text-[#000] text-[20px] mt-[23px] font-medium">Job link</p>
      <div className="bg-[#F5F5F5] text-[#545454] text-[16px] p-[11px] w-fit mt-[17px] rounded-[6px]">
        {jobData.jobLink}
      </div>
      <div onClick={() => navigator.clipboard.writeText(jobData.jobLink)} className="select-none cursor-pointer text-[#18470D] text-[16px] font-medium mt-[10px]">
        Copy Link
      </div>
    </div>
  );
};
