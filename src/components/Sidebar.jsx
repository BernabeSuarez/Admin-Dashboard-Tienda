import { Flex, Spacer, Box, Image } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Admin from "./Admin";
import { useAuth } from "../context/useAuth";

export default function Sidebar() {
  const { logout } = useAuth();
  return (
    <Flex
      w="200px"
      h="100vh"
      bg="pallete.gray.300"
      p="2%"
      color="white"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src="public/img/logoTienda.png" />
      <Box
        p={2}
        _hover={{ bg: "pallete.cyan.300", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Link to="/">Home</Link>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "#086F83", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Menu>
          <MenuButton>Productos</MenuButton>
          <Portal>
            <MenuList bg="pallete.gray.300">
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/products/addProduct">Agregar Productos</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/products/productsList">Lista de Productos</Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "#086F83", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Menu>
          <MenuButton>Usuarios</MenuButton>
          <Portal>
            <MenuList bg="pallete.gray.300">
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/users/addUser">Agregar Usuarios</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/users/userList">Lista de Usuarios</Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "#086F83", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Menu>
          <MenuButton>Ordenes</MenuButton>
          <Portal>
            <MenuList bg="pallete.gray.300">
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/orders">Lista de Ordenes</Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Spacer />
      <Flex h="20%" flexDirection="column">
        <Admin />
        <Button onClick={() => logout()}>Salir</Button>
      </Flex>
    </Flex>
  );
}
