import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import { GoogleButton } from "./GoogleButton";
import { ForgotPassword } from "./ForgotPassword";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";
import { useState } from "react";
import { InputPassword } from "./InputPassword";
// import { TwitterButton } from "./TwitterButton";

const Auth = (props: PaperProps) => {
  const [type, toggle] = useToggle(["login", "register", "forgotPassword"]);
  const [selectedUserType, setSelectedUserType] = useState<
    "applicant" | "company" | null
  >(null);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      {type !== "forgotPassword" && (
        <>
          <Text size="lg" fw={500}>
            Welcome to JobFlick {type} with
          </Text>
          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />
        </>
      )}

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          {type === "forgotPassword" ? (
            <ForgotPassword toggle={toggle} />
          ) : (
            <>
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

              {type === "register" ? (
                <InputPassword />
              ) : (
                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={
                    form.errors.password &&
                    "Password should include at least 6 characters"
                  }
                  radius="md"
                />
              )}
            </>
          )}

          {type === "register" && (
            <>
              <div className="flex flex-col justify-between mt-2">
                <div className="text-sm font-semibold">
                  Your Are <span className="text-red-500">*</span>
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
                    onClick={() => setSelectedUserType("applicant")}
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
                    } !h-12 `}
                    onClick={() => setSelectedUserType("company")}
                  >
                    Company
                  </Button>
                </div>
              </div>
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            </>
          )}

          {type === "login" && (
            <Group justify="space-between" mt="xs" mb="xs">
              <Checkbox
                label="Remember me"
                className="[&_label]:!cursor-pointer select-none"
              />
              <Anchor
                component="button"
                size="sm"
                onClick={() => toggle("forgotPassword")}
              >
                Forgot password?
              </Anchor>
            </Group>
          )}
        </Stack>

        {type !== "forgotPassword" && (
          <Button type="submit" radius="md" fullWidth my="lg">
            {upperFirst(type)}
          </Button>
        )}

        {type !== "forgotPassword" && (
          <Group justify="center" mt="md">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle(type === "register" ? "login" : "register")}
              size="xs"
              className="hover:!text-bright-sun-400"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
          </Group>
        )}
      </form>
    </Paper>
  );
};

export default Auth;
