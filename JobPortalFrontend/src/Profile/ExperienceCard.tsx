import { Button } from "@mantine/core";
import { useState } from "react";
import ExperienceInput from "./ExperienceInput";

interface ExperienceType {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  edit: boolean;
}
const ExperienceCard = (props: ExperienceType) => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`/Icons/${props.company}.png`}
              alt="Google"
              className="h-7"
            />
          </div>
          <div className="flex flex-col">
            <div>{props.title}</div>
            <div className="text-sm text-mine-shaft-300 font-semibold">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
      {props.edit && (
        <div className="flex gap-5">
          <Button
            color="#ffbd20"
            variant="outline"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button color="red.8" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExperienceInput description={props.description} setEdit={setEdit} />
  );
};

export default ExperienceCard;
