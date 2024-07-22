import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const [clicked, setClicked] = useState("");
  const { watch, register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_API_URL;
  const buscado = watch("item");

  const search = () => {
    navigate(`/store/${buscado}`);
    console.log(URL);
  };

  return (
    <div className={styles.root}>
      <Navbar>
        <Container className={styles.Navbar}>
          <Nav>
            <NavLink
              className={`${styles.options} ${
                clicked === "Home" ? styles.linked : ""
              }`}
              to="/"
              onClick={() => setClicked("Home")}
            >
              Home
            </NavLink>
            <NavLink
              className={`${styles.options} ${
                clicked === "store" ? styles.linked : ""
              }`}
              onClick={() => setClicked("store")}
              to="/store"
            >
              Store
            </NavLink>
            <NavLink
              className={`${styles.options} ${
                clicked === "temporada" ? styles.linked : ""
              }`}
              onClick={() => setClicked("temporada")}
              to=""
            >
              Temporada
            </NavLink>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit(search)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              {...register("item", { required: true })}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
          <NavDropdown title="Username" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Compras</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Historial</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Cerrar Sesion</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
