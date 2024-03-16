import { PiSealCheckDuotone } from "react-icons/pi";

const softskills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Patience",
];

const SoftSkill = () => {
  return (
    <div>
      <p className="text-primary font-medium text-xl mb-3">Soft Skills</p>

      <div className="text-white">
        {softskills.map((skills, index) => (
          <p key={index} className="flex gap-1 items-center">
            <PiSealCheckDuotone className="text-primary w-5 h-5" />
            {skills}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SoftSkill;
