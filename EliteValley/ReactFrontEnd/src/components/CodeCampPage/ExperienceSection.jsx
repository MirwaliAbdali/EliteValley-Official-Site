import { useState, useEffect } from "react";
import styles from "./ExperienceSection.module.css";
import RobotHuman from "../../assets/RobotHuman.svg";

const ExperienceCard = ({ number, title, info, isOpen, onClick }) => (
  <div
    className={`${styles.experience} ${isOpen ? styles.expanded : ""}`}
    onMouseEnter={onClick}
    onClick={onClick}
  >
    <h1 className={styles.experienceNum}>{number}</h1>
    <h2 className={styles.experienceTitle}>{title}</h2>
    {isOpen && <p className={styles.experienceInfo}>{info}</p>}{" "}
  </div>
);

const ExperienceSection = () => {
  const [openCard, setOpenCard] = useState("Front-End Dev");

  useEffect(() => {
    setOpenCard("Front-End Dev");
  }, []);

  const cards = [
    {
      number: "01.",
      title: "Front-End Dev",
      info: "Design and innovate websites and web applications.",
    },
    {
      number: "02.",
      title: "Back-End Dev",
      info: "Handle the server, database, and application logic.",
    },
    {
      number: "03.",
      title: "UX/UI Design",
      info: "Create user-friendly designs and interfaces.",
    },
    {
      number: "04.",
      title: "Mobile App Dev",
      info: "Develop and optimize mobile applications.",
    },
    {
      number: "05.",
      title: "Sales & Marketing",
      info: "Focus on the promotion and sales strategies.",
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceContainer}>
        <p className={styles.focusPara}>Our Main Focus</p>
        <div className={styles.experienceTop}>
          <h1>You will experience one of these fields</h1>
          <p>
            At Elite Valley Code Camp, you won't just gain general tech
            knowledge; you'll cultivate expertise in one of these cutting-edge
            fields.
          </p>
        </div>
        <div className={styles.experienceBtm}>
          <div className={styles.experienceLeft}>
            <img src={RobotHuman} alt="Robot and Human" />
          </div>
          <div className={styles.experienceRight}>
            {cards.map((card, index) => (
              <ExperienceCard
                key={index}
                number={card.number}
                title={card.title}
                info={card.info}
                isOpen={openCard === card.title}
                onClick={() => setOpenCard(card.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
