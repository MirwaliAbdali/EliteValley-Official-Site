import styles from "./About.module.css";
import house1 from "../../assets/house1.svg";
import robboticSystem from "../../assets/robboticSystem.svg";
import carttonGirl from "../../assets/carttonGirl.svg";

function About({ id }) {
  return (
    <div className={styles.container} id={id}>
      <div>
        <img className={styles.disNone} src={house1} alt="house" />
      </div>
      <section className={styles.sectionThree}>
        <div className={styles.sectionThreeLeft}>
          <div className={styles.sectionThreeInfo}>
            <p className={styles.sectionThreeParaOne}>
              Business Thrives On Innovation Driven By Software Solutions.
            </p>
            <p className={styles.sectionThreeParaTwo}>
              Our vision is to revolutionize the world through innovative
              software solutions that empower individuals and businesses to
              thrive in the digital era.
            </p>
          </div>

          <div className={styles.sectionThreeImgs}>
            <div className={styles.sectionThreeImgOneCon}>
              <img
                className={styles.sectionThreeImgOne}
                src={house1}
                alt="house"
              />
            </div>
            <div className={styles.sectionThreeImgTwoCon}>
              <img
                className={styles.sectionThreeImgTwo}
                src={robboticSystem}
                alt="robbotic"
              />
            </div>
          </div>
        </div>

        <div className={styles.sectionThreeRight}>
          <img className={styles.cartonGirl} src={carttonGirl} alt="" />
        </div>
      </section>
    </div>
  );
}

export default About;
