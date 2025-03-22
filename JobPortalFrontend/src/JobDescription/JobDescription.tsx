import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import { JobDescriptionType } from "../Interface/Jobs/JobDescription";
import DomPurify from "dompurify";
//"@ts-expect-error";
const JobDescription = () => {
  const data = DomPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img src={`/Icons/Google.png`} alt="Company" className="h-14" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-semibold">Software Engineer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="bright-sun.4" variant="light" size="sm">
              Apply
            </Button>
          </Link>
          <IconBookmark
            className="text-bright-sun-400 hover:cursor-pointer"
            stroke={1.5}
          />
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: JobDescriptionType, index: number) => (
          <div className="flex flex-col items-center gap-1" key={index}>
            <ActionIcon
              variant="light"
              radius="xl"
              aria-label="Settings"
              className="!h-12 !w-12"
              color="bright-sun.4"
            >
              <item.icon stroke={1.5} className="h-4/5 w-4/5" />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((data: string, index) => (
            <ActionIcon
              variant="light"
              radius="xl"
              aria-label="Settings"
              className="!h-fir !w-fit font-medium !text-sm"
              color="bright-sun.4"
              p="xs"
              key={index}
            >
              {data}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        dangerouslySetInnerHTML={{ __html: data }}
        className="[&_h1,h2,h3,h4]:text-xl [&_*]:text-minw-shaft-300 [&_h1,h2,h3,h4]:my-5 [&_h1,h2,h3,h4]:font-semibold [&_h1,h2,h3,h4]:text-mine-shaft-200 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-1"
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img src={`/Icons/Google.png`} alt="Company" className="h-8" />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-medium">Google</div>
              <div className="text-base text-mine-shaft-300">
                10k+ Employees
              </div>
            </div>
          </div>
          <Link to="/company">
            <Button color="bright-sun.4" variant="light">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          quasi, optio doloremque ea soluta veritatis architecto facere
          repellendus modi repellat atque libero hic nobis, accusamus incidunt
          provident est, earum quidem animi nihil. Reprehenderit omnis sunt
          culpa doloribus sint facilis cum?
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
