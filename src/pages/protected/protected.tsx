import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import Spinner from "react-bootstrap/Spinner";
import styles from "./styles.module.css";

function ProtectedRoutes() {
  const { loading, isAutenticated } = useAuth();

  if (loading) {
    return (
      <div className={styles.loading}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (isAutenticated && loading) {
    return (
      <div className={styles.loading}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h1>Hola</h1>
        <Navigate to="/" replace />;
      </div>
    );
  }

  return <Outlet />;
}

export default ProtectedRoutes;
