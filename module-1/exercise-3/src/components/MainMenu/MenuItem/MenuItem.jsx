import PropTypes from "prop-types";
import styles from "./MenuItem.module.css";

function MenuItem({ text = "Without text", link = "#" }) {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={link}>
        {text}
      </a>
    </li>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};
