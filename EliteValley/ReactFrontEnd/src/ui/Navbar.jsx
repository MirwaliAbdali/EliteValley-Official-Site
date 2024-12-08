import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Button from "./Button";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-menu.svg";
import logo from "../assets/logo.svg";

import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuIcon() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenuIcon() {
    setMenuOpen(false);
  }

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }

      if (scrollTop > 50) {
        navbarRef.current.style.backgroundColor = "gray";
      } else {
        navbarRef.current.style.backgroundColor = "transparent";
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`${styles.navbar} ${isNavbarHidden ? styles.hidden : ""}`}
      ref={navbarRef}
    >
      <div className="logo-con">
        <ScrollLink to="home" smooth={true} duration={500}>
          <img
            className={styles.logo}
            src={logo}
            alt="EliteValley Code Camp Logo"
          />
        </ScrollLink>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenuIcon}>
        <img src={menuOpen ? closeIcon : menuIcon} alt="menu-icon" />
      </div>

      <ul
        className={`${styles.list} ${menuOpen ? styles.activeMenu : ""}`}
        onClick={closeMenuIcon}
      >
        <li>
          <NavLink to="/homepage" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="service"
            smooth={true}
            duration={500}
            spy={true}
            activeClass={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Service
          </ScrollLink>
        </li>
        <li>
          <NavLink to="/codecamp" onClick={() => setMenuOpen(false)}>
            Code Camp
          </NavLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div className={styles.hideBtn}>
        <Button>
          <ScrollLink to="contact" smooth={true} duration={500} spy={true}>
            Free Quote
          </ScrollLink>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
