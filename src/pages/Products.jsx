import {
  Flex,
  Box,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";

export default function Products() {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={() => {}}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="2xl"
            borderRadius={8}
          >
            <Text>Cargar Productos</Text>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" size="sm" />
            </FormControl>
            <FormControl>
              <FormLabel>Imagen</FormLabel>
              <Input type="text" size="sm" />
            </FormControl>
            <FormControl>
              <FormLabel>Seccion</FormLabel>
              <Input type="text" size="sm" />
            </FormControl>
            <FormControl>
              <FormLabel>Precio</FormLabel>
              <Input type="number" size="sm" />
            </FormControl>
            <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Textarea placeholder="Escriba una breve descripcion" />
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
              Cargar
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
