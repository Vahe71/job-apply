interface AdditionalInformationProps {}

export const AdditionalInformation: React.FC<
  AdditionalInformationProps
> = ({}) => {
  return (
    <div>
      <div>
        <span className="text-[30px] font-medium">Additional Information</span>
      </div>
      <div className="mt-[26px]">
        <p className="text-[#545454] text-[18px]">Cover letter</p>
        <textarea className="text-[16px] mt-[8px] w-full outline-none border-[1px] border-[#AEB3BC] rounded-[12px] resize-none h-[228px] p-[10px]" placeholder="Mention the reasons why you chose us."></textarea>
      </div>
    </div>
  );
};
