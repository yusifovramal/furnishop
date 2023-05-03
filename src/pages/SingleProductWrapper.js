import styled from "styled-components";

export const Wrapper = styled.main`
  .product-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 60px 0 80px;
  }
  .price {
    color: var(--main);
    font-weight: 700;
    font-size: 20px;
    margin: 16px 0 24px;
  }
  .title {
    font-size: 32px;
    color: var(--secondary);
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 14px;
  }
  .desc {
    font-size: 18px;
    color: var(--text-gray);
    margin-bottom: 24px;
  }
  .info {
    text-transform: capitalize;
    display: grid;
    font-size: 18px;
    grid-template-columns: 125px 1fr;
    color: var(--text-gray);
    span {
      font-weight: 700;
    }
  }
  @media (max-width: 940px) {
    min-height:70vh!important;
    .product-center {
      grid-template-columns: 1fr;
    }

    .price {
      font-size: 18px;
      margin: 14px 0 20px;
    }

    .title {
      font-size: 28px;
    }

    .desc {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .info {
      font-size: 16px;
    }
  }
  @media (max-width: 660px) {
    .product-center {
      grid-template-columns: 1fr;
      padding: 36px 0 40px;
    }

    .price {
      font-size: 16px;
      margin: 12px 0 16px;
    }

    .title {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .desc {
      font-size: 14px;
      margin-bottom: 18px;
    }

    .info {
      font-size: 14px;
    }
  }
`;
