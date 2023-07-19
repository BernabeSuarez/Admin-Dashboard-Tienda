import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProducts from "./components/products/AddProducts";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import RootLayout from "./components/RootLayout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import ProductList from "./components/products/ProductList";
import AdminUser from "./components/users/AdminUser";
import UserList from "./components/users/UserList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products/addProduct" element={<AddProducts />} />
            <Route path="/products/productsList" element={<ProductList />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path="/users/addUser" element={<AdminUser />} />
            <Route path="/users/userList" element={<UserList />} />
          </Route>
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
