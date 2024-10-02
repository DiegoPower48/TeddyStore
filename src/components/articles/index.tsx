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
      {!teddy ? (
        <div className={styles.notfound}>No hay elementos</div>
      ) : (
        teddy.map((e: any, i: number) => (
          <Card key={i} className={styles.article}>
            <Link
              to={`/${direction}/${e._id}`}
              style={{ height: "16vw" }}
              replace
            >
              <Card.Img
                variant="top"
                src={e.image}
                className={styles.articlephoto}
              />
            </Link>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>{e.item}</Card.Title>
              {/* <Card.Text className={styles.cardText}>
                {e.shortDescription}
              </Card.Text> */}
              <Card.Text className={styles.price}>Precio: ${e.price}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

export default Articles;
