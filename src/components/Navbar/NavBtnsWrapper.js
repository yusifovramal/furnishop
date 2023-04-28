import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 200px;
  a{
    text-decoration:none;
    color:white;
  }
  .cart-btn {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--main);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:600;
    border-radius: 50%;
    font-size: 0.75rem;
    color:var(--secondary);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    cursor: pointer;
    color: var(--light-gray);
    transition:0.5s ease all;
    svg {
      margin-left: 5px;
    }
    :hover{
        color:var(--main)
    }
  }
`