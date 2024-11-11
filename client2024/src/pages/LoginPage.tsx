import styles from "./LoginPage.module.css";
import { CreditsFooter } from "../components/common/CreditsFooter";

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <img
        src="logo.png"
        alt="One Hour World Builders Logo"
        className={`${styles.ohwbLogo} ${styles.bounce}`}
      />
      <div className={styles.buttonContainer}>
        <button className={`${styles.btn} ${styles.btnThree}`}>Play</button>
      </div>
      <CreditsFooter />
    </div>
  );
};