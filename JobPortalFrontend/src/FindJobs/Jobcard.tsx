import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

// Define the type for the props
interface JobCardProps {
  jobTitle: string;
  company: string;
  applicants: number;
  experience: string;
  jobType: string;
  location: string;
  package: string;
  postedDaysAgo: number;
  description: string;
}

const Jobcard = (props: JobCardProps) => {
  return (
    <Link
      to="/jobs"
      className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_2px_yellow] !shadow-bright-sun-400"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`/Icons/${props.company}.png`}
              alt="Microsoft"
              className="h-7"
            />
          </div>
          <div>
            <div>{props.jobTitle}</div>
            <div className="text-sm text-mine-shaft-300 font-semibold">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 hover:cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        lineClamp={3}
        className="!text-mine-shaft-300 !text-xs !text-justify"
      >
        {props.description}
      </Text>
      <Divider size="xs" className="text-mine-shaft-700" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377; {props.package}
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          {" "}
          <IconClockHour3 stroke={1.5} className="h-5 w-5" />{" "}
          {props.postedDaysAgo} Days Ago
        </div>
      </div>
    </Link>
  );
};

export default Jobcard;
