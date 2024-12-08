import { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../../ui/Button";
import smaller1 from "../../assets/smaller1.svg";
import girlProfile1 from "../../assets/girlProfile1.svg";
import girlProfile from "../../assets/girlProfile.svg";
import whatsapp from "../../assets/whatsapp.svg";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Contact({ id }) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!inputs.name || !inputs.email || !inputs.phone) {
      setError("please fill the field");
      setIsError(true);
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/homepage-enroll",
        inputs,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.status === 200) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(res.data.status);
        setInputs({});
      }

      setError("");
    } catch (err) {
      toast.error("An error occurred while submitting the form.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <section className={styles.sectionSeven} id={id}>
      <div className={`${styles.sectionSevenBtmRight} ${styles.show}`}>
        <div className={styles.sectionSevenBtmRightTop}>
          <div>
            <img
              className={`${styles.small} ${styles.img1}`}
              src={smaller1}
              alt=""
            />
            <img
              className={`${styles.small} ${styles.img2}`}
              src={girlProfile1}
              alt=""
            />
            <img
              className={`${styles.small} ${styles.img3}`}
              src={girlProfile}
              alt=""
            />
            <button className={styles.kBtn}>+100K Followers</button>
          </div>
        </div>
        <p className={styles.followersPara}>
          +100K Followers All Over Social Media
        </p>

        <a
          className={`${styles.getInTouchtwo} ${styles.getInTouchtwo}`}
          href="https://wa.me/0700746267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={styles.connectToWhtspBtn}
            name="connect-on-whatsapp"
          >
            connect on whatsapp
            <img className={styles.whatsappIconTwo} src={whatsapp} alt="" />
          </button>
        </a>
      </div>

      <div className={styles.container} id="getInTouch">
        <div className={styles.sectionSevenTop}>
          <h1 className={styles.sectionSevenTitle}>Let's Talk.</h1>
          <p className={styles.sectionSevenInfo}>
            Your ideas inspire us to innovate. By sharing your thoughts and
            challenges, you contribute to the development of innovative
            solutions that address real-world needs.
          </p>
        </div>

        <div className={styles.sectionSevenBtm}>
          <div className={styles.sectionSevenBtmLeft}>
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.credintails}>
                <div className={styles.inpt}>
                  <label htmlFor="name">Full Name:</label>
                  <input
                    className={styles.fullName}
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    value={inputs.name || ""}
                  />
                  <span className={styles.error}>{isError ? error : ""}</span>
                </div>

                <div className={styles.inpt}>
                  <label htmlFor="number">Phone Number:</label>
                  <input
                    className={styles.phoneNumber}
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    value={inputs.phone || ""}
                  />
                  <span className={styles.error}>{isError ? error : ""}</span>
                </div>

                <div className={styles.inpt}>
                  <label htmlFor="email">Email: </label>
                  <input
                    className={styles.email}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={inputs.email || ""}
                  />
                  <span className={styles.error}>{isError ? error : ""}</span>
                </div>
              </div>
              <div className={styles.textareaCon}>
                <div>
                  <label htmlFor="idea">
                    Your Idea worth it to come and live among Us.
                  </label>
                </div>
                <textarea
                  className={styles.idea}
                  name="idea"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Describe your idea"
                  onChange={handleChange}
                  value={inputs.idea || ""}
                ></textarea>
              </div>
              <Button className={styles.submitBtn}>Submit</Button>
            </form>

            <ToastContainer />
          </div>

          <div className={`${styles.sectionSevenFollowers} ${styles.hide}`}>
            <div className={styles.sectionSevenBtmRight}>
              <div className={styles.sectionSevenBtmRightTop}>
                <div>
                  <img
                    className={`${styles.small} ${styles.img1}`}
                    src={smaller1}
                    alt=""
                  />
                  <img
                    className={`${styles.small} ${styles.img2}`}
                    src={girlProfile1}
                    alt=""
                  />
                  <img
                    className={`${styles.small} ${styles.img3}`}
                    src={girlProfile}
                    alt=""
                  />
                  <button className={styles.kBtn}>+100K Followers</button>
                </div>
              </div>
              <p className={styles.followersPara}>
                +100K Followers All Over Social Media
              </p>

              <a
                className={`${styles.getInTouchtwo} ${styles.getInTouchtwo}`}
                href="https://wa.me/0700746267"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={styles.connectToWhtspBtn}
                  name="connect-on-whatsapp"
                >
                  connect on whatsapp
                  <img
                    className={styles.whatsappIconTwo}
                    src={whatsapp}
                    alt=""
                  />
                </button>
              </a>
            </div>

            <div className={styles.clientsCon}>
              <h1 className={styles.clientTitle}>+100 clients</h1>
              <p className={styles.clientInfo}>
                proudly served over 100 clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
