import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useAuth } from "../../context/authcontext";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

interface Props {
  direction: string;
}

function ArticleDetail(props: Props) {
  const { direction } = props;
  const [teddy, setTeddy] = useState<any>([""]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { AddTeddy, DeleteItem, isAutenticated } = useAuth();

  const { GetTeddy } = useAuth();

  const params = useParams();

  const purchaseTeddy = async (data: any) => {
    if (isAutenticated) {
      return await AddTeddy(data);
    }
    navigate("/login");
  };

  const dropTeddy = async (data: any) => {
    await DeleteItem(data);
    navigate("/carrito");
  };

  useEffect(() => {
    async function cargarTeddy() {
      const res: any = await GetTeddy(params.id);
      setLoading(false);
      setTeddy(res);
    }
    cargarTeddy();
  }, [params]);

  return (
    <>
      {!loading ? (
        teddy === undefined ? (
          <div className={styles.default}>SELECT AN ITEM TO VIEW DETAILS</div>
        ) : direction != "carrito" ? (
          <div className={styles.container}>
            <div className={styles.titulo}>-= {teddy.item} =-</div>
            <div className={styles.item}>
              <img className={styles.image} src={teddy.image} />
              <span className={styles.price}>Price:</span>
              <div className={styles.priceNumber}>${teddy.price}</div>
            </div>
            <div className={styles.detail}>{teddy.description}</div>
            <Button
              variant="success"
              className={styles.boton}
              onClick={() => {
                purchaseTeddy(teddy._id);
              }}
            >
              {isAutenticated ? "Add to cart" : "Log in to purchase"}
            </Button>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.titulo}>{teddy.item}</div>
            <div className={styles.item}>
              <img className={styles.image} src={teddy.image} />
              <span className={styles.price}>Price:</span>
              <div className={styles.priceNumber}>${teddy.price}</div>
            </div>
            <div className={styles.detail}>{teddy.description}</div>
            <Button
              className={styles.boton}
              variant="primary"
              onClick={() => {
                dropTeddy(teddy._id);
              }}
              style={{ backgroundColor: "red", border: "1px solid red" }}
            >
              Remove from cart
            </Button>
          </div>
        )
      ) : (
        <Spinner
          style={{
            fontSize: "40px",
            padding: "5%",
            marginLeft: "20vw",
            marginTop: "20vh",
          }}
          animation="border"
          role="status"
        ></Spinner>
      )}
    </>
  );
}

export default ArticleDetail;
