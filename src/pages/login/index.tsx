import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authcontext";
import styles from "./styles.module.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const { Login, isAutenticated } = useAuth();

  const { register, handleSubmit, watch } = useForm();

  const datosLogin = watch();

  const Datos = () => {
    Login(datosLogin);
  };
  useEffect(() => {
    if (isAutenticated) {
      navigate("/");
    }
  }, [isAutenticated]);

  return (
    <div className={styles.container}>
      <Form className={styles.body}>
        <Form.Group className="mb-3 " controlId="formGroupEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            className={styles.formulario}
            type="email"
            placeholder="Enter email"
            {...register("correo", { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className={styles.texto}>Password:</Form.Label>
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
          Login
        </button>
      </Form>
    </div>
  );
}

export default Login;
