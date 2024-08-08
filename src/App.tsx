import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AuthProvider } from "./context/authcontext";
import NavigationBar from "./components/navbar";
import Home from "./pages/home";
import Store from "./pages/store";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Registro from "./pages/registro";
import ProtectedRoutes from "./pages/protected/protected";
import Carrito from "./pages/carrito";
import Payment from "./pages/pagos";
import Search from "./pages/search";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/search" element={<Search />} />{" "}
          <Route path="/search/:id" element={<Search />} />
          <Route path="/store/:id" element={<Store />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/carrito/:id" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
