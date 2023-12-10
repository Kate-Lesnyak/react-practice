import PropTypes from "prop-types";

import MenuItem from "./MenuItem/MenuItem";
import styles from "./MainMenu.module.css";

function MainMenu({ items = [] }) {
  return (
    <ul className={styles.menu}>
      {items.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </ul>
  );
}

export default MainMenu;

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
