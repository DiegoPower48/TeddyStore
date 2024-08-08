import { useState } from "react";
import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
interface Props {
  teddy: any;
  direction: string;
}

function Articles(props: Props) {
  const { teddy, direction } = props;

  return (
    <div className={styles.container}>
      {teddy.length === 0 ? (
        <div className={styles.notfound}>No hay elementos</div>
      ) : (
        teddy.map((e, i) => (
          <Card key={i} className={styles.article} style={{ width: "18rem" }}>
            <Link to={`/${direction}/${e._id}`} replace>
              <Card.Img
                variant="top"
                src={e.image}
                className={styles.articlephoto}
              />
            </Link>
            <Card.Body>
              <Card.Title>{e.item}</Card.Title>
              <Card.Text>{e.shortDescription}</Card.Text>
              <Card.Text className={styles.price}>Precio: ${e.price}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

export default Articles;
