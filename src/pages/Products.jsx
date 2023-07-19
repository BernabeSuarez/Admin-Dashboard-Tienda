import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <Flex w="full" flexDirection="column">
      <Outlet />
    </Flex>
  );
}
