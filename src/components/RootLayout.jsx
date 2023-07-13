import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function RootLayout() {
  return (
    <Flex flexDirection="row">
      <Sidebar />
      <Flex p={2} bg="darkgrey" w="100%">
        <Outlet />
      </Flex>
    </Flex>
  );
}
