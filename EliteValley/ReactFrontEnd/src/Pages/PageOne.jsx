import React from "react";
import Header from "../components/HomePage/Header";
import Innovate from "../components/HomePage/Innovate";
import About from "../components/HomePage/About";
import Services from "../components/HomePage/Services";
import Experience from "../components/HomePage/Experience";
import TeamGroup from "../components/HomePage/TeamGroup";
import Contact from "../components/HomePage/Contact";
import Footer from "../components/HomePage/Footer";

import styles from "./main.module.css";

const PageOne = () => {
  return (
    <>
      <div className={styles.main_container}>
        <Header id="home" />
        <Innovate />
        <About id="about" />
        <Services id="services" />
        <Experience />
        <TeamGroup />
        <Contact id="contact" />
      </div>
      <Footer />
    </>
  );
};

export default PageOne;
