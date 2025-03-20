"use client";
import { JobDescription } from "@/app/sections/job-description/JobDescription";
import { JobHeader } from "../job-header/JobHeader";
import { useEffect } from "react";
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
    <main className="max-w-[1467px] mx-auto">
      <JobHeader
        postedDate={jobData.postedDate}
        country={jobData.country}
        title={jobData.title}
        buttonVisible={true}
      />
      <div className="flex  mt-[30px] gap-[34px]">
        <div className="max-w-[1040px]">
          <div className="">
            <InfoSectionGreen title="Details" lineWidth="77px">
              <JobDescription
                list={jobData.descriptionList}
                text={jobData.descriptionText}
              />
            </InfoSectionGreen>
          </div>
          <div className="mt-[35px]">
            <InfoSectionGreen title="About" lineWidth="77px">
              <AboutProject customStyles="flex mt-[16px] justify-between" jobData={jobData} />
            </InfoSectionGreen>
          </div>
          <div className="mt-[35px]">
            <InfoSectionGreen title="Skills" lineWidth="77px">
              <div className="mt-[16px]">
                <JobSkills skills={jobData.jobSkills} />
              </div>
            </InfoSectionGreen>
          </div>
          <div className="mt-[35px]">
            <InfoSectionGreen title="Client’s History" lineWidth="119px">
              <div className="mt-[16px]">
                <ClientHistory history={jobData.clientHistory} />
              </div>
            </InfoSectionGreen>
          </div>
        </div>
        <div className="w-full max-w-[398px]">
          <AboutClient jobData={jobData} />
        </div>
      </div>
    </main>
  );
};
