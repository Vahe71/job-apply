"use client";
import { JobDescription } from "@/app/sections/job-description/JobDescription";
import { JobHeader } from "../sections/job-header/JobHeader";
import { InfoSectionGreen } from "@/components/InfoSectionGreen";
import { JobSkills } from "../sections/job-skills/JobSkills";
import { jobData } from "../page";
import { Milestones } from "../sections/milestones/Milestones";
import { AdditionalInformation } from "../sections/additional-information/AdditionalInformation";
import { JobApplyPopup } from "@/components/JobApplyPopup";
import { useEffect, useState } from "react";
import { JobDetailsPopup } from "@/components/JobDetailsPopup";
import Link from "next/link";
import { CalendarIcon } from "../../../public/icons/CalendarIcon";
import { PersonBrainIcon } from "../../../public/icons/PersonBrainIcon";
import { MoneyIcon } from "../../../public/icons/MoneyIcon";

const JobApply = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [jobDetailsPopupVisible, setJobDetailsPopupVisible] = useState(false);
  const [jobApplyData, setJobApplyData] = useState({
    paymentMethod: "milestone",
    additionalInfo: "",
    milestones: [{ id: 1, desc: "", dueDate: null, amount: null }],
    bid: null,
  });
  const [errors, setErrors] = useState({ additionalInfo: false });

  useEffect(() => {
    // delete this
    console.log(jobApplyData);
  }, [jobApplyData]);

  const changeApplyData = (keyName: string, value: any) => {
    if (jobApplyData.hasOwnProperty(keyName)) {
      setJobApplyData({
        ...jobApplyData,
        [keyName]: value,
      });
    }
  };
  useEffect(() => {
    jobDetailsPopupVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [jobDetailsPopupVisible]);

  const onSubmitApp = () => {
    if (!jobApplyData.additionalInfo.trim()) {
      setErrors({
        ...errors,
        additionalInfo: true,
      });
      return;
    }
    setPopupVisible(true);
  };

  return (
    <>
      {popupVisible && <JobApplyPopup setPopupVisible={setPopupVisible} />}
      <main className="px-[20px] sm:px-[40px] lg:max-w-[1280px] 2xl:max-w-[1547px] mx-auto lg:mt-[37px] 2xl:mt-[89px] sm:mt-[36px] mt-[42px]">
        <h1 className="2xl:text-[40px] lg:text-[30px] sm:text-[24px] text-[20px] font-medium mb-[34px]">Apply for job</h1>
        <JobHeader
          postedDate={jobData.postedDate}
          country={jobData.country}
          title={jobData.title}
          buttonVisible={false}
        />
        <div className="flex mt-[10px] lg:mt-[20px] 2xl:mt-[30px] gap-[34px]">
          <div className="w-full">
            <div className="">
              <InfoSectionGreen title="Details" lineWidth="w-[77px]">
                <div className="flex flex-col sm:flex-row">
                  <div className="max-w-[982px] sm:mr-[25px] lg:mr-[32px]">
                    <JobDescription
                      list={jobData.descriptionList}
                      text={jobData.descriptionText}
                      customStyles="sm:max-w-[526px] lg:max-w-[809px] 2xl:max-w-none"
                    />
                  </div>
                  <hr className="bg-[#AEB3BC] w-[100%] h-[1px] sm:w-[1px] sm:h-[406px] mt-[18px] sm:mt-[22px] 2xl:mt-[29px]" />
                  <div
                    className={`flex flex-col mt-[30px] sm:mt-[55px] 2xl:mt-[44px] sm:ml-[25px] lg:ml-[57px] gap-[16px] sm:gap-[43px] lg:gap-[35px] mb-[44px]`}
                  >
                    <div className="flex lg:gap-[10px] sm:gap-[16px] gap-[4px]">
                      <div className="lg:w-[28px] lg:h-[28px] sm:w-[20px] sm:h-[20px] w-[24px] h-[24px]">
                        <CalendarIcon />
                      </div>
                      <div>
                        <p className="font-medium text-[16px] lg:text-[20px]">
                          {jobData.projectScope}
                        </p>
                        <p className="text-[#545454] text-[14px] mt-[4px]">
                          Work Scope
                        </p>
                      </div>
                    </div>
                    <div className="flex lg:gap-[10px] sm:gap-[16px] gap-[4px]">
                      <div className="lg:w-[28px] lg:h-[28px] sm:w-[20px] sm:h-[20px] w-[24px] h-[24px]">
                        <PersonBrainIcon />
                      </div>
                      <div>
                        <p className="font-medium text-[16px] lg:text-[20px]">
                          {jobData.projectExperienceLevel}
                        </p>
                        <p className="text-[#545454] text-[14px] mt-[4px]">
                          Experience Level
                        </p>
                      </div>
                    </div>
                    <div className="flex lg:gap-[10px] sm:gap-[16px] gap-[4px]">
                      <div className="lg:w-[28px] lg:h-[28px] sm:w-[20px] sm:h-[20px] w-[24px] h-[24px]">
                        <MoneyIcon />
                      </div>
                      <div>
                        <p className="font-medium text-[16px] lg:text-[20px]">
                          ${jobData.projectBudget}
                        </p>
                        <p className="text-[#545454] text-[14px] mt-[4px]">
                          Budget
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </InfoSectionGreen>
            </div>
            <div className="2xl:mt-[30px] lg:mt-[20px] mt-[10px]">
              <InfoSectionGreen title="Skills" lineWidth="w-[77px]">
                <div className="mt-[16px]">
                  <JobSkills skills={jobData.jobSkills} />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="2xl:mt-[30px] lg:mt-[20px] mt-[10px]">
              <InfoSectionGreen title="Terms" lineWidth="w-[111px]">
                <div className="mt-[16px]">
                  <Milestones
                    onChangeApplyData={changeApplyData}
                    jobApplyData={jobApplyData}
                  />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="2xl:mt-[30px] lg:mt-[20px] mt-[10px]">
              <InfoSectionGreen
                title="Additional Information"
                lineWidth="w-[201px]"
              >
                <div className="mt-[16px]">
                  <AdditionalInformation
                    error={errors.additionalInfo}
                    onChangeApplyData={changeApplyData}
                  />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="mt-[60px] sm:mt-[53px] flex flex-wrap justify-center sm:justify-end gap-[13px]">
              <Link href={"/"}>
                <button className="text-[#18470D] text-[16px] w-[238px] h-[40px] sm:w-[163px] sm:h-[48px] 2xl:w-[200px] 2xl:h-[48px] rounded-[49px] border-[#CCCCCC] border-[1px] font-medium cursor-pointer">
                  Cancel
                </button>
              </Link>
              <button
                onClick={() => onSubmitApp()}
                className=" rounded-[49px] w-[238px] h-[40px] sm:w-[212px] sm:h-[44px] lg:w-[216px] h-[48px] 2xl:w-[265px] 2xl:h-[48px] bg-[#CBEC5E] text-[#18470D] font-medium cursor-pointer"
              >
                Submit your application
              </button>
            </div>
          </div>
        </div>
        <button
          className="p-[20px] cursor-pointer orange"
          onClick={() => setJobDetailsPopupVisible(true)}
        >
          Job Details Layout Popup
        </button>
      </main>
      {jobDetailsPopupVisible && (
        <JobDetailsPopup setPopupVisible={setJobDetailsPopupVisible} />
      )}
    </>
  );
};

export default JobApply;
