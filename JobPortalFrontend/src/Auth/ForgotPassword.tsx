import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export function ForgotPassword() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <Container size={460}>
      <Title className="title !text-lg" ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="md" ta="center">
        Enter your email to reset password
      </Text>

      <TextInput
        label="Your email"
        placeholder="me@mantine.dev"
        required
        mt="lg"
      />
      <Group justify="space-between" mt="xl" className="controls">
        <Anchor
          c="dimmed"
          size="sm"
          className="control hover:!text-bright-sun-400"
          onClick={handleLoginClick}
        >
          <Center inline>
            <IconArrowLeft size={12} stroke={1.5} />
            <Box ml={5}>Back To Login</Box>
          </Center>
        </Anchor>
        <Button className="control" variant="light" color="bright-sun.4">
          Send OTP
        </Button>
      </Group>
    </Container>
  );
}
