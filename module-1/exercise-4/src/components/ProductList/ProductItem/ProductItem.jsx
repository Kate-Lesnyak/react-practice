import PropTypes from "prop-types";
import { StyledLink, StyledText } from "./ProductItem.styled";

export default function ProductItem({
  name = "name undefined",
  text = "неизвестно",
  link = "#пустышка",
}) {
  return (
    <li>
      <StyledLink href={link}>
        <b>{name}</b>
        <StyledText>{text}</StyledText>
      </StyledLink>
    </li>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
