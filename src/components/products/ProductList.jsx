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
} from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const productsUrl = "https://backend-tienda-nucba.onrender.com/products";

export default function ProductList(productList) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (await fetch(productsUrl)).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, [productList]);

  return (
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
  );
}
