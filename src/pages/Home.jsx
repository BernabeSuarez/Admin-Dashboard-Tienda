import ProductList from "../components/products/ProductList";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex p={2} bg="darkgrey" w="100%">
      <ProductList />
    </Flex>
  );
}
