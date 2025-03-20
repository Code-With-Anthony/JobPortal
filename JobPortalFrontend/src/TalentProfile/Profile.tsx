import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";

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
  return (
    <div className="w-2/3">
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
          <Button color="#ffbd20" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" />
          {props.role} &bull; {props.company}
        </div>
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
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
