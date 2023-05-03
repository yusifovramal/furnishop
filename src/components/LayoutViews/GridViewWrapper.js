import styled from "styled-components";

export const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 660px) {
    .products-container {
      grid-template-columns: 1fr
    }
  }
`