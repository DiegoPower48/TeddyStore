import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authcontext";
import styles from "./styles.module.css";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const { Registrar, isAutenticated } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm();

  const datosRegistro = watch();

  const Datos = () => {
    Registrar(datosRegistro);
    console.log("registrando");
  };
  useEffect(() => {
    if (isAutenticated) {
      navigate("/");
    }
  }, [isAutenticated]);
  return (
    <div className={styles.container}>
      <Form className={styles.body}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            className={styles.formulario}
            type="email"
            placeholder="Enter email"
            {...register("correo", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            className={styles.formulario}
            type="password"
            placeholder="Password"
            {...register("contraseña", { required: true })}
          />
        </Form.Group>
        <button
          className={styles.button}
          type="submit"
          onClick={handleSubmit(Datos)}
        >
          Registrar
        </button>
      </Form>
    </div>
  );
}

export default Registro;
