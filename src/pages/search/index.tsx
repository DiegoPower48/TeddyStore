import Articles from "../../components/articles";
import ArticleDetail from "../../components/articleDetail";
import styles from "./styles.module.css";
import { useAuth } from "../../context/authcontext";
import { useEffect, useState } from "react";

function Search() {
  const { GetTeddys, searched } = useAuth();
  const [teddy, setTeddys] = useState([""]);

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
