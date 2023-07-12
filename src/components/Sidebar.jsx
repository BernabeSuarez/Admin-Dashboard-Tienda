import { Flex, Spacer, Box, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Admin from "./Admin";

export default function Sidebar() {
  return (
    <Flex
      w="200px"
      h="100vh"
      bg="green.500"
      p="2%"
      flexDirection="column"
      justifyContent="space-between"
    >
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
        <Menu>
          <MenuButton>Productos</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>
                <Link to="/Products">Agregar Productos</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Products">Editar Productos</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Products">Eliminar Productos</Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "black", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Menu>
          <MenuButton>Usuarios</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>
                <Link to="/users">Agregar Usuarios</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/users">Editar Usuarios</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/users">Eliminar Usuarios</Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Box
        p={2}
        _hover={{ bg: "black", color: "white" }}
        transition="all 0.2s"
        borderRadius={8}
      >
        <Menu>
          <MenuButton>Ordenes</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>
                <Link to="/orders">Agregar Ordenes</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/orders">Editar Ordenes</Link>
              </MenuItem>
              <MenuItem>
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
