import styles from './Card.module.css'
import Eye from '../../assets/eye.png'
export default function Card ({tutorialImage, ratingImage, cardText, noOfStudent, rating}) {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={tutorialImage}/>
            <div className={styles.ratingWrapper}>
                <img src={ratingImage}/>
                <p>{rating}</p>
            </div>
            <h3 className={styles.cardTitle}>{cardText}</h3>
            <div className={styles.studentWrapper}>
                <img src={Eye}/>
                <h4>{noOfStudent}</h4>
            </div>
        </div>

    )
}