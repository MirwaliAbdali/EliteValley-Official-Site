import React, { useState } from "react";
import styles from "./Gain.module.css";

import profile1 from "../../assets/profile1.svg";
import profile2 from "../../assets/profile2.svg";
import profile3 from "../../assets/profile3.svg";
import IMAGE1 from "../../assets/IMAGE1.svg";

const Gain = () => {
  // State to keep track of the active profile
  const [activeProfile, setActiveProfile] = useState("profile1");

  // Function to handle profile clicks
  const handleProfileClick = (profile) => {
    setActiveProfile(profile);
  };

  return (
    <section className={`${styles.gainSection} ${styles.general}`} id="about">
      <div className={styles.gainContainer}>
        <div className={styles.gainLeftCon}>
          <p className={styles.gainPara}>Why Code Camp</p>
          <h1 className={styles.gainTitle}>
            Why Elite Valley Code Camp & What you will gain?
          </h1>

          {/* Profile 1 */}
          <div
            className={`${styles.gainProfile} ${
              activeProfile === "profile1" ? styles.gainProfileOne : ""
            }`}
            onClick={() => handleProfileClick("profile1")}
          >
            <div>
              <img src={profile1} alt="Profile 1" />
            </div>
            <div>
              <p
                className={`${styles.gainProfileTitle} ${
                  activeProfile === "profile1" ? styles.profileTitleOne : ""
                }`}
              >
                We are mentors not teachers
              </p>
              <p
                className={`${styles.gainProfileInfo} ${
                  activeProfile === "profile1" ? styles.profileOneInfo : ""
                }`}
              >
                Mentors focus on individuals, while teachers focus on groups.
              </p>
            </div>
          </div>

          {/* Profile 2 */}
          <div
            className={`${styles.gainProfile} ${
              activeProfile === "profile2" ? styles.gainProfileOne : ""
            }`}
            onClick={() => handleProfileClick("profile2")}
          >
            <div>
              <img src={profile2} alt="Profile 2" />
            </div>
            <div>
              <p
                className={`${styles.gainProfileTitle} ${
                  activeProfile === "profile2" ? styles.profileTitleOne : ""
                }`}
              >
                We are fast & Flexible
              </p>
              <p
                className={`${styles.gainProfileInfo} ${
                  activeProfile === "profile2" ? styles.profileOneInfo : ""
                }`}
              >
                We help you learn quickly because we carefully plan and manage
                every hour of your study time.
              </p>
            </div>
          </div>

          {/* Profile 3 */}
          <div
            className={`${styles.gainProfile} ${
              activeProfile === "profile3" ? styles.gainProfileOne : ""
            }`}
            onClick={() => handleProfileClick("profile3")}
          >
            <div>
              <img src={profile3} alt="Profile 3" />
            </div>
            <div>
              <p
                className={`${styles.gainProfileTitle} ${
                  activeProfile === "profile3" ? styles.profileTitleOne : ""
                }`}
              >
                Dev Ecosystem & Innovative Environment
              </p>
              <p
                className={`${styles.gainProfileInfo} ${
                  activeProfile === "profile3" ? styles.profileOneInfo : ""
                }`}
              >
                Our developer ecosystem provides a fun and engaging environment
                for students to thrive.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.gainRightCon}>
          <img src={IMAGE1} alt="Gain right" />
        </div>
      </div>
    </section>
  );
};

export default Gain;
