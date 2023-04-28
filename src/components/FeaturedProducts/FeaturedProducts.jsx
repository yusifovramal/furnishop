import { Link } from "react-router-dom";
import { Loading, Error, Product } from "../index";
import { useGetProductsQuery } from "../../features/Products/productsApi";
import { Wrapper } from "./FeaturedWrapper";

const FeaturedProducts = () => {
  const { isLoading, isError, data: products } = useGetProductsQuery();
  const featured = products?.filter((item) => item.featured === true);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="title">
          <h2 className="section-title">featured products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <div className="all-p-btn">
          <Link to="/products" className="btn">
            all products
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
