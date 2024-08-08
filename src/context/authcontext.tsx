import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "./authaxios";
import toast, { Toaster } from "react-hot-toast";

interface AuthContextType {
  Registrar: (data: any) => Promise<void>;
  Login: (data: any) => Promise<void>;
  GetTeddy: (data: any) => Promise<void>;
  GetTeddys: () => Promise<void>;
  GetCart: (data: any) => Promise<void>;
  getProfile: () => Promise<void>;
  AddTeddy: (data: any) => Promise<void>;
  isAutenticated: boolean;
  errors: string[];
  loading: boolean;
  user: string;
  logout: () => void;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado con un AuthProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState("");
  const [isAutenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState("");
  const [contador, setContador] = useState("");
  const [searched, setSearched] = useState([]);

  const Registrar = async (data: any) => {
    try {
      const res = await axios.post("register", data);
      if (res.status === 200) {
        setUser(data.correo);
        setLoading(false);
        setIsAuthenticated(true);
        localStorage.setItem("token", res.data);
        localStorage.setItem("correo", data.correo);
      }
    } catch (error: any) {
      setErrors([error.response.data]);
      setUser(null);
      setLoading(false);
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  const Login = async (data: any) => {
    try {
      const res = await axios.post("login", data);
      if (res.status === 200) {
        setUser(data.correo);
        console.log(data.correo);
        setLoading(false);
        setIsAuthenticated(true);
        localStorage.setItem("correo", data.correo);
        localStorage.setItem("token", res.data);
      }
    } catch (error: any) {
      setErrors([error.response.data]);
      setUser(null);
      setLoading(false);
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  const GetTeddys = async () => {
    try {
      const res = await axios.get("store");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const GetTeddy = async (data: any) => {
    try {
      const res = await axios.get(`store/${data}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const GetCart = async (cart: any) => {
    try {
      const res = await axios.post("carrito", cart);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteItem = async (teddy: string) => {
    try {
      const res = await axios.put(`store/${user}/${teddy}`);
      console.log(res.data);
      setContador(res.data.carrito);
      toast.success("Eliminado del carrito! 🔥");
      return console.log("articulo borrado");
    } catch (error) {
      console.log(error);
    }
  };

  const AddTeddy = async (data: any) => {
    try {
      const res = await axios.put("store", { nombre: user, teddy: data });
      setContador(res.data.carrito);
      console.log(res.data);
      toast.success("Agregado al carrito! 🛒");
      return res.data;
    } catch (error) {
      return console.error(error);
    }
  };

  const getProfile = async () => {
    try {
      isAutenticated === true;
      const res = await axios.get("profile", { correo: user });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const searchTeddy = async (data: any) => {
    try {
      const res = await axios.get(`search/${data}`);
      setSearched(res.data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  };

  const verificar = async (token: any) => {
    try {
      const res = await axios.post("validate", token);

      if (res.status === 200) {
        setUser(res.data.correo);
        setLoading(false);
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      setErrors([error.response.data]);
      setUser(null);
      setLoading(false);
      setIsAuthenticated(false);
      console.log(error.response.data);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("correo");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    async function CargarCantidad() {
      const res = await getProfile();
      setCount(res.carrito.length);
    }
    CargarCantidad();
  }, [contador]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const tokenId = localStorage.getItem("token");

    async function checkLogin() {
      if (tokenId === undefined) {
        setUser(null);
        setLoading(false);
        setIsAuthenticated(false);
        return;
      }

      verificar({ token: tokenId });
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        Registrar,
        Login,
        isAutenticated,
        errors,
        setLoading,
        loading,
        logout,
        getProfile,
        searched,
        GetCart,
        count,
        searchTeddy,
        contador,
        AddTeddy,
        GetTeddy,
        GetTeddys,
        setErrors,
        DeleteItem,
        user,
      }}
    >
      {children}
      <Toaster
        containerStyle={{
          top: 53,
        }}
      />
    </AuthContext.Provider>
  );
};
