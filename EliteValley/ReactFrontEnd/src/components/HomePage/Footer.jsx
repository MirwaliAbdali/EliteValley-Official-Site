import styles from "./Footer.module.css";
import communicationGroup from "../../assets/communicationGroup.svg";
import youtube from "../../assets/youtube.svg";
import linkedIn from "../../assets/linkedIn.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className={styles.container} id="contact">
        <div className={styles.footerLeft}>
          <img src={communicationGroup} alt="" />
        </div>

        <div className={styles.footerRight}>
          <p className={styles.footerTitle}>You can help shape the Future</p>
          <p className={styles.footerInfo}>
            Are you looking for a top-notch mobile app or a powerful web
            application? Look no further! At Elite Valley, we specialize in
            creating innovative and high-quality digital solutions that meet
            your unique business needs.
          </p>

          <div className={styles.footerRightTop}>
            <div className={styles.footerRightBtmNumbers}>
              <p>Phone: +93730130230</p>
              <p>Phone: +93708112462</p>
            </div>

            <div className={styles.footerRightBtmEmails}>
              <p>Email: Innovate@elitevalley.af</p>
              <p>Address: Karte 4, Kabul Afghanistan</p>
            </div>
          </div>
          <div className={styles.footerRightMiddle}></div>
          <div className={styles.footerRightBtm}>
            <div className={styles.copyright}>Copyright 2024 </div>
            <div className={styles.icons}>
              <a href="https://youtube.com/@elitevalley786?si=4UfMNaYt5SwoMvRu">
                <img src={youtube} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.facebook.com/elitevalley.af?mibextid=ZbWKwL">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/elitevalley/">
                <img src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
