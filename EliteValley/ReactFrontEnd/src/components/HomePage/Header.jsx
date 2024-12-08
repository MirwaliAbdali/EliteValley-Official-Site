import Navbar from "../../ui/Navbar";
import styles from "./Header.module.css";
import HumanImage from "../../assets/human.svg";
import Union from "../../assets/Union.svg";

function Header({ id }) {
  return (
    <>
      <Navbar />
      <div className={styles.firstContainer} id={id}>
        <header>
          <div className={styles.headerInfo}>
            <div>
              <div className={styles.headerTitle}>
                <p>
                  For Those Who Dreams Big, We{" "}
                  <span className={styles.headerSpan}>&lt;Code&gt;</span> Bigger
                </p>
              </div>
            </div>
            <div className={styles.headerInfoImg}>
              <img src={HumanImage} alt="Human " />
            </div>
          </div>

          <div className={styles.headerBigImgCon}>
            <img className={styles.union} src={Union} alt="Union" />
            <div className={styles.empowering}>
              <p>Empowering businesses through </p>
              <p>innovative software solutions.</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
