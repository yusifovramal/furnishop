import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  justify-content: flex-end;

  article {
    min-width:300px;
    border-radius: var(--radius);
    background-color: var(--secondary);
    padding:24px;
    color: var(--white)
  }
  .subtotal{
    font-size:24px;
    font-weight:600;
    margin:0
  }
  .fee{
    font-size:18px;
    margin: 16px 0 24px;
    font-weight:500;
  }
  .btn{
    width:100%;
  }
  `
  
  ;
