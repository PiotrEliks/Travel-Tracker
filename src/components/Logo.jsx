import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return(
    <div className={styles.link}>
      <Link to="/">
        <h3 className={styles.logo}>Travel Tracker</h3>
      </Link>
    </div>
  );
}

export default Logo;
