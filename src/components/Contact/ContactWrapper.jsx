import styled from "styled-components";

export const Wrapper = styled.section`
  background-color:var(--main);
  padding:40px 0;
  h3 {
    text-transform: none;
  }
  .container{
    max-width:840px;
  }
  p{
    color:var(--secondary);
    font-size:18px;
    text-align:center;
     margin:8px 0 38px;
  }

  .contact-form{
    display:grid;
    grid-template-columns:4fr 1fr;
    gap:20px;
  }


  @media only screen and (max-width: 940px) {
    padding:32px 0;
    
    .container {
      max-width: 720px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
      margin: 8px 0 30px;
    }

    .contact-form {
      grid-template-columns: 1fr;
    }
  }

  /* Styles for screens with a maximum width of 660px */
  @media only screen and (max-width: 660px) {
    padding:24px 0;
    p {
      font-size: 14px;
      line-height: 22px;
      margin: 8px 0 20px;
    }

    .contact-form {
      gap: 10px;
    }
  }
`