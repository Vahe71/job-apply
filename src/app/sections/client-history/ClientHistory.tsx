"use client"
import React, { useEffect } from "react";
import { GreenFolderIcon } from "../../../../public/icons/GreenFolderIcon";
import { FullStarIcon } from "../../../../public/icons/FullStarIcon";
import { EmptyStarIcon } from "../../../../public/icons/EmptyStarIcon";
import { HalfStarIcon } from "../../../../public/icons/HalfStarIcon";

interface ClientStoryItem {
  title: string;
  jobRating: number;
  startDate: string;
  endDate: string;
  description: string;
  earning: string;
  toTalentName: string;
}

interface ClientHistoryProps {
  history: ClientStoryItem[];
}

export const ClientHistory: React.FC<ClientHistoryProps> = ({ history }) => {
  return (
    <div>
      <div>
        <span className="text-[30px] font-medium">Client’s Recent History</span>
      </div>
      <div className="2xl:mt-[24px] lg:mt-[42px]  mt-[46px] flex flex-col sm:gap-[16px] lg:gap-[26px] 2xl:gap-[26px] gap-[8px]">
        {history.map((job, i) => {
          return (
            <div key={i}>
              <div className="flex justify-between items-center">
                <span
                  className={`text-[#18470D] text-[14px] max-w-[181px] sm:max-w-none sm:text-[20px] font-medium `}
                >
                  {job.title}
                </span>
                <div className="w-[24px] h-[24px] cursor-pointer">
                  <GreenFolderIcon />
                </div>
              </div>
              <div className="flex text-[14px] sm:text-[16px] mt-[21px] text-[#545454] gap-[2px] items-center">
                <div className="flex gap-[1px]">
                  {Array.from({ length: job.jobRating }).map((_, index) => (
                    <div key={index}>
                      <FullStarIcon />
                    </div>
                  ))}
                  {!Number.isInteger(job.jobRating) && <HalfStarIcon />}
                  {Array.from({ length: 5 - job.jobRating }).map(
                    (_, index) => (
                      <div key={index}>
                        <EmptyStarIcon />
                      </div>
                    )
                  )}
                </div>
                <div
                  className={`ml-[10px] text-[14px] sm:text-[16px] text-[#545454] `}
                >
                  {job.jobRating} | {job.startDate} - {job.endDate}
                </div>
              </div>
              <p
                className={`text-[#545454] text-[14px] sm:text-[16px] mt-[17px] `}
              >
                {job.description}
              </p>
              <div className="flex gap-[11px] mt-[12px]">
                <span>To Talent:</span>
                <span className="text-[#18470D] text-[16px] underline decoration-[#18470D]">
                  {job.toTalentName}
                </span>
              </div>
              <p className={`text-[16px]  mt-[10px] lg:mt-[14px]`}>
                <span>{job.earning}</span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-[43px]">
        <button className="text-[#18470D] text-[16px] w-[200px] h-[48px] rounded-[49px] border-[#CCCCCC] border-[1px] font-medium cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};
