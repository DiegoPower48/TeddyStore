import Articles from "../../components/articles";
import ArticleDetail from "../../components/articleDetail";
import styles from "./styles.module.css";
import { useAuth } from "../../context/authcontext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function Carrito() {
  const { getProfile, GetCart, isAutenticated, contador } = useAuth();
  const [teddy, setTeddys] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function CargarPerfil() {
      const data = await getProfile();
      const res: any = await GetCart(data.carrito);
      setTeddys(res);
      setLoading(false);
    }
    CargarPerfil();
  }, [contador]);

  useEffect(() => {
    if (!isAutenticated) {
      navigate("/");
    }
  }, [isAutenticated]);

  return (
    <div className={styles.store}>
      <div className={styles.articles}>
        {loading ? (
          <Spinner
            style={{
              fontSize: "40px",
              padding: "10%",
              marginLeft: "20vw",
              marginTop: "20vh",
            }}
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Articles teddy={teddy} direction="carrito" />
        )}
      </div>
      <div className={styles.articlesDetail}>
        <ArticleDetail direction="carrito" />
      </div>
    </div>
  );
}

export default Carrito;
