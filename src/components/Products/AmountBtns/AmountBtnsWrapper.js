import styled from "styled-components";

export const Wrapper = styled.div`
color:var(--secondary);
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  p {
    font-weight:700;
    font-size:24px;
    margin: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color:var(--secondary);
  }
`
