import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import { Flex } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Flex flexDirection="row">
          <Sidebar />
          <Flex p={2} bg="darkgrey" w="100%">
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/orders" element={<Orders />} />
              </Route>
            </Routes>
          </Flex>
        </Flex>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
