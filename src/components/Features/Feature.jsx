import styles from "./Feature.module.css";
export default function Feature() {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.cardDiv}>
        <div className={styles.rowOne}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>80K+</h2>
            </div>
            <div className={styles.cardTitle}>
              <p>
                We have more than <br /> students
              </p>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.cardHeading2}>
              <h2>90+</h2>
            </div>
            <div className={styles.cardTitle2}>
              <p>
                Daily updated blog <br />
                post maintain
              </p>
            </div>
          </div>
        </div>

        <div className={styles.rowTow}>
          <div className={styles.card3}>
            <div className={styles.cardHeading3}>
              <h2>150+</h2>
            </div>
            <div className={styles.cardTitle3}>
              <p>
                Free online tutorials <br />
                videos avaialble
              </p>
            </div>
          </div>
          <div className={styles.card4}>
            <div className={styles.cardHeading4}>
              <h2>& 3M</h2>
            </div>
            <div className={styles.cardTitle4}>
              <p>Job posted everydays with qualification</p>
            </div>
          </div>
        </div>
        <div className={styles.rowThree}>
          <p className={styles.coreFeature}>Core features</p>
          <div className={styles.titleWrapper}>
            <p className={styles.featureTitle}>
              Smart Jackpots that you may love this anytime & anywhere
            </p>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.featureDescription}>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>
          </div>
          <button className={styles.detailsButton}>Explore details</button>
        </div>
      </div>
    </div>
  );
}
