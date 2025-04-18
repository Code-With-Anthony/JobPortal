import { Indicator } from "@mantine/core";
import {
  IconBell,
  IconBriefcaseFilled,
  IconSettings,
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();
  return (
    location.pathname !== "/auth" && (
      <div className="w-full bg-mine-shaft-950 font-['poppins'] h-20 px-6 text-white flex justify-between items-center">
        <Link to="/" className="flex gap-1 items-center text-bright-sun-400">
          <IconBriefcaseFilled className="h-8 w-8" stroke={1.25} />
          <div className="text-3xl items-center font-semibold">JobFlick</div>
        </Link>
        <NavLinks />
        <div className="flex gap-3 items-center">
          <ProfileMenu />
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5} />
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="bright-sun.4" size={8} processing offset={6}>
              <IconBell stroke={1.5} />
            </Indicator>
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
