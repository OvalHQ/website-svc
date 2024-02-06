"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Colors from "@/theme/Colors";

const CardsPageScreenWrapper = styled(Pane)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  h2,
  h3,
  p,
  span {
    font-family: Neue Haas Grotesk Display Pro !important;
  }

  .cta-secondary {
    &:hover {
      opacity: 0.8;
      color: black;
      background: tansparent;
    }
  }
  .cta-primary {
    &:hover {
      opacity: 0.8;
      color: white;
      background: black;
    }
  }

  .layout {
    background: ${Colors.light.primary};
    width: 100%;
  }

  .hero {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-bottom: 10px;
    padding-top: 50px;

    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-bottom: 30px;
    padding-top: 50px;

    .hero-left {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: self-start;
    }
    .hero-right {
      flex: 1;
    }

    @media (max-width: 1100px) {
      padding: 100px 2rem;
      padding-right: 0;

      .hero-left h2 {
        font-size: 40px;
        padding-right: 20px;
      }
    }

    @media (max-width: 960px) {
      flex-direction: column;
      padding: 20px 30px;
      padding-right: 0;

      .hero-left {
        width: 100%;
        padding-top: 60px;
      }
      .hero-right {
        align-self: end;
        margin-top: -50px;
        margin-left: 0;
      }
    }
    @media (max-width: 500px) {
      padding-top: 70px;
      flex-direction: column;

      .hero-right {
        align-self: end;
        margin-top: -20px;
      }
    }
  }

  .cards-for-businesses {
    background: #e2fdff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 170px;
    padding-bottom: 60px;
  }

  .corporate-cards {
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 170px 70px;

    @media (max-width: 500px) {
      padding: 50px 15px;
    }
  }
`;

export default CardsPageScreenWrapper;
