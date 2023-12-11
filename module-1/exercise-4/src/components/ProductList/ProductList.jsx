import PropTypes from "prop-types";

import ProductItem from "./ProductItem/ProductItem";
import { StyledTitle, StyledList } from "./ProductList.styled";

function ProductList({ title, items = [] }) {
  return (
    <div>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledList>
        {items.map(({ id, ...props }) => (
          <ProductItem key={id} {...props} />
        ))}
      </StyledList>
    </div>
  );
}

export default ProductList;

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
