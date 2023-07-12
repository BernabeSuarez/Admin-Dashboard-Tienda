import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import { Flex } from "@chakra-ui/react";

function App() {
  const user = false;

  return (
    <>
      {user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Flex flexDirection="row">
            <Sidebar />
            <Flex p={2} bg="darkgrey" w="100%">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </Flex>
          </Flex>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
