import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  .form-control {
    margin-top: 16px;
    h5 {
      margin-bottom: 8px;
      color: var(--secondary);
    }
  }
  .search-input {
    padding: 0.5rem;
    border-radius: var(--radius);
    border: 1px solid var(--secondary);
    color: var(--secondary);
    height: 40px;
  }

  @media (max-width: 992px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height:100%;
    display: grid;
    place-content: center;
    padding: 0 16px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    .content {
      background-color: white;
      padding: 24px;
      border: 4px;
    }

    .filter-button {
      display: inline-block;
      margin: 6px 8px;
      padding: 4px;
      border-radius: 4px;
      text-transform: capitalize;
      background: transparent;
      border: 1px solid var(--secondary);
      color: var(--secondary);
      cursor: pointer;
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

    .active {
      color: var(--main);
      font-weight: 600;
      border-color: var(--main);
    }

    .close-modal {
      position: absolute;
      top: 160px;
      right: 20px;
      background:transparent;
      color:var(--white);
      font-size:40px;
      border:none;
    }
  }
`;
