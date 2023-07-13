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
} from "@chakra-ui/react";

const productsUrl = "http://localhost:8080/products";

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
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Lista de productos</TableCaption>
        <Thead>
          <Tr>
            <Th>Categorias</Th>
            <Th>Productos</Th>
            <Th isNumeric>Precio</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item._id}>
              <Td>{item.section}</Td>
              <Td>{item.name}</Td>
              <Td isNumeric>${item.price}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
}
