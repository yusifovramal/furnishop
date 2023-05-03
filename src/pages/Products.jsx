import styled from "styled-components";
import { Filters, MobileFilter, ProductsList, Sort } from "../components";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const { grid_view, mnoile_filter } = useSelector((store) => store.utils);

  console.log(mnoile_filter);
  return (
    <main>
      <div className="container">
        <Wrapper className="page">
          <div className="section-center products">
            <Filters />
            {mnoile_filter && <MobileFilter />}
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
  min-height: 70vh;
  .products {
    display: grid;
    column-gap: 60px;
    margin: 4rem auto;
    grid-template-columns: 200px calc(100% - 260px);
  }
  @media (max-width: 992px) {
    .products {
      grid-template-columns: 100%;
      margin: 3rem auto;
    }
  }
  @media (max-width: 660px) {
    min-height: 90vh;
    .products {
      margin: 2rem auto;
    }
  }
`;

export default ProductsPage;
