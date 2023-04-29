import styled from "styled-components";

export const Wrapper = styled.section`
  .form-control {
    margin-top: 16px;
    h5 {
      margin-bottom: 8px;
      color:var(--secondary)
    }
  }
  .search-input {
    padding: 0.5rem;
    border-radius: var(--radius);
    border: 1px solid var(--secondary);
    color:var(--secondary);
    height:40px;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  .filter-button {
    display: block;
    margin: 4px 0;
    padding: 4px 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .active {
    color:var(--main);
    font-weight:600;
    border-color:var(--main)
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    opacity: 0.5;
  }
  .color-btn.active {
    opacity: 1;
  }
  .all-btn.active {
    opacity:1
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    margin-top:24px;
    background: RGB(255,14,14);
    color: var(--white);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 16px;
    }
  }
`;