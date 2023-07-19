import { Flex, Text, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      p={2}
      bg="darkgrey"
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Pagina de administracion de productos y usuarios</Heading>
      <Text>Tienda online</Text>
    </Flex>
  );
}
