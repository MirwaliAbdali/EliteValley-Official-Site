import styles from "./Enrollment.module.css";
import Button from "../../ui/Button";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const Enrollment = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !inputs.name ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.aboutself ||
      !file
    ) {
      setError("field is required.");
      setIsError(true);
      return;
    }

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("phone", inputs.phone);
    formData.append("aboutself", inputs.aboutself);
    formData.append("cv", file);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/codecamp-enroll",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.status === 200) {
        toast.success("Form submitted successfully!");

        console.log(res.data.message);
        setInputs({});
        setFile(null);
      }

      setError("");
    } catch (err) {
      toast.error("An error occurred while submitting the form.");
    }
  }

  return (
    <section className={`${styles.enrollSection} ${styles.general}`}>
      <div className={styles.enrollContainer}>
        <h1 className={styles.enrollTitle}>Start Your Journey Now</h1>
        <p className={styles.enrollInfo}>
          Your ideas inspire us to innovate. By sharing your thoughts and
          challenges, you contribute to the development of innovative solutions
          that address real-world needs.
        </p>

        <div className={styles.enrollForm} id="contact">
          <form onSubmit={handleSubmit}>
            <div className={styles.innerFormCon}>
              <div className={styles.inptCon}>
                <label htmlFor="name">Full Name</label>
                <input
                  className={`${styles.name} ${styles.inpt}`}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  value={inputs.name || ""}
                />
                <span
                  style={{ color: "red", marginTop: "4px", fontSize: "14px" }}
                >
                  {isError ? error : ""}
                </span>
              </div>

              <div className={styles.inptCon}>
                <label htmlFor="email">Email</label>
                <input
                  className={`${styles.email} ${styles.inpt}`}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  onChange={handleChange}
                  value={inputs.email || ""}
                />
                <span
                  style={{ color: "red", marginTop: "4px", fontSize: "14px" }}
                >
                  {isError ? error : ""}
                </span>
              </div>

              <div className={styles.inptCon}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  className={`${styles.phoneNum} ${styles.inpt}`}
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={handleChange}
                  value={inputs.phone || ""}
                />
                <span
                  style={{ color: "red", marginTop: "4px", fontSize: "14px" }}
                >
                  {isError ? error : ""}
                </span>
              </div>

              <div className={`${styles.inptCon} ${styles.fileCon}`}>
                <span id="file-name" className={styles.fileName}>
                  CV
                </span>
                <label htmlFor="cv" className={styles.fileInputLabel}>
                  cv.pdf
                </label>
                <input
                  type="file"
                  accept=".pdf,.pptx,.docx,.doc"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                />
              </div>

              <div className={`${styles.textareaCon} ${styles.inptCon}`}>
                <label htmlFor="aboutSelf">Tell Me About Yourself</label>
                <textarea
                  name="aboutself"
                  className={styles.inpt}
                  id="aboutself"
                  cols="30"
                  rows="10"
                  placeholder="Describe yourself..."
                  onChange={handleChange}
                  value={inputs.aboutself || ""}
                ></textarea>
              </div>
            </div>

            <Button className={styles.enrollBtn}>Enroll</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
