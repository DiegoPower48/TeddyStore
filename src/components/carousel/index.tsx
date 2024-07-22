import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";

function Carrusel() {
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
      {items.map((item, i) => (
        <Carousel.Item key={i} interval={3000} className={styles.carruselitem}>
          <Carousel.Caption className={styles.carruselcuadro}>
            <span
              style={{
                backgroundImage: `url(${item.fondo})`,
                backgroundSize: "100% 100%",
              }}
              className={styles.carruselimagen}
            ></span>
            <h3 className={styles.carruselTextoTitulo}>{item.titulo}</h3>
            <p className={styles.carruseltexto}>{item.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
