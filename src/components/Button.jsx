import styles from "./Button.module.css";

//eslint-disable-next-line react/prop-types
function Button({ onClick, type, children }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
