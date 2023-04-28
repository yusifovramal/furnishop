import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 40px 0 120px;
  p {
    margin-bottom: 0;
    color: var(--black);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .service {
    background-color: var(--main);
    text-align: center;
    padding: 32px;
    border-radius: var(--radius);
    transition: var(--transition);
    h4 {
      text-transform: uppercase;
      font-size: 20px;
    }
    p {
      color: var(--black);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: white;
    color: var(--black);
    svg {
      font-size: 2rem;
      transition: var(--transition);
      color: var(--secondary);
    }
  }

  .service:hover {
    transform: scale(1.01);
  }
  .service:hover svg {
    transform: rotate(360deg);
  }
  @media (max-width: 940px) {
    .service {
      padding: 2rem 1.2rem;
    }
    .services-center {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 3rem;
    }
  }

  @media (max-width: 660px) {
    padding: 32px 0px 46px;
    .service {
      padding: 1.8rem 1rem;
      p {
        margin: 0;
        font-size: 14px;
      }
      h4 {
        margin: 14px 0 14px;
      }
    }
    .services-center {
      grid-template-columns: 1fr;
      margin-top: 2rem;
    }
  }
`;
