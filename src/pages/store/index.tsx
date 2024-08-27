import Articles from "../../components/articles";
import ArticleDetail from "../../components/articleDetail";
import styles from "./styles.module.css";
import { useAuth } from "../../context/authcontext";
import { useEffect, useState } from "react";

import Spinner from "react-bootstrap/Spinner";

function Store() {
  const { GetTeddys } = useAuth();
  const [teddy, setTeddys] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarTeddys() {
      const res: any = await GetTeddys();
      setLoading(false);
      setTeddys(res);
    }
    cargarTeddys();
  }, []);

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
          <Articles teddy={teddy} direction="store" />
        )}
      </div>
      <div className={styles.articlesDetail}>
        <ArticleDetail direction="store" />
      </div>
    </div>
  );
}

export default Store;
