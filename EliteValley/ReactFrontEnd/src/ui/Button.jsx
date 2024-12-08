import styles from "./Button.module.css";

function Button({ children, className }) {
  return (
    // <Link href="#">
    <button type="submit" className={`${className} ${styles.btn}`}>
      {children}
    </button>
    // </Link>
  );
}

export default Button;
