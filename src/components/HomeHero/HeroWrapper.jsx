import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 50px 0 80px;
  background-color: var(--secondary);
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .title {
    color: var(--white);
    font-size: 52px;
    text-transform: uppercase;
  }

  .hero {
    height: 400px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .img-container {
    position: relative;
  }
  .accent-img {
    height: 180px;
    width: 180px;
    position: absolute;
    bottom: -50px;
    left: -40px;
  }
  p {
    margin-bottom: 2rem;
    color: var(--white);
    font-size: 18px;
    line-height: 29px;
  }
  @media (max-width: 940px) {
    padding: 42px 0 60px;
    .img-container {
      display: none;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .title {
      font-size: 32px;
    }
    p {
      margin-bottom: 1.5rem;
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 660px) {
    padding: 24px 0 42px;
    .title {
      font-size: 30px;
    }
    p {
      font-size: 14px;
      line-height: 25px;
      margin-bottom: 1.2rem;
    }
  }
`;
