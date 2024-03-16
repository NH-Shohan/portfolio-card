import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around h-[90px] bg-background backdrop-blur-[10px] rounded-tr-[36px] rounded-tl-[36px] px-1 sticky bottom-0 w-full">
      <Link
        target="_blank"
        href={"https://github.com/nh-shohan"}
        className="w-[50px] h-[50px] bg-[#094E37] rounded-full grid place-items-center"
      >
        <FaGithub className="text-primary w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"https://www.facebook.com/nahim.hossain.shohan.3/"}
        className="w-[50px] h-[50px] bg-[#094E37] rounded-full grid place-items-center"
      >
        <BsFacebook className="text-primary w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/nahim-hossain-shohan/"}
        className="w-[50px] h-[50px] bg-[#094E37] rounded-full grid place-items-center"
      >
        <FaLinkedinIn className="text-primary w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"mailto:nh.shohan6@gmail.com"}
        className="w-[50px] h-[50px] bg-[#094E37] rounded-full grid place-items-center"
      >
        <BiLogoGmail className="text-primary w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"tel:+8801738485570"}
        className="w-[50px] h-[50px] bg-[#094E37] rounded-full grid place-items-center"
      >
        <BsFillTelephoneFill className="text-primary w-5 h-5" />
      </Link>
    </footer>
  );
};

export default Footer;
