import styles from "./styles.module.css";
import Carrusel from "../../components/carousel";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.titulo}>Welcome to our Stuffed Toy Store!!💗</div>
      <Carrusel />
    </div>
  );
}

export default Home;
