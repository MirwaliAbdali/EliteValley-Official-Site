import { useState } from "react";
import styles from "./Experience.module.css";
import rabbot from "../../assets/rabbot.svg";
import girl1 from "../../assets/girl1.svg";
import girl2 from "../../assets/girl2.svg";
import smallGirlProfile from "../../assets/smallGirlProfile.svg";

function Experience() {
  const [activeSection, setActiveSection] = useState("experience");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <section className={styles.sectionFive}>
        <div className={styles.sectionFiveLeft}>
          <img className={styles.sectionFiveRobbotImg} src={rabbot} alt="" />
        </div>

        <div className={styles.sectionFiveRight}>
          <div className={styles.sectionFivePara}>
            <p className={styles.sectionFiveParaOne}>WHY CHOOSE US?</p>
          </div>
          <p className={styles.sectionFiveParaTwo}>
            Why should you put your trust in our expertise?
          </p>

          <div
            className={`${styles.expertise} ${
              activeSection === "experience" ? styles.active : styles.inactive
            }`}
            onClick={() => handleClick("experience")}
          >
            <div>
              <img className={styles.expertiseImg} src={girl1} alt="" />
            </div>
            <div>
              <p className={styles.expertiseTitle}>Experience</p>
              <p className={styles.expertiseInfo1}>
                Extensive industry know-how ensures top-notch results.
              </p>
            </div>
          </div>

          <div
            className={`${styles.expertise} ${
              activeSection === "specialization"
                ? styles.active
                : styles.inactive
            }`}
            onClick={() => handleClick("specialization")}
          >
            <div>
              <img className={styles.expertiseImg} src={girl2} alt="" />
            </div>
            <div>
              <p className={styles.expertiseTitle}>Specialization</p>
              <p className={styles.expertiseInfo}>
                Focused expertise in cutting-edge technology delivers superior
                solutions.
              </p>
            </div>
          </div>

          <div
            className={`${styles.expertise} ${
              activeSection === "clientSatisfaction"
                ? styles.active
                : styles.inactive
            }`}
            onClick={() => handleClick("clientSatisfaction")}
          >
            <div>
              <img
                className={styles.expertiseImg}
                src={smallGirlProfile}
                alt=""
              />
            </div>
            <div>
              <p className={styles.expertiseTitle}>Client Satisfaction</p>
              <p className={styles.expertiseInfo}>
                Our dedication guarantees trust and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
