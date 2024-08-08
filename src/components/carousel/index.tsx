import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { useEffect, useState } from "react";

function Carrusel() {
  const { GetTeddys } = useAuth();
  const [teddy, setTeddys] = useState([""]);

  useEffect(() => {
    async function cargarTeddys() {
      const res = await GetTeddys();
      setTeddys(res);
    }
    cargarTeddys();
  }, []);

  const items = [
    {
      titulo: "MAURO2",
      descripcion: "Pez betta muy amigable y muy hermoso, consume poca comida",
      fondo: "https://i.ibb.co/gZ9LYB6/mauro2.jpg",
    },
    {
      titulo: "ONCE",
      descripcion:
        "Gata muy gorda, juguetona y muy protectora, le gusta dormir en camas y sofas",
      fondo: "https://i.ibb.co/G0dnYFt/once.jpg",
    },
    {
      titulo: "MICHU",
      descripcion: "Un gato 'hermoso' amarillo, bastante travieso",
      fondo: "https://i.ibb.co/7WWZhyx/Michu.jpg",
    },
  ];

  return (
    <Carousel className={styles.carrusel}>
      {teddy.map((item, i) => (
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
