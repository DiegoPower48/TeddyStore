import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.texto}>Website created by Diego Torres</div>
        <div className={styles.iconos}>
          <a href="https://github.com/DiegoPower48" target="_blank">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              className={styles.icono}
              alt="github-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-arturo-torres-pacherres-440423242/"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/473701/linkedin.svg"
              className={styles.icono}
              alt="linkedin-icon"
              style={{
                borderRadius: "10px",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
