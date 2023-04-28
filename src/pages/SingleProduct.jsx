import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loading, Error, ProductImages, AddToCart, Stars } from "../components";
import { Link } from "react-router-dom";
import { useGetSingleProductQuery } from "../features/Products/productsApi";
import { Wrapper } from "./SingleProductWrapper";
import { formatPrice } from "../utils/formatPrice";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data: product } = useGetSingleProductQuery(id);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [isError]);

  if (isLoading) {
    return <Loading />;
  }
  
  if (isLoading) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <div className="container">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2 className="title">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;
