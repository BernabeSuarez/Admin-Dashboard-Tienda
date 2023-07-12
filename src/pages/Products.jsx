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
  Textarea,
  Select,
  Heading,
} from "@chakra-ui/react";

const url = "http://localhost:8080/product";

export default function Products() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [section, setSection] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    await axios.post(url, {
      name,
      img,
      section,
      description,
      price,
    });
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        minW={{ base: "90%", md: "468px" }}
        border="2px"
        borderColor="pallete.cyan.300"
        borderRadius={8}
      >
        <form
          onSubmit={(e) => {
            addProduct(e);
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
              Cargar Productos
            </Heading>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                size="sm"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Imagen</FormLabel>
              <Input
                type="text"
                size="sm"
                onChange={(e) => setImg(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Categoria</FormLabel>
              <Select
                placeholder="Seleccione una categoria"
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="Gorras">Gorras</option>
                <option value="Remeras">Remeras</option>
                <option value="Accesorios">Accesorios</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Precio</FormLabel>
              <Input
                type="number"
                size="sm"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Textarea
                placeholder="Escriba una breve descripcion"
                onChange={(e) => setDescription(e.target.value)}
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
