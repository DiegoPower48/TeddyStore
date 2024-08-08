import Articles from "../../components/articles";
import ArticleDetail from "../../components/articleDetail";
import styles from "./styles.module.css";
import { useAuth } from "../../context/authcontext";

function Search() {
  const { searched } = useAuth();

  return (
    <div className={styles.store}>
      <div className={styles.articles}>
        <Articles teddy={searched} direction="search" />
      </div>
      <div className={styles.articlesDetail}>
        <ArticleDetail direction="search" />
      </div>
    </div>
  );
}

export default Search;
