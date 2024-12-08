import styles from "./Servies.module.css";

import webApp from "../../assets/webApp.svg";
import mobileApp from "../../assets/mobileApp.svg";
import graphicDesgin from "../../assets/graphicDesgin.svg";
import flawer from "../../assets/flawer.svg";

function Services() {
  return (
    <div className={styles.container} id="service">
      <section className={styles.sectionFour}>
        <div className={styles.sectionFourTop}>
          <p className={styles.sctFourParaRight}>
            Our Creative <span>Service</span> is something everyone wants
          </p>
          <p className={styles.sctFourParaLeft}>
            Business success is not a destination; it's a journey written in the
            code of continuous innovation. Embark on this journey with us. 💻🚀
          </p>
        </div>

        <div className={styles.sectionFourBtm}>
          <div className={styles.sctFourBtmLeft}>
            <div className={styles.field}>
              <div>
                <img className={styles.fieldImg} src={webApp} alt="" />
              </div>
              <div>
                <p className={styles.fieldNum}>Service 1</p>
                <h1 className={styles.fieldTitle}>
                  Web Application Development
                </h1>
                <p className={styles.fieldContent}>
                  Software innovation fuels digital success through web
                  development
                </p>
              </div>
            </div>

            <div className={styles.field}>
              <div>
                <img className={styles.fieldImg} src={mobileApp} alt="" />
              </div>
              <div>
                <p className={styles.fieldNum}>Service 2</p>
                <h1 className={styles.fieldTitle}>
                  Mobile Application Development
                </h1>
                <p className={styles.fieldContent}>
                  Innovation in software drives business success through mobile
                  development
                </p>
              </div>
            </div>

            <div className={styles.field}>
              <div>
                <img className={styles.fieldImg} src={graphicDesgin} alt="" />
              </div>
              <div>
                <p className={styles.fieldNum}>Service 3</p>
                <h1 className={styles.fieldTitle}>Graphic Design</h1>
                <p className={styles.fieldContent}>
                  Creativity in design innovates user experience, ensuring
                  business success.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sctFourBtmRight}>
            <img src={flawer} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
