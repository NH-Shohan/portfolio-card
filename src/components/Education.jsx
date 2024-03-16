import { BiSolidCalendar } from "react-icons/bi";

const educations = [
  {
    dateFrom: "From 2020",
    dateTo: "",
    programm: "BSc in Computer Science and Engineering",
    instituteName: "American International University-Bangladesh",
    description:
      "Shohan is an undergraduate student of American International University-Bangladesh(AIUB) from CSE department.",
  },
  {
    dateFrom: "2017",
    dateTo: "2019",
    programm: "Higher Secondary Certificate (HSC)",
    instituteName: "Cambrian School and College",
    description:
      "Cambrian School and College, which is located in Gulshan,  is distinguished for its unwavering dedication to furnishing students with a formidable educational bedrock.",
  },
  {
    dateFrom: "",
    dateTo: "2017",
    programm: "Secondary School Certificate (SSC)",
    instituteName: "Narinda Govt. High School",
    description:
      "It is a well-known educational institution that is located in Narinda, it is known for providing a  strong foundation in education.",
  },
];

const Education = () => {
  return (
    <div>
      <p className="text-primary font-medium text-xl mb-3">Education</p>

      {educations.map((education, index) => (
        <div key={index} className="flex gap-2">
          <div className="flex flex-col items-center">
            <div
              className={`${
                index === educations.length - 1 ? "h-[22px]" : "h-5"
              } w-5 border-2 border-primary rounded-full`}
            ></div>
            <div
              className={`${
                index !== educations.length - 1 ? "h-[160px]" : "h-full"
              } w-[2px] bg-primary-light rounded-full`}
            ></div>
          </div>
          <div className="text-sm w-full">
            <p className="flex gap-1 items-center">
              <BiSolidCalendar />
              {education.dateFrom === ""
                ? ""
                : index === 0
                ? education.dateFrom
                : education.dateFrom + " - "}
              {education.dateTo !== "" ? (
                <>
                  {education.dateTo} <span className="text-xs">(Passed)</span>
                </>
              ) : (
                <span className="text-xs">(ongoing)</span>
              )}
            </p>
            <p className="text-white text-base">{education.programm}</p>
            <p>{education.instituteName}</p>
            <p className="mt-2">{education.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
