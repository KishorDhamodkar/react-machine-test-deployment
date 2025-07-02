import styles from "./Tutorial.module.css";
import Card from "../UI/Card";
import TutorialImageOne from "../../assets/tutorial1.png";
import TutorialImageTwo from "../../assets/tutorial2.png";
import TutorialImageThree from "../../assets/tutorial3.png";
import FiveStarRating from "../../assets/fivestar.png";
import FourStarRating from "../../assets/fourstar.png";
export default function Tutorial() {
  return (
    <div className={styles.container}>
      <div className={styles.tutorialSection}>
        <p>QUALITY FEATURES</p>
        <h2>Tutorials that people love most</h2>
        <div className={styles.cardWrapper}>
          <Card
            tutorialImage={TutorialImageOne}
            ratingImage={FiveStarRating}
            rating="5.0 (300 review)"
            cardText="How to work with prototype design with adobe xd featuring tools"
            noOfStudent="2,538 students watched"
          />
          <Card
            tutorialImage={TutorialImageTwo}
            ratingImage={FourStarRating}
            rating="4.5 (243 review)"
            cardText="Create multiple artboard by using figma prototyping tools development"
            noOfStudent="3,532 students watched"
          />
          <Card
            tutorialImage={TutorialImageThree}
            ratingImage={FiveStarRating}
            rating="5.0 (330 review)"
            cardText="Convert your web layout theming easily with sketch zeplin extension"
            noOfStudent="1,037 students watched"
          />
        </div>
      </div>
    </div>
  );
}
