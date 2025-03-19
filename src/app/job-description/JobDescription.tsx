interface JobDescriptionProps {
  text: string;
  list?: string[];
}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  text,
  list,
}) => {
  return (
    <div>
      <p className="text-[20px] font-medium mt-[8px]">Description</p>
      <div className="text-[#545454] text-[16px] mt-[23px]">
        <p className="">{text}</p>
        <ul className="">
          {list?.map((item, i) => {
            return (
              <li
                className="text-[14px] text-[#545454] sm:text-[14px] lg:text-[16px] pl-[10px] flex items-center gap-[10px]"
                key={i}
              >
                <div className="w-[4px] h-[4px] bg-[#545454] rounded-full"></div>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
