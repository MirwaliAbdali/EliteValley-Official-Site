import React from "react";
import styles from "./Header.module.css";
import Navbar from "../../ui/Navbar";
import Button from "../../ui/Button";
import prize from "../../assets/prize.svg";
import house from "../../assets/house.svg";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className={styles.firstContainer}>
        <span className={styles.nav}>
          <Navbar />
        </span>
        <div className={styles.navDetect}></div>

        <div className={styles.make}>
          <div className={styles.welcomeCon}>
            <p className={styles.welcomePara}>
              Welcome to Elite Valy Code Camp!
            </p>
            <h1>Unlock Your Potential with Personalized Mentorship</h1>
            <div className={styles.prizeCon}>
              <img className={styles.prize} src={prize} alt="Prize" />
              <p className={styles.prizeInfo}>
                At Elite Valley Code Camp, we offer a program designed to guide
                aspiring developers like you to success with personalized
                mentorship.
              </p>
            </div>
          </div>

          <div className={styles.startJourneyCon}>
            <div className={styles.occupancyCon}>
              <p className={styles.occupancy}>Occupancy</p>
              <p className={styles.occupancyNum}>5</p>
            </div>
            <div className={styles.durationCon}>
              <p className={styles.duration}>Duration</p>
              <p className={styles.durationAmount}>1 Year</p>
            </div>
            <div className={styles.chaptersCon}>
              <div className={styles.upcomingCon}>
                <p className={styles.upcoming}>Upcoming Chapter</p>
                <p className={styles.upcomingDate}>1 April 2024</p>
              </div>
              <div className={styles.nextChapterCon}>
                <p className={styles.next}>Next Chapter</p>
                <p className={styles.nextDate}>1 July 2024</p>
              </div>
            </div>
            <div className={styles.journeyBtnCon}>
              <Button className={styles.journeyBtn}>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  Start Your Journey
                </ScrollLink>
              </Button>

              {/* <Button>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  Free Quote
                </ScrollLink>
              </Button> */}
            </div>
          </div>
        </div>

        <div className={styles.houseImgCon}>
          <img className={styles.houseImg} src={house} alt="House" />
        </div>

        <div className={styles.headerBtmCon}>
          <div className={styles.headerBtmConRight}>
            <p className={styles.headerBtmParaOne}>Stand out from the crowd.</p>
            <p className={styles.headerBtmParaTwo}>
              Launch your career with confidence.
            </p>
          </div>
          <p>Passionate Learners</p>
          <p>Fast Learners</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
