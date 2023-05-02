import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/img/about.png";
const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <div className="container">
          <div className="about-img">
            <img src={aboutImg} alt="about-img" />
          </div>
          <article>
            <div className="title">
              <h2>our story</h2>
              <div className="underline"></div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </article>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  padding:42px 0 60px ;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    gap:32px
  }
  .about-img{
    height: 380px;
    overflow:hidden;
  }
  img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }
  p {
    line-height:28px;
    margin-top: 2rem;
    color: var(--text-gray);
  }
  .title {
    text-align: left;
    text-transform:capitalize;
    color: var(--secondary)

  }
  .underline {
    margin-left: 0;
  }
  @media (max-width: 992px) {
    padding:24px 0 32px ;
    .container{
      grid-template-columns: 1fr;
      gap:20px;
    }
    .title h2{
      margin:8px 0 0;
    }
    p{
      margin-top:1rem;
      line-height:26px;
    }
    .about-img{
      height:290px;
    }
  }
`;
export default AboutPage;
