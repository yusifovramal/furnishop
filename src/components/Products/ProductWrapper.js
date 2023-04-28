import styled from "styled-components";

export const Wrapper = styled.article`
  .s-container {
    position: relative;
    border-radius: var(--radius);
  }
  .img span {
    display:block!important;
    height: 225px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
      transition: var(--transition);
    }
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
    }
  }
  .s-container:hover img {
    opacity: 0.6;
  }
  .s-container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    margin-top: 0;
  }
  footer h5 {
    color: var(--secondary);
    font-size: 18px;
    text-transform: capitalize;
  }
  footer p {
    color: var(--main);
    font-weight: 700;
  }

  
`;
