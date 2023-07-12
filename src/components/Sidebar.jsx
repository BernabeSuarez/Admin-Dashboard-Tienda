import { Flex, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Flex w="200px" h="100vh" bg="green.500" p="2%" flexDirection="column">
      <Image src="public/img/logoTienda.png" />
      <Box
        p={2}
        _hover={{ bg: "black", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Link to="/">HOME</Link>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "black", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Link to="/Products">Products</Link>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "black", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Link to="/users">Users</Link>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "black", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Link to="/orders">Orders</Link>
      </Box>
    </Flex>
  );
}
