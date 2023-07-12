import { Flex, Spacer, Box, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Admin from "./Admin";

export default function Sidebar() {
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
        <Link to="/">HOME</Link>
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
                <Link to="/Products">Agregar Productos</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/Products">Editar Productos</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/Products">Eliminar Productos</Link>
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
                <Link to="/users">Agregar Usuarios</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/users">Editar Usuarios</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/users">Eliminar Usuarios</Link>
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
                <Link to="/orders">Agregar Ordenes</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/orders">Editar Ordenes</Link>
              </MenuItem>
              <MenuItem
                bg="pallete.gray.300"
                color="white"
                _hover={{ bg: "#086F83", color: "white" }}
              >
                <Link to="/orders">Eliminar Ordenes</Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Spacer />
      <Flex h="20%">
        <Admin />
      </Flex>
    </Flex>
  );
}
