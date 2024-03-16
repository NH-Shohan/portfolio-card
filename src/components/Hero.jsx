import Image from "next/image";
import Link from "next/link";
import { AiOutlineNumber } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { MdAutoGraph } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="bg-background p-4 rounded-3xl mt-5 space-y-7 relative">
        <div className="h-[150px] w-[150px] bg-[#69696980] rounded-full absolute top-36 blur-3xl -z-10"></div>

        <div className="flex items-start justify-between">
          <Image
            src={"/image.png"}
            alt="Avater Image"
            width={60}
            height={60}
            className="border border-primary rounded-xl"
          />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F04242] rounded-full"></div>
            <p className="text-white text-xs">Unavailable for a job</p>
          </div>
        </div>

        <p className="text-3xl">
          Hello my name is <br />
          <span className="text-white font-bold">Nahim Hossain Shohan</span>,
          and I am a
          <br />
          <span className="line-through">developer</span>*<br />
          <span className="text-primary font-bold">Software Developer</span>
        </p>

        <div>
          <p className="flex items-center gap-1">
            <AiOutlineNumber className="text-white" />
            Age 24
          </p>
          <p className="flex items-center gap-1">
            <MdAutoGraph className="text-white" />
            3+ Experience
          </p>
          <p className="flex items-center gap-1">
            <HiOutlineHome className="text-white" />
            Dhaka, Bangladesh
          </p>
        </div>

        <div>
          <p className="text-white">Who is Shohan?</p>
          <p className="text-sm">
            {
              "A professional web developer specializing in creating unique, responsive websites tailored to your needs. Let's work together to build a website that stands out from the crowd."
            }
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            target="_blank"
            href={"https://nh-shohan.web.app/"}
            className="bg-white text-black w-full py-2 rounded-xl text-center font-medium"
          >
            Website
          </Link>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1ikmwXotqVNbjqLcXPvynFDlV0i_0PgqA/view"
            }
            className="border border-white text-white w-full py-2 rounded-xl text-center"
          >
            My Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
