import { ReactNode } from "react";

interface InfoSectionGreenProps {
  children: ReactNode;
  title: string;
  lineWidth: string;
}

export const InfoSectionGreen: React.FC<InfoSectionGreenProps> = ({ children, title, lineWidth }) => {
  return (
    <div className="border-[1px] border-[#CBEC5E] rounded-[16px] p-[22px_27px_34px]">
      <div>
        <p className="text-[#8A8A8A] text-[16px]">{title}</p>
        <div className="relative mt-[5px] h-[5px]">
          <div className="bg-[#AEB3BC] h-[1px]"></div>
          <div className={`h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 -top-[2px] `} style={{width: lineWidth}}></div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
