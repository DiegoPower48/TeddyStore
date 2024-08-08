import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { useEffect, useState } from "react";

function Carrusel() {
  const { GetTeddys } = useAuth();
  const [teddy, setTeddys] = useState<any>([""]);

  useEffect(() => {
    async function cargarTeddys() {
      const res: any = await GetTeddys();
      setTeddys(res);
    }
    cargarTeddys();
  }, []);

  return (
    <Carousel className={styles.carrusel}>
      {teddy.map((item: any, i: number) => (
        <Carousel.Item key={i} interval={3000} className={styles.carruselitem}>
          <Link to={`/store/${item._id}`} replace>
            <Carousel.Caption
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={styles.carruselcuadro}
            >
              <span
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "100% 100%",
                }}
                className={styles.carruselimagen}
              ></span>
              <h3 className={styles.carruselTextoTitulo}>{item.item}</h3>
              <p className={styles.carruseltexto}>{item.shortDescription}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
