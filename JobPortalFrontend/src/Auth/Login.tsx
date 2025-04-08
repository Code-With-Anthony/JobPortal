import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" fw={500} mb="lg" className="text-center">
        Welcome back to JobFlick
      </Text>

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
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
        </Stack>

        <Group justify="space-between" mt="lg" mb="xs">
          <Checkbox
            label="Remember me"
            checked={form.values.rememberMe}
            onChange={(event) =>
              form.setFieldValue("rememberMe", event.currentTarget.checked)
            }
          />
          <Anchor
            component="button"
            size="sm"
            onClick={handleForgotPasswordClick}
          >
            Forgot password?
          </Anchor>
        </Group>

        <Button type="submit" radius="md" fullWidth my="lg">
          Login
        </Button>

        <Group justify="center" mt="md">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            size="xs"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register
          </Anchor>
        </Group>
      </form>
    </Paper>
  );
};

export default Login;
