import Link from "next/link";
import { CloseIcon } from "../../public/icons/CloseIcon";
import { PopupCheckIcon } from "../../public/icons/PopupCheckIcon";

interface PopupProps {
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  //   handleChangeStep: (step: number) => void;
  //   setCurrentPage: (value: string) => void;
}

export const JobApplyPopup: React.FC<PopupProps> = ({
  setPopupVisible,
  //   setCurrentPage,
  //   handleChangeStep
}) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,_0,_0,_0.42)] z-10 fixed top-0 left-0 flex justify-center items-center p-[20px]">
      <div className="max-w-[637px] h-[390px] bg-white w-full rounded-[20px] flex flex-col items-center pt-[20px] sm:pt-[35px] px-[25px]">
        <div className="w-full flex justify-end">
          <div
            className="cursor-pointer"
            onClick={() => setPopupVisible(false)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px]">
          <PopupCheckIcon />
        </div>
        <span className="text-[16px] sm:text-[20px] lg:text-[26px] text-black font-medium mt-[6px] sm:mt-[27px]">
          Your application successfully sent
        </span>
        <p className="text-[14px] lg:text-[16px] text-[#545454] max-w-[390px] text-center mt-[23px]">
        Wait the client response for your application.
        </p>
        <div className="flex gap-[16px] mt-[30px] sm:mt-[59px] justify-center flex-wrap">
          <button className="w-[190px] h-[48px] text-[#18470D] text-[16px] border-1 border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
            Back to Home
          </button>
          <button className="w-[190px] h-[48px] text-[#18470D] text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]">
            Create a new job
          </button>
        </div>
      </div>
    </div>
  );
};
