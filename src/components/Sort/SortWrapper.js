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
.mobile-filter{
  display:none ;
  background:var(--secondary);
  border:none;
  height:34px;
  width:34px;
  display:grid;
  place-content:center;
  color:var(--white);
  border-radius:4px;
}

@media(max-width:992px){
  padding-bottom:40px;
  .btn-container,.p-found{
    display:none;
  }
  .p-found{
    font-size:16px;
  }
  .mobile-filter{
    display:block 
  }
}
@media(max-width:660px){
  padding-bottom:28px;
}
`;