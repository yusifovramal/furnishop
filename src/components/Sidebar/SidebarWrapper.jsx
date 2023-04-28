import styled from "styled-components";

export const SidebarWrapper = styled.div`
  text-align: center;
  a{
    text-decoration: none;
  }
  ul{
  list-style-type:none
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: 0.5s ease all;
    cursor: pointer;
    color:var(--white);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--main);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--white);
    transition: 0.5s ease all;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    color: var(--main);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--secondary);
    transition: 0.5s ease all;
    transform: translate(-100%);
    color:white;
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`