import React from "react";
import styles from "./Transform.module.css";

import smaller1 from "../../assets/smaller1.svg";
import smaller2 from "../../assets/smaller2.svg";
import smaller3 from "../../assets/smaller3.svg";
import teamImg from "../../assets/teamImg.svg";

const Transform = () => {
  return (
    <section className={styles.transformSection}>
      <div className={styles.general}>
        <div className={styles.transformHeader}>
          <h1 className={styles.transformTitle}>20+ Lives Transformed.</h1>
          <p className={styles.transformInfo}>
            Over 20 students have discovered their passion and experienced
            life-changing transformations with us.
          </p>
        </div>

        <div className={styles.transformBtm}>
          <div className={styles.transformBtmLeft}>
            <div className={styles.transformBtmLeftTop}>
              <div className={styles.images}>
                <img className={styles.smallImgOne} src={smaller1} alt="" />
                <img className={styles.smallImgTwo} src={smaller2} alt="" />
                <img className={styles.smallImgThree} src={smaller3} alt="" />
                <button className={styles.twentyBtn}>+20</button>
              </div>
              <p className={styles.transformLeftPara}>
                Last Year We have changed +20 Lives forever
              </p>
              <a href="#contact" className="link">
                <button className={styles.transformBtn}>
                  Start Your Journey
                </button>
              </a>
            </div>
            <div className={styles.transformBtmLeftBtm}>
              <h3>20+ Leaders</h3>
              <p>We make 20+ Leaders each year</p>
            </div>
          </div>

          <div className={styles.transformBtmRight}>
            <img src={teamImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
