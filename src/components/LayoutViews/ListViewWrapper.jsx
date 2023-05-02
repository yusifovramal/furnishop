import styled from "styled-components";

export const Wrapper = styled.section`
  article {
    display: grid;
    grid-template-columns: calc(32% - 15px) calc(68% - 15px);
    column-gap: 30px;
    align-items: center;
    margin-bottom: 32px;
  }
  .img-container {
    height: 250px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .name {
    color: var(--secondary);
    text-transform: uppercase;
    margin: 0;
    font-size: 18px;
  }
  .price {
    color: var(--main);
    margin: 14px 0 22px;
    font-size: 16px;
  }
  .desc {
    color: var(--text-gray);
    font-size: 16px;
  }

  @media (max-width: 940px) {

  }

  
`;
