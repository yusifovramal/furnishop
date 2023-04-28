import styled from 'styled-components'
export const NavContainer = styled("header")`
  padding:20px 0px ;
  background-color:var(--secondary);
  color:white;
  .container{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
 
  
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width:100%;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--main);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-header{
      min-width:auto;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
       list-style-type:none;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: white;
        font-size: 16px;
        text-transform: capitalize;
        font-weight:500;
        padding: 0.5rem;
        text-decoration:none;
        &:hover {
          border-bottom: 2px solid var(--main);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`