interface JobSkillsProps {
  skills: string[];
}

export const JobSkills: React.FC<JobSkillsProps> = ({skills}) => {
  return (
    <div>
      <div>
        <span className="text-[30px] font-medium">Skills</span>
      </div>
      <div className="flex gap-[23px] mt-[18px]">
        {skills.map((skill, i) => {
            return (
                <div className="p-[10px] text-[#545454] border-[1px] border-[#545454] rounded-[77px] font-medium" key={i}>{skill}</div>
            )
        })}
      </div>
    </div>
  );
};
