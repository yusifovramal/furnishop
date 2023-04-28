import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: var(--gray);
  padding: 60px 0 80px;
  .featured {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }

  .all-p-btn {
    text-align: center !important;
    margin-top: 40px;
  }

  @media only screen and (max-width: 940px) {
    padding: 40px 0 60px;
    .featured {
      grid-template-columns: repeat(2, 1fr);
    }
    .all-p-btn {
      margin-top: 30px;
    }
  }

  /* Styles for screens with a maximum width of 660px */
  @media only screen and (max-width: 660px) {
    padding: 30px 0 42px;
    .featured {
      grid-template-columns: 1fr;
    }
    .all-p-btn {
      margin-top: 24px;
    }
  }
`;
