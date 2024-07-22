import styles from "./styles.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Articles() {
  const items = [
    {
      title: "MAURO2",
      description: "Pez betta muy amigable y muy hermoso, consume poca comida",
      photo: "https://i.ibb.co/gZ9LYB6/mauro2.jpg",
    },
    {
      title: "ONCE",
      description:
        "Gata muy gorda, juguetona y muy protectora, le gusta dormir en camas y sofas",
      photo: "https://i.ibb.co/G0dnYFt/once.jpg",
    },
    {
      title: "MICHU",
      description: "Un gato 'hermoso' amarillo, bastante travieso",
      photo: "https://i.ibb.co/7WWZhyx/Michu.jpg",
    },
    {
      title: "MAURO2",
      description: "Pez betta muy amigable y muy hermoso, consume poca comida",
      photo: "https://i.ibb.co/gZ9LYB6/mauro2.jpg",
    },
    {
      title: "ONCE",
      description:
        "Gata muy gorda, juguetona y muy protectora, le gusta dormir en camas y sofas",
      photo: "https://i.ibb.co/G0dnYFt/once.jpg",
    },
    {
      title: "MICHU",
      description: "Un gato 'hermoso' amarillo, bastante travieso",
      photo: "https://i.ibb.co/7WWZhyx/Michu.jpg",
    },
    {
      title: "MAURO2",
      description: "Pez betta muy amigable y muy hermoso, consume poca comida",
      photo: "https://i.ibb.co/gZ9LYB6/mauro2.jpg",
    },
    {
      title: "ONCE",
      description:
        "Gata muy gorda, juguetona y muy protectora, le gusta dormir en camas y sofas",
      photo: "https://i.ibb.co/G0dnYFt/once.jpg",
    },
    {
      title: "MICHU",
      description: "Un gato 'hermoso' amarillo, bastante travieso",
      photo: "https://i.ibb.co/7WWZhyx/Michu.jpg",
    },
  ];

  return (
    <>
      {items.map((e, i) => (
        <Card key={i} className={styles.article} style={{ width: "18rem" }}>
          {" "}
          <Link to={`/store/${e.title}`} replace>
            <Card.Img
              variant="top"
              src={e.photo}
              className={styles.articlephoto}
            />{" "}
          </Link>
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>{e.description}</Card.Text>

            <Button variant="primary">Añadir al carrito</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Articles;
