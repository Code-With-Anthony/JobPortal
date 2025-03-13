import { Avatar, Indicator } from "@mantine/core";
import {
  IconBell,
  IconBriefcaseFilled,
  IconSettings,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 px-6 text-white flex justify-between items-center">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconBriefcaseFilled className="h-8 w-8" stroke={1.25} />
        <div className="text-3xl items-center font-semibold">JobFlick</div>
      </div>
      <div className="flex gap-5">
        <a href="">Find Jobs</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About Us</a>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <div>Anthony</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
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
  );
};

export default Header;
