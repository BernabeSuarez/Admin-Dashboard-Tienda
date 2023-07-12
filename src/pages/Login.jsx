import { useState } from "react";
import {
  Flex,
  Box,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const toast = useToast();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
    toast({
      title: "Bienvenido!",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <Flex
      w="full"
      h="100vh"
      bg="pallete.gray.300"
      alignItems="center"
      justifyContent="center"
    >
      <Box minW={{ base: "90%", md: "468px" }}>
        <form
          onSubmit={(e) => {
            login(e);
          }}
        >
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="2xl"
            borderRadius={8}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                size="sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                size="sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              bg="black"
              color="white"
              width="full"
              _hover={{ bg: "gray.600" }}
            >
              Entrar
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
