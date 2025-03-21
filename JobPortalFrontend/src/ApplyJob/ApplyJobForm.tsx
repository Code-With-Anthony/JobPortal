import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropZone from "../Utils/DropZone";

const ApplyJobForm = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setSeconds(x);
      if (x === 0) navigate("/find-jobs");
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "bright-sun.4", type: "bars" }}
          className="!fixed "
        />
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
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              label="Full Name"
              placeholder="Enter Full Name"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
            />
            <TextInput
              label="Email"
              placeholder="Enter Your Email ID"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              label="Phone Number"
              placeholder="Enter Contact Number"
              withAsterisk
              hideControls
              clampBehavior="strict"
              min={0}
              max={9999999999}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
            />
            <TextInput
              label="Portfolio"
              placeholder="Enter Your Portfolio URL"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
            />
          </div>
          <FileInput
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
          <div className="flex flex-col gap-1 text-mine-shaft-300 font-semibold text-sm">
            <div>Other Documents</div>
            <DropZone />
          </div>
          <Textarea
            placeholder="Enter Something About Yourself..."
            label="Cover Letter"
            autosize
            minRows={4}
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
          {!preview && (
            <Button
              color="bright-sun.4"
              variant="light"
              onClick={handlePreview}
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                color="bright-sun.4"
                variant="outline"
                onClick={handlePreview}
                fullWidth
              >
                Edit
              </Button>
              <Button
                color="bright-sun.4"
                variant="light"
                onClick={handleSubmit}
                fullWidth
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        icon={<IconCheck size={20} />}
        color="teal"
        title="Application Submited"
        mt="md"
        withCloseButton={false}
        withBorder
        className={`!border-bright-sun-400 transition duration-300 ease-in-out z-[1001] !fixed top-0 left-[35%] ${
          submit ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        Redirecting to Find Jobs in {seconds} seconds
      </Notification>
    </>
  );
};

export default ApplyJobForm;
