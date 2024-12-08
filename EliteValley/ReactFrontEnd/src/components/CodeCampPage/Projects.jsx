import React from "react";
import styles from "./Projects.module.css";
import template1 from "../../assets/template1.svg";
import template2 from "../../assets/template2.svg";
import template3 from "../../assets/template3.svg";
import template4 from "../../assets/template4.svg";

function Projects() {
  return (
    <div className={styles.general}>
      <div className={styles.projectContainer}>
        <div className={styles.projectTop}>
          <h1 className={styles.projectTitle}>
            We Don't Just Create Projects; We Make History
          </h1>
          <p className={styles.projectInfo}>
            We don't settle for ordinary projects. We craft outstanding
            solutions that leave a lasting impact on people's lives.
          </p>
        </div>

        <div className={styles.projectBtm}>
          <div className={`${styles.projectBtmOne} ${styles.projectImgs}`}>
            <img src={template1} alt="Template 1" />
          </div>
          <div className={`${styles.projectBtmTwo} ${styles.projectImgs}`}>
            <img src={template2} alt="Template 2" />
          </div>
          <div className={`${styles.projectBtmThree} ${styles.projectImgs}`}>
            <img src={template3} alt="Template 3" />
          </div>
          <div className={`${styles.projectBtmFour} ${styles.projectImgs}`}>
            <img src={template4} alt="Template 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
