import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import RootLayout from "./components/RootLayout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
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
