import styles from "./TeamGroup.module.css";
import group182Img from "../../assets/Group 182.svg";
import group183Img from "../../assets/Group 183.svg";
import group184Img from "../../assets/Group 184.svg";

function TeamGroup() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionSix}>
        <div className={styles.sectionSixTop}>
          <div>
            <p className={styles.sectionSixParaOne}>
              Meet the Master Minds Behind Our Software Innovations
            </p>
          </div>
          <div>
            <p className={styles.sectionSixParaTwo}>
              Trust is the foundation of a strong team. Members trust each
              other's abilities, intentions, and reliability, fostering a
              supportive and collaborative environment.
            </p>
          </div>
        </div>

        <div className={styles.sectionSixBtm}>
          <div className={styles.groupMember}>
            <img className={styles.group182Img} src={group182Img} alt="" />
            <h3 className={styles.groupTitle}>Clear Goals and Vision</h3>
            <p className={styles.groupInfo}>
              Charting a course for success with precise objectives tailored to
              your project's needs.
            </p>
          </div>

          <div className={styles.groupMember}>
            <img
              className={`${styles.group182Img} ${styles.groupHidden1}`}
              src={group183Img}
              alt=""
            />
            <h3 className={styles.groupTitle}>Innovative and Creative</h3>
            <p className={styles.groupInfo}>
              Igniting ingenuity to craft unique solutions that push the
              boundaries of possibility.
            </p>
            <img
              className={`${styles.group182Img} ${styles.groupHidden2}`}
              src={group183Img}
              alt=""
            />
          </div>

          <div className={styles.groupMember}>
            <img className={styles.group182Img} src={group184Img} alt="" />
            <h3 className={styles.groupTitle}>Diversity and Inclusion</h3>
            <p className={styles.groupInfo}>
              Embracing varied perspectives to build resilient software that
              serves all users with excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamGroup;
