import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
// import { DateInput, TimeInput } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";
import { DateInput } from "@mantine/dates";
import { useRef, useState } from "react";

// Define the type for the props
interface TalentCardProps {
  name: string;
  role: string;
  company: string;
  topSkills: string[];
  about: string;
  expectedCtc: string;
  location: string;
  image: string;
  posted: boolean;
  invited: boolean;
}

const TalentCard = (props: TalentCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_2px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar src={`/${props.image}.png`} alt="Company" size={"lg"} />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300 font-semibold">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 hover:cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        {props.topSkills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <Text
        lineClamp={3}
        className="!text-mine-shaft-300 !text-xs !text-justify"
      >
        {props.about}
      </Text>
      <Divider size="xs" className="text-mine-shaft-700" />
      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview: August 27, 2024 10:00 Am
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
          </div>
          <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
            <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
          </div>
        </div>
      )}
      <Divider size="xs" className="text-mine-shaft-700" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <Button color="#ffbd20" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div>
              {props.posted ? (
                <Button
                  rightSection={<IconCalendarMonth className="w-5 h-5" />}
                  color="#ffbd20"
                  variant="light"
                  fullWidth
                  onClick={open}
                >
                  Schedule
                </Button>
              ) : (
                <Button color="#ffbd20" variant="light" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
        {props.invited && (
          <>
            <div>
              <Button color="bright-sun.4" variant="outline" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              <Button color="bright-sun.4" variant="light" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
            minDate={new Date()}
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button color="bright-sun.4" variant="light" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
