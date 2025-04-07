import { Avatar, Divider, Tabs } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandX,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="/Icons/Google.png"
          alt="Company"
          className="rounded-3xl bg-mine-shaft-950 h-36 w-36 -bottom-1/4 absolute left-5 p-2 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar2.png" />
            <Avatar src="avatar3.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> New York, United
          States
        </div>
        <div className="flex gap-4 text-lg items-center text-mine-shaft-300 mt-2">
          <IconBrandMeta
            stroke={1.5}
            className="h-7 w-7 hover:text-blue-400 hover:cursor-pointer transition-all duration-300 ease-in-out"
          />
          <IconBrandInstagram
            stroke={1.5}
            className="h-7 w-7 hover:text-pink-500 hover:cursor-pointer transition-all duration-300 ease-in-out"
          />
          <IconBrandX
            stroke={1.5}
            className="h-7 w-7 hover:text-gray-500 hover:cursor-pointer transition-all duration-300 ease-in-out"
          />
          <IconMail
            stroke={1.5}
            className="h-7 w-7 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div>
        <Tabs variant="outline" defaultValue="about" radius="md">
          <Tabs.List className="mb-5 [&_button]:!text-lg [&_button]:!font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutCompany />
          </Tabs.Panel>
          <Tabs.Panel value="jobs">
            <CompanyJobs />
          </Tabs.Panel>
          <Tabs.Panel value="employees">
            <CompanyEmployees />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
