import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`/Icons/${props.name}.png`}
              alt="Company"
              className="h-7"
            />
          </div>
          <div>
            <div>{props.name}</div>
            <div className="text-sm text-mine-shaft-300 font-semibold">
              {props.employees} Employees Applicants
            </div>
          </div>
        </div>
        <ActionIcon color="bright-sun.4" variant="subtle">
          <IconExternalLink />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CompanyCard;
