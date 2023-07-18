import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const loginUrl = "https://backend-tienda-nucba.onrender.com/signin";
const checkUrl = "https://backend-tienda-nucba.onrender.com/checktoken";

//expires cookie test cambiar a mas tiempo
const tiempo = new Date(new Date().getTime() + 1 * 60 * 1000);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const checkToken = async () => {
    axios.get(checkUrl);
  };

  useEffect(() => {
    const cookies = Cookies.get("TOKEN");
    if (!cookies) {
      setUser(null);
      setIsAuth(false);
    }
  }, [user]);

  const loginUser = async (email, password) => {
    try {
      const res = await axios.post(loginUrl, {
        email,
        password,
      });

      setUser(res.data);
      setIsAuth(true);
      Cookies.set("TOKEN", res.data.token, { expires: tiempo });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove("TOKEN");
    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        logout,
        isAuth,
        checkToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
