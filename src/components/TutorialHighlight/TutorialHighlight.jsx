import styles from "./TutorialHighlight.module.css";
import sampleImg from "../../assets/sample-img.png";
import mapBg from "../../assets/map.png";

const TutorialHighlight = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <img src={mapBg} alt="map" className={styles.mapBackground} />
        <div className={styles.cardStack}>
          

          <div className={styles.card}>
            <img
              src={sampleImg}
              alt="Tutorial thumbnail"
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <div className={styles.rating}>
                {"⭐".repeat(5)}{" "}
                <span className={styles.reviews}>5.0 (392 reviews)</span>
              </div>
              <h4 className={styles.title}>
                Convert your web layout theming easily with sketch zeplin
                extension
              </h4>
              <p className={styles.viewCount}>1,037 students watched</p>
              <span className={styles.badge}>Free tutorial</span>
            </div>
          </div>
        </div>

        <div className={styles.textBlock}>
          <p className={styles.label}>Free Tutorial</p>
          <h2 className={styles.heading}>
            More than thousand of free tutorial upload every weeks
          </h2>
          <p className={styles.description}>
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <button className={styles.button}>Explore details</button>
        </div>
      </div>
    </section>
  );
};

export default TutorialHighlight;
