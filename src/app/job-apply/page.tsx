"use client";
import { JobDescription } from "@/app/sections/job-description/JobDescription";
import { JobHeader } from "../sections/job-header/JobHeader";
import { InfoSectionGreen } from "@/components/InfoSectionGreen";
import { JobSkills } from "../sections/job-skills/JobSkills";
import { jobData } from "../page";
import { Milestones } from "../sections/milestones/Milestones";
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
    
  });

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

  return (
    <>
      {popupVisible && <JobApplyPopup setPopupVisible={setPopupVisible} />}
      <main className="lg:max-w-[1200px] 2xl:max-w-[1467px] mx-auto mt-[89px]">
        <h1 className="text-[40px] font-medium mb-[34px]">Apply for job</h1>
        <JobHeader
          postedDate={jobData.postedDate}
          country={jobData.country}
          title={jobData.title}
          buttonVisible={false}
        />
        <div className="flex  mt-[30px] gap-[34px]">
          <div className="w-full">
            <div className="">
              <InfoSectionGreen title="Details" lineWidth="77px">
                <div className="flex">
                  <div className="max-w-[982px] mr-[32px]">
                    <JobDescription
                      list={jobData.descriptionList}
                      text={jobData.descriptionText}
                    />
                  </div>
                  <hr className="bg-[#AEB3BC] w-[1px] h-[406px] mt-[29px]" />
                  <AboutProject
                    customStyles="flex flex-col mt-[44px] ml-[57px] gap-[35px]"
                    jobData={jobData}
                  />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="mt-[35px]">
              <InfoSectionGreen title="Skills" lineWidth="77px">
                <div className="mt-[16px]">
                  <JobSkills skills={jobData.jobSkills} />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="mt-[30px]">
              <InfoSectionGreen title="Terms" lineWidth="111px">
                <div className="mt-[16px]">
                  <Milestones
                    onChangeApplyData={changeApplyData}
                    jobApplyData={jobApplyData}
                  />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="mt-[43px]">
              <InfoSectionGreen
                title="Additional Information"
                lineWidth="201px"
              >
                <div className="mt-[16px]">
                  <AdditionalInformation onChangeApplyData={changeApplyData} />
                </div>
              </InfoSectionGreen>
            </div>
            <div className="mt-[53px] flex justify-end gap-[13px]">
              <Link href={"/"}>
                <button className="text-[#18470D] text-[16px] w-[200px] h-[48px] rounded-[49px] border-[#CCCCCC] border-[1px] font-medium cursor-pointer">
                  Cancel
                </button>
              </Link>
              <button
                onClick={() => setPopupVisible(true)}
                className="p-[12px_35px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] font-medium cursor-pointer"
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
