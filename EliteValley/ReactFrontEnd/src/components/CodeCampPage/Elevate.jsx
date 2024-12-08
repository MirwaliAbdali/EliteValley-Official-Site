import styles from "./Elevate.module.css";
import codeGirl from "../../assets/codeGirl.svg";
import smallGrilSquare1 from "../../assets/smallGrilSquare1.svg";
import smallGirlsquare2 from "../../assets/smallGirlsquare2.svg";

const Elevate = () => {
  return (
    <section className={`${styles.elevateSection} ${styles.general}`}>
      <div className={styles.elevateContainer}>
        <div className={styles.elevateLeft}>
          <img
            className={styles.elevateLeftImg}
            src={codeGirl}
            alt="Code Girl"
          />
        </div>
        <div className={styles.elevate}>
          <h1 className={styles.elevateTitle}>
            Elevate Your Tech Journey with Elite Valley Code Camp
          </h1>
          <p className={styles.elevateInfo}>
            Elite Valley Code Camp offers personalized mentorship to bridge the
            gap between theory and practice, empowering aspiring tech
            professionals to thrive.
          </p>
          <a href="#contact" className={styles.link}>
            <button className={`${styles.elevateBtn} ${styles.link}`}>
              Start Your Journey
            </button>
          </a>

          <div className={styles.elevateBtm}>
            <div className={styles.profiles}>
              <div className={styles.profile}>
                <img
                  className={styles.profileImg}
                  src={smallGrilSquare1}
                  alt="Profile 1"
                />
                <p className={styles.profileTitle}>
                  Practical Skill Development
                </p>
                <p className={styles.profileInfo}>
                  Gain hands-on expertise for real-world success in tech.
                </p>
              </div>
              <div className={styles.profile}>
                <img
                  className={styles.profileImg}
                  src={smallGirlsquare2}
                  alt="Profile 2"
                />
                <h3 className={styles.profileTitle}>Unlock Your Potential</h3>
                <p className={styles.profileInfo}>
                  Experience transformative mentorship, paving the way for a
                  rewarding tech career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elevate;
