import styles from "./Innovate.module.css";

import WhatsApp from "../../assets/whatsapp.svg";
import smallGirlSquar from "../../assets/smallGirlSquar.svg";
import smallGirlSquar1 from "../../assets/smallGirlSquar1.svg";
import rabboticHuman from "../../assets/rabboticHuman.svg";

function Innovate() {
  return (
    <div className="container">
      <section className={styles.sectionTwo}>
        <div className={styles.sectionTwoCon}>
          <div className={styles.sectionTwoChildOne}>
            <p className={styles.para}>
              We innovate software for business success.
            </p>
            <p className={styles.descrp}>
              In the language of business, software is the currency of
              innovation. Invest wisely, and success will follow. 💡🌐
            </p>

            <a
              className={styles.getInTouch}
              href="https://wa.me/0700746267"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.whatsappBtn} type="submit">
                Get In Touch
              </button>
              <img
                className={styles.whatsappIcon}
                src={WhatsApp}
                alt="WhatsApp Icon"
              />
            </a>
          </div>

          <div>
            <div className={styles.sectionTwoChildTwo}>
              <div className={styles.profile}>
                <img
                  className={styles.profileImgOne}
                  src={smallGirlSquar}
                  alt="Profile"
                />
                <p className={styles.paraOne}>Connect With Our Culture</p>
                <p className={styles.paraOneContent}>
                  We are not able to change the world but we believe that we can
                  impact individuals. 🤝💻
                </p>
              </div>
              <div className={styles.profile}>
                <img
                  className={styles.profileImgTwo}
                  src={smallGirlSquar1}
                  alt="Profile"
                />
                <p className={styles.paraOne}>Engage With Our Purpose</p>
                <p className={styles.paraOneContent}>
                  Empowering businesses through innovative web and mobile
                  solutions – where technology meets success. 💻🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            className={styles.raboticHuman}
            src={rabboticHuman}
            alt="Robotic Human"
          />
        </div>
      </section>
    </div>
  );
}

export default Innovate;
