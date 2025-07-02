import styles from "./Header.module.css";
import patternImage from "../../assets/pattern.png";
import Logo from "../../assets/logo.png";
import MainSectionImg from "../../assets/MainSection.png";
import DropboxLogo from '../../assets/dropbox.png'
import GoogleLogo from '../../assets/google.png'
import PayPalLogo from '../../assets/paypal.png'
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src={Logo} />
          <p>Landguru</p>
        </div>
        <div className={styles.menu}>
          <li>Home</li>
          <li>Adversite</li>
          <li>Support</li>
          <li>Contact</li>
        </div>
        <div className={styles.menuBtn}>
          <button className={styles.headerBtn}>Try for Free</button>
        </div>
      </header>
      <div className={styles.background}></div>
      <img className={styles.patternImg} src={patternImage} />

      <div className={styles.mainSection}>
        <h2>
          Learn Design <br /> with Nia Matos
        </h2>
        <p>
          Get your blood tests delivered at let home collect <br /> sample from
          the victory of the managments that supplies best <br /> design system
          guidelines ever.
        </p>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Search Course Name" />
          <span className={styles.searchIcon}>
            <FaSearch />
          </span>
        </div>
        <div className={styles.sponsors}>
          <p>Sponsored by: </p>
          <img src={DropboxLogo}/>
          <img src={GoogleLogo}/>
          <img src={PayPalLogo}/>
        </div>
      </div> 
      <div className={styles.MainImageWrapper}><img src={MainSectionImg}/></div>
    </div>
  );
}
