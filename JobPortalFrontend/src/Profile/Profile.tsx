import { ActionIcon, Divider } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import { useState } from "react";
import SelectInput from "./SelectInout";
import select from "../Data/Profile";

interface ProfileProps {
  name: string;
  role: string;
  company: string;
  location: string;
  about: string;
  skills: string[];
  experience: ExperienceType[];
  certifications: Certificationcard[];
}

interface ExperienceType {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Certificationcard {
  name: string;
  issuer: string;
  issueDate: string;
  certificateId: string;
}

const Profile = (props: ProfileProps) => {
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="/avatar.png"
          alt="banner"
          className="rounded-full h-48 w-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <ActionIcon
            size="lg"
            variant="subtle"
            aria-label="Settings"
            color="bright-sun.4"
            onClick={() => handleEdit(0)}
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>

        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:!w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" />
              {props.role} &bull; {props.company}
            </div>
            <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
              <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
            </div>
          </>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            size="lg"
            variant="subtle"
            aria-label="Settings"
            color="bright-sun.4"
            onClick={() => handleEdit(1)}
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            size="lg"
            variant="subtle"
            aria-label="Settings"
            color="bright-sun.4"
            onClick={() => handleEdit(2)}
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-bright-sun-300/15 text-sm font-medium rounded-xl text-bright-sun-400 px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp) => (
            <ExperienceCard {...exp} key={exp.company + exp.startDate} />
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5"> Certifications</div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((certi) => (
            <CertificationCard {...certi} key={certi.certificateId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
