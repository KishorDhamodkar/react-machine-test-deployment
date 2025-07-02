
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroHeading}>
        Ready to learn design <br /> with Nia Matos
      </h1>
      <button className={styles.heroButton}>Start Learning Today</button>
    </div>
  );
};

export default Hero;
