import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  overflow: hidden;
  grid-template-columns: 33% 23% 16% 20% 8%;
  align-items: center;
  border-bottom: 1px solid var(--secondary);
  & > *:not(.product) {
    text-align: center;
  }
  .product {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 20px;
    align-items: center;
    justify-content: center;
    .content {
      .name {
        font-size: 18px;
        margin-bottom: 0;
        text-transform: capitalize;
        color: var(--secondary);
      }
      .color {
        color: var(--text-gray);
        font-size: 16px;
        margin-top: 14px;
        display: flex;
        span {
          display: inline-block;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          margin-left: 8px;
          margin-top: 3px;
        }
      }
    }
  }
  img {
    height: 75px;
    width: 100%;
  }

  .price {
    color: var(--main);
  }
  .subtotal{
    color: var(--secondary);
  }
  .remove-btn {
    color: var(--white);
    border: transparent;
    background: rgb(255, 14, 14);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 15px;
    cursor: pointer;
  }
`;
