import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const productsUrl = "https://backend-tienda-nucba.onrender.com/products";

export default function ProductList(productList) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (await fetch(productsUrl)).json();

      // set state when the data received
      setData(data);
      setLoading(false);
    };

    dataFetch();
  }, [productList]);
  return (
    <>
      {loading ? (
        <Flex w="full" h="full" justifyContent="center" alignContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <TableContainer w="100%">
          <Table variant="simple">
            <TableCaption>Lista de productos</TableCaption>
            <Thead>
              <Tr>
                <Th>Categorias</Th>
                <Th>Productos</Th>
                <Th>Product ID</Th>
                <Th isNumeric>Precio</Th>
                <Th>Editar</Th>
                <Th>Borrar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item._id}>
                  <Td>{item.section}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item._id}</Td>
                  <Td isNumeric>${item.price}</Td>
                  <Td>
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Send email"
                      icon={<AiOutlineEdit />}
                    />
                  </Td>
                  <Td>
                    <IconButton
                      variant="outline"
                      colorScheme="red"
                      aria-label="Send email"
                      icon={<AiOutlineDelete />}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
