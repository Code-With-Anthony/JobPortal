import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "./GoogleButton";
import { InputPassword } from "./InputPassword";

const Signup = () => {
  const [selectedUserType, setSelectedUserType] = useState<
    "applicant" | "company" | null
  >(null);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: true,
    },
    validate: {
      name: (val) =>
        val.length < 3 ? "Name should include at least 3 characters" : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const navigate = useNavigate();

  const handleUserTypeClick = (userType: "applicant" | "company") => {
    setSelectedUserType(userType);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" fw={500} className="text-center">
        Welcome to JobFlick
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            error={form.errors.name && "Invalid Name"}
            radius="md"
            withAsterisk
          />
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />
          <InputPassword />

          <div className="flex flex-col justify-between mt-2 mb-6">
            <div className="text-sm font-semibold">
              Your are <span className="text-red-500">*</span>
            </div>
            <div className="flex justify-between mt-2 gap-3">
              <Button
                leftSection={
                  selectedUserType === "applicant" ? (
                    <IconCircleFilled
                      size={14}
                      className="text-bright-sun-400"
                    />
                  ) : (
                    <IconCircle size={14} />
                  )
                }
                variant="outline"
                radius="md"
                className={`border-2 ${
                  selectedUserType === "applicant"
                    ? "!border-bright-sun-400"
                    : "!border-mine-shaft-700"
                } !h-12`}
                onClick={() => handleUserTypeClick("applicant")}
              >
                Applicant
              </Button>
              <Button
                leftSection={
                  selectedUserType === "company" ? (
                    <IconCircleFilled
                      size={14}
                      className="text-bright-sun-400"
                    />
                  ) : (
                    <IconCircle size={14} />
                  )
                }
                variant="outline"
                radius="md"
                className={`border-2 ${
                  selectedUserType === "company"
                    ? "!border-bright-sun-400"
                    : "!border-mine-shaft-700"
                } !h-12`}
                onClick={() => handleUserTypeClick("company")}
              >
                Company
              </Button>
            </div>
          </div>
        </Stack>

        <Checkbox
          label="I accept terms and conditions"
          checked={form.values.terms}
          onChange={(event) =>
            form.setFieldValue("terms", event.currentTarget.checked)
          }
          className="hover:!text-bright-sun-400 hover:!cursor-pointer"
        />

        <Button type="submit" radius="md" fullWidth my="lg">
          Register
        </Button>

        <Group justify="center" mt="md">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={handleLoginClick}
            size="xs"
          >
            Already have an account? Login
          </Anchor>
        </Group>
      </form>
    </Paper>
  );
};

export default Signup;
