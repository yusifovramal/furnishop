import styled from "styled-components";
export const Wrapper = styled.div`
  display: none;
  @media (min-width: 660px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns:33% 23% 16% 20% 8%;
      justify-items: center;
      h5 {
        color: var(--secondary);
        font-weight: 600;
        text-align:center;
        font-size:16px;
      }
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    border-bottom:1px solid var(--secondary)
  }
`