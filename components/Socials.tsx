import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
  iconStyle: string;
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

export const Socials = ({ containerStyles, iconStyle }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
