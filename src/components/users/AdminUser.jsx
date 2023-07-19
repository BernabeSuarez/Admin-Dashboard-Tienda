import { useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
  Heading,
} from "@chakra-ui/react";

const userUrl = "https://backend-tienda-nucba.onrender.com/signup";

export default function AdminUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(userUrl, {
        name,
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Flex w="full" h="full" alignItems="center" justifyContent="space-evenly">
      <Box
        minW={{ base: "90%", md: "468px" }}
        border="2px"
        borderColor="pallete.cyan.300"
        borderRadius={8}
        color="black"
      >
        <form
          onSubmit={(e) => {
            addUser(e);
          }}
        >
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="2xl"
            borderRadius={8}
          >
            <Heading as="h2" size="md">
              Agregar usuarios
            </Heading>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                size="sm"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Emil</FormLabel>
              <Input
                type="text"
                size="sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              bg="pallete.black"
              color="pallete.white"
              width="full"
              _hover={{ bg: "pallete.cyan.300", color: "pallete.black" }}
            >
              Cargar
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
