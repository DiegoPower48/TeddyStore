import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authcontext";

function NavigationBar() {
  const username = localStorage.getItem("correo");
  const [clicked, setClicked] = useState("");
  const { watch, register, handleSubmit } = useForm();
  const { isAutenticated, logout, count, searchTeddy } = useAuth();

  const navigate = useNavigate();

  const teddy = watch("teddy");

  const search = async () => {
    await searchTeddy(teddy);
    navigate("/search");
  };

  useEffect(() => {}, [count]);

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
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit(search)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className={`${styles.search} me-2 `}
              aria-label="Search"
              {...register("teddy")}
            />
            <Button variant="dark" onClick={() => search()}>
              Search
            </Button>
          </Form>
          {isAutenticated ? (
            <>
              <NavDropdown
                title={`carrito: ${count}`}
                id="navbarScrollingDropdown"
              >
                <NavLink className={styles.menu} to="/carrito">
                  Ver detalle
                </NavLink>
                <NavDropdown.Divider />
                <NavLink className={styles.menu} to="/payment">
                  Ir a pagar
                </NavLink>
              </NavDropdown>

              <NavDropdown
                className={styles.username}
                title={username}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={() => logout()}>
                  Cerrar Sesion
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <div className={styles.button}>
              <NavLink
                className={`${styles.options} ${
                  clicked === "Login" ? styles.linked : ""
                }`}
                onClick={() => setClicked("Login")}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={`${styles.options} ${
                  clicked === "Register" ? styles.linked : ""
                }`}
                onClick={() => setClicked("Register")}
                to="/registro"
              >
                Register
              </NavLink>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
