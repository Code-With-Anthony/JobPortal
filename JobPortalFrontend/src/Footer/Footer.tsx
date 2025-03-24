import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBriefcaseFilled,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/auth" && (
      <div className="pt-20 bg-mine-shaft-950 font-['poppins'] pb-5 flex gap-5 justify-around">
        <div className="w-1/4 flex flex-col gap-4">
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconBriefcaseFilled className="h-6 w-6" stroke={1.25} />
            <div className="text-xl items-center font-semibold">JobFlick</div>
          </div>
          <div className="text-sm text-mine-shaft-300 mt-5">
            Job portal with user profiles, skill updates, certifications, work
            experience and admin job postings.
          </div>
          <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:hover:cursor-pointer [&>div]:hover:bg-mine-shaft-700">
            <div>
              <IconBrandFacebook />
            </div>
            <div>
              <IconBrandInstagram />
            </div>
            <div>
              <IconBrandX />
            </div>
          </div>
        </div>
        {footerLinks.map((item, index) => (
          <div key={index}>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">
              {item.title}
            </div>
            {item.links.map((link, index) => (
              <div
                key={index}
                className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 trnasition duration-300 ease-in-out"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );
};

export default Footer;
