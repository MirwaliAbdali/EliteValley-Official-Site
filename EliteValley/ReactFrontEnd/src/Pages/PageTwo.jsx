import React from "react";
import Header from "../components/CodeCampPage/Header";
import Elevate from "../components/CodeCampPage/Elevate";
import Transform from "../components/CodeCampPage/Transform";
import Projects from "../components/CodeCampPage/Projects";
import Footer from "../components/HomePage/Footer";
import Gain from "../components/CodeCampPage/Gain";
import ExperienceSection from "../components/CodeCampPage/ExperienceSection";
import Enrollment from "../components/CodeCampPage/Enrollment";

import styles from "./main.module.css"; // CSS Module

const PageTwo = () => {
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        {/* CSS Module class */}
        <Elevate />
        <Transform />
        <Projects />
        <Gain />
        <ExperienceSection />
        <Enrollment />
      </div>
      <Footer />
    </>
  );
};

export default PageTwo;
