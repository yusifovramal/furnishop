import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { formatPrice } from "../../utils/formatPrice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Wrapper } from "./ProductWrapper";
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="s-container">
        <div className="img">
          <LazyLoadImage src={image} alt={name} effect="blur"  />
        </div>
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
