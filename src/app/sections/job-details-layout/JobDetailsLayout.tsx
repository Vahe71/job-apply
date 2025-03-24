"use client";
import { JobDescription } from "@/app/sections/job-description/JobDescription";
import { JobHeader } from "../job-header/JobHeader";
import { useEffect, useState } from "react";
import { AboutClient } from "../about-client/AboutClient";
import { InfoSectionGreen } from "@/components/InfoSectionGreen";
import { CalendarIcon } from "../../../../public/icons/CalendarIcon";
import { PersonBrainIcon } from "../../../../public/icons/PersonBrainIcon";
import { MoneyIcon } from "../../../../public/icons/MoneyIcon";
import { ClientHistory } from "../client-history/ClientHistory";
import { JobSkills } from "../job-skills/JobSkills";
import { AboutProject } from "../about-project/AboutProject";

interface ClientHistoryItem {
  title: string;
  jobRating: number;
  startDate: string;
  endDate: string;
  description: string;
  earning: string;
  toTalentName: string;
}

interface JobDetailsProps {
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
    projectScope: string;
    projectExperienceLevel: string;
    projectBudget: number;
    clientHistory: ClientHistoryItem[];
    jobSkills: string[];
    hires: number;
    active: number;
  };
}

export const JobDetailsLayout: React.FC<JobDetailsProps> = ({ jobData }) => {
  return (
    <main className="2xl:max-w-[1547px] lg:max-w-[1280px] sm:px-[40px] px-[20px] sm:max-w-[860px] mx-auto">
      <JobHeader
        postedDate={jobData.postedDate}
        country={jobData.country}
        title={jobData.title}
        buttonVisible={true}
      />
      <div className="flex justify-between flex-col lg:flex-row 2xl:mt-[30px] lg:mt-[20px] mt-[10px] gap-[10px] lg:gap-[20px] 2xl:gap-[29px]">
        <div className="2xl:max-w-[1040px] lg:max-w-[774px] w-full">
          <div className="">
            <InfoSectionGreen title="Details" lineWidth="w-[77px]">
              <JobDescription
                list={jobData.descriptionList}
                text={jobData.descriptionText}
              />
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen title="About" lineWidth="w-[77px]">
              <AboutProject
                customStyles="flex mt-[16px] justify-between flex-wrap gap-[16px] flex-col sm:flex-row"
                jobData={jobData}
              />
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen title="Skills" lineWidth="w-[77px]">
              <div className="mt-[16px]">
                <JobSkills skills={jobData.jobSkills} />
              </div>
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen title="Client’s History" lineWidth="w-[119px]">
              <div className="mt-[11px]">
                <ClientHistory history={jobData.clientHistory} />
              </div>
            </InfoSectionGreen>
          </div>
        </div>
        <div className="w-full lg:max-w-[406px]">
          <AboutClient jobData={jobData} />
        </div>
      </div>
    </main>
  );
};
