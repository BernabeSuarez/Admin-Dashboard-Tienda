import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Flex flexDirection="row">
          <Sidebar />
          <Flex p={2} bg="darkgray" w="100%">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Flex>
        </Flex>
      </BrowserRouter>
    </>
  );
}

export default App;
