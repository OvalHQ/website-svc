"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";

const NavbarWrapper = styled(Pane)`
  width: 100%;
  // max-width: 1400px;

  h2,
  p,
  span {
    font-family: Neue Haas Grotesk Display Pro !important;
  }
  .navbar-item-submenu {
    position: absolute;
    top: 45px;
    left: 0;
    width: max-content;
    padding: 20px 30px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: start;
    // box-shadow: 0px 2px 5px 0px #ebebeb;
    border-radius: 10px;
    background: white;

    a {
      color: black;
      margin: 10px 0;
      font-weight: 800;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 0;
    background: transparent;
  }
`;

export default NavbarWrapper;
