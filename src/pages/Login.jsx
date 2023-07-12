import {
  Flex,
  Box,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      w="full"
      h="100vh"
      bg="darkgrey"
      alignItems="center"
      justifyContent="center"
    >
      <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={() => {}}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="2xl"
            borderRadius={8}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" size="sm" />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" size="sm" />
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
