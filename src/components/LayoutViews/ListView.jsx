import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { Wrapper } from "./ListViewWrapper";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <div className="img-container">
              <img src={image} alt={name} />
            </div>
            <div>
              <h4 className="name">{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p className="desc">{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ListView;
