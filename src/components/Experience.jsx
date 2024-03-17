import { BiSolidCalendar } from "react-icons/bi";

const experiences = [
  {
    dateFrom: "Sep 2023",
    dateTo: "",
    position: "Software Developer",
    companyName: "Icebreakers",
    companyLocation: "Bangladesh",
    description:
      "As a pioneering digital transformation partner, they are specialize in reshaping businesses through innovative technologies, fostering agility, and maximizing efficiency",
  },
  {
    dateFrom: "Mar 2023",
    dateTo: "Jul 2023",
    position: "Web Developer",
    companyName: "Texium Solutions",
    companyLocation: "Chicago, Illinois, United States",
    description:
      "A prominent global provider of Research and Development (R&D) solutions tailored for the life sciences sector.",
  },
  {
    dateFrom: "Sep 2022",
    dateTo: "Dec 2022",
    position: "Web developer",
    companyName: "Remote Job",
    companyLocation: "Hong Kong",
    description:
      "I am in the enviable position of having a remote job, which means that the boundaries of a traditional office are no longer a constraint for me.",
  },
  {
    dateFrom: "May 2021",
    dateTo: "Jan 2023",
    position: "Web developer",
    companyName: "RS Coalition",
    companyLocation: "Bangladesh",
    description:
      "RS Coalition is an IT farm that specializes in providing cutting-edge technology solutions for businesses of all sizes.",
  },
];

const Experience = () => {
  return (
    <div>
      <p className="text-primary font-medium text-xl mb-3">Experience</p>

      {experiences.map((experience, index) => (
        <div key={index} className="flex gap-2">
          <div className="flex flex-col items-center">
            <div
              className={`${
                index === experiences.length - 1 ? "h-[22px]" : "h-5"
              } w-5 border-2 border-primary rounded-full`}
            ></div>
            <div
              className={`${
                index !== experiences.length - 1 ? "h-[160px]" : "h-full"
              } w-[2px] bg-primary-light rounded-full`}
            ></div>
          </div>
          <div className="text-sm w-full">
            <p className="flex gap-1 items-center">
              <BiSolidCalendar />
              {experience.dateFrom}

              {experience.dateTo !== "" ? (
                " - " + experience.dateTo
              ) : (
                <span className="text-xs">(working)</span>
              )}
            </p>
            <p className="text-white text-base">{experience.position}</p>
            <p>
              {experience.companyName} - {experience.companyLocation}
            </p>
            <p className="mt-2">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
