"use client";
import { JobDescription } from "@/app/sections/job-description/JobDescription";
import { JobHeader } from "../sections/job-header/JobHeader";
import { InfoSectionGreen } from "@/components/InfoSectionGreen";
import { JobSkills } from "../sections/job-skills/JobSkills";
import { jobData } from "../page";
import { Terms } from "../sections/terms/Terms";
import { AdditionalInformation } from "../sections/additional-information/AdditionalInformation";
import { AboutProject } from "../sections/about-project/AboutProject";
import { JobApplyPopup } from "@/components/JobApplyPopup";
import { useEffect, useState } from "react";
import { JobDetailsPopup } from "@/components/JobDetailsPopup";
import Link from "next/link";

const JobApply = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [jobDetailsPopupVisible, setJobDetailsPopupVisible] = useState(false);
  const [jobApplyData, setJobApplyData] = useState({
    paymentMethod: "milestone",
    additionalInfo: "",
    milestones: [{ id: 1, desc: '', dueDate: null, amount: null }],
    bid: null
  });
  const [errors, setErrors] = useState({ additionalInfo: false, milestones: [], bid: false });

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
    let hasErrors = false;

    if (!jobApplyData.additionalInfo.trim()) {
      hasErrors = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        additionalInfo: true,
      }));
    }

    if (jobApplyData.paymentMethod === 'milestone') {
      const newMilestonesErrors = jobApplyData.milestones.map((milestone) => {
        const milestoneErrors: any = {};
        Object.keys(milestone).forEach((key) => {
          if (!milestone[key]) {
            milestoneErrors[key] = 'error';
            milestoneErrors.id = milestone.id;
          }
        });
        return Object.keys(milestoneErrors).length > 0 ? milestoneErrors : null;
      });

      if (newMilestonesErrors.some((err) => err !== null)) {
        hasErrors = true;
        setErrors((prevErrors) => ({
          ...prevErrors,
          milestones: newMilestonesErrors,
        }));
      }
    } else if (jobApplyData.paymentMethod === 'completion') {

    }

    if (!hasErrors) {
      setPopupVisible(true);
    }
  };

  return (
    <>
      {popupVisible && <JobApplyPopup setPopupVisible={setPopupVisible} />}
      <main className="px-[20px] sm:px-[40px] lg:max-w-[1280px] 2xl:max-w-[1467px] mx-auto lg:mt-[37px] 2xl:mt-[89px] sm:mt-[36px] mt-[42px]">
        <h1 className="text-[40px] font-medium mb-[34px]">Apply for job</h1>
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
                  <div className="max-w-[982px] mr-[32px]">
                    <JobDescription
                      list={jobData.descriptionList}
                      text={jobData.descriptionText}
                    />
                  </div>
                  <hr className="bg-[#AEB3BC] w-[100%] h-[1px] sm:w-[1px] sm:h-[406px] mt-[18px] sm:mt-[12px] 2xl:mt-[19px]" />
                  <AboutProject
                    customStyles="flex flex-col mt-[30px] sm:mt-[44px] sm:ml-[57px] gap-[16px] sm:gap-[43px] lg:gap-[35px]"
                    jobData={jobData}
                  />
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
                  <Terms
                    errors={errors}
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
                  <AdditionalInformation error={errors.additionalInfo} onChangeApplyData={changeApplyData} />
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
