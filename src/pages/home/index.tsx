import styles from "./styles.module.css";
import Carrusel from "../../components/carousel";

function Home() {
  return (
    <div className={styles.root}>
      <div>Hola Home</div>
      <Carrusel />
    </div>
  );
}

export default Home;
