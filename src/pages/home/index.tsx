import styles from "./styles.module.css";
import Carrusel from "../../components/carousel";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.titulo}>
        Bienvenido a nuestra tienda de Peluches!!💗
      </div>
      <Carrusel />
    </div>
  );
}

export default Home;
