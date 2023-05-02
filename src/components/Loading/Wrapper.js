import styled from "styled-components";

export const Wrapper = styled.div`
  .loading {
    width: 96px;
    height: 96px;
    margin: 0 auto;
    margin-top: 160px;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--secondary); /* replace this with your desired color variable */
    animation: loading 0.6s linear infinite;
  }

  ${(props) =>
    props.small &&
    css`
      .loading {
        width: 48px;
        height: 48px;
        margin-top: 0;
        border-top-color: var(--main);
      }
    `}

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
