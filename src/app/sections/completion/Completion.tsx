"use client";

import CustomDatePicker from "@/components/CustomDatePicker";

interface MilestonesProps {
  jobApplyData: {
    paymentMethod: string;
    bid: number
  };
  onChangeApplyData: (keyName: string, value: number) => void;
}

export const Completion: React.FC<MilestonesProps> = ({
  jobApplyData,
  onChangeApplyData,
}) => {

  return (
    <div className="flex mt-[40px] justify-between">
      <div>
        <label className="">
          <p className="text-[18px] text-[#545454]">Bid</p>
          <input
            value={jobApplyData.bid}
            onChange={(e) => onChangeApplyData('bid', +e.target.value)}
            placeholder="€ 0.0"
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-black placeholder:text-black w-[350px] max-w-[350px] h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px]"
            type="number"
          />
        </label>
      </div>
      <div>
        <label className="">
          <p className="text-[18px] text-[#545454]">
            10% Talent Service Charge
          </p>
          <input 
            placeholder="-€ 0.0"
            disabled={true}
            className="bg-[#E9E9E9] w-[350px] max-w-[350px] h-[42px] border-[1px] border-[#E9E9E9] rounded-[12px] outline-0 p-[9px_8px] mt-[8px]"
            type="text"
          />
        </label>
      </div>
      <div>
        <label className="">
          <p className="text-[18px] text-[#545454]">You’ll Receive</p>
          <input
            disabled
            placeholder="€ 0.0"
            className="w-[350px] max-w-[350px] h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px] placeholder:text-black "
            type="text"
          />
        </label>
      </div>
    </div>
  );
};
