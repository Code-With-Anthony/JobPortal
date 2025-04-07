import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

interface Certificationcard {
  name: string;
  issuer: string;
  issueDate: string;
  certificateId: string;
  edit: boolean;
}

const CertificationCard = (props: Certificationcard) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            src={`/Icons/${props.issuer}.png`}
            alt="Google"
            className="h-7"
          />
        </div>
        <div className="flex flex-col">
          <div>{props.name}</div>
          <div className="text-sm text-mine-shaft-300 font-semibold">
            {props.issuer}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">{props.issueDate}</div>
          <div className="text-sm text-mine-shaft-300">
            ID: {props.certificateId}
          </div>
        </div>
        {props.edit && (
          <ActionIcon
            size="lg"
            variant="subtle"
            aria-label="Settings"
            color="red.8"
          >
            <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
