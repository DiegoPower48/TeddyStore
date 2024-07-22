import Articles from "../../components/articles";
import ArticleDetail from "../../components/articleDetail";
import styles from "./styles.module.css";

function Store() {
  const items = {
    title: "MAURO2",
    description: "Pez betta muy amigable y muy hermoso, consume poca comida",
    photo: "https://i.ibb.co/gZ9LYB6/mauro2.jpg",
  };

  return (
    <div className={styles.store}>
      <div className={styles.articles}>
        <Articles />
      </div>
      <div className={styles.articlesDetail}>
        <ArticleDetail
          title={items.title}
          image={items.photo}
          description={items.description}
          comment="comentarios"
        />
      </div>
    </div>
  );
}

export default Store;
