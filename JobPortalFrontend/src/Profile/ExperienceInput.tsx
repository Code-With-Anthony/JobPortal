import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInout";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExperienceInput = (props: any) => {
  const select = fields;
  const [description, setDescription] = useState(props.description);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 [&>*]:!w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        value={description}
        onChange={(event) => setDescription(event.currentTarget.value)}
        autosize
        minRows={3}
        label="Summary"
        autoFocus
        placeholder="Enter summary..."
        withAsterisk
      />
      <div className="flex gap-10 [&>*]:!w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
          maxDate={endDate || undefined}
          withAsterisk
        />
        <MonthPickerInput
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
          minDate={startDate || undefined}
          maxDate={new Date()}
          withAsterisk
          disabled={checked}
        />
      </div>
      <Checkbox
        autoContrast
        label="Currently Working Here"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <div className="flex gap-5">
        <Button
          color="#ffbd20"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Save
        </Button>
        <Button
          color="red.8"
          variant="light"
          onClick={() => props.setEdit(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExperienceInput;
