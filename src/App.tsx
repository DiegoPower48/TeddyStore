import NavigationBar from "./components/navbar";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:id?" element={<Store />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
