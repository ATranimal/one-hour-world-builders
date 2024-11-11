import styles from "./CreditsFooter.module.css";

export const CreditsFooter = () => {
  return (
    <div className={styles.footerContainer}>
      If you enjoy this app and want to support it, please consider buying a
      <a href="https://kaelandm.itch.io/one-hour-worldbuilders">
        {" "}
        print-and-play{" "}
      </a>
      or{" "}
      <a href="https://kaelanbuildsworlds.gumroad.com/l/1hwb-irl">
        {" "}
        physical copy.{" "}
      </a>
      Developed by <a href="https://kaelan.online/">
        Kaelan Doyle Myerscough{" "}
      </a>{" "}
      and programmed by
      <a href="https://twitter.com/atranimal"> Andrew Tran </a>
    </div>
  );
};
