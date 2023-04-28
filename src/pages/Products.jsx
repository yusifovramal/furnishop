import styled from "styled-components";
import { Filters, ProductsList, Sort } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <div className="container">
        <Wrapper className="page">
          <div className="section-center products">
            <Filters />
            <div>
              <Sort />
              <ProductsList />
            </div>
          </div>
        </Wrapper>
      </div>
    </main>
  );
};

const Wrapper = styled.div`
  min-height: 60vh;
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
