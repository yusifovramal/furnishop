import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
      max-width: 100%;
      height: auto;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      width: 100%;

      .name {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 0.5rem;
      }

      .color {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 0.5rem;

        span {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          margin-left: 0.5rem;
        }
      }
    }
  }

  .price {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .subtotal {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .remove-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: red;
    margin-top: 1rem;
  }
  @media (min-width:659.99px){
    display:none
  }
`;
