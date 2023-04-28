import styled from "styled-components";

export const Wrapper = styled.section`
 display:flex;
 justify-content:space-between;
 align-items:center;
 .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--secondary);
      color: var(--secondary);
      width: 30px;
      border-radius: var(--radius);
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 16px;
      }
    }
    .active {
      background: var(--secondary);
      color: var(--white);
    }
  }

.p-found{
  font-weight:600;
}

@media(max-width:660px){
  .btn-container{
    display:none;
  }
  .p-found{
    font-size:16px;
  }
}
`;