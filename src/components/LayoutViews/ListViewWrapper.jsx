import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  .img-container {
    width: 300px;
    height: 260px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  h4 {
    color:var(--secondary);
    text-transform:uppercase;
    margin:0;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
