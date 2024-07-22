import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

interface Props {
  title: string;
  image: string;
  description: string;
  comment: string;
}

function ArticleDetail(props: Props) {
  const URL = import.meta.env.VITE_API_URL;

  const { title, image, description, comment } = props;

  const params = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>{params.id}</div>
      <img className={styles.image} src={image} />

      <div className={styles.detail}>{description}</div>
      <div className={styles.comment}>{comment}</div>
    </div>
  );
}

export default ArticleDetail;
