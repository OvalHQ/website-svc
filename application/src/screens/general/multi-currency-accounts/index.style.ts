"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Colors from "@/theme/Colors";

const MultiCurrencyAccountsScreenWrapper = styled(Pane)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2,
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

  .hero {
    background: ${Colors.light.secondary};
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 4rem;
    padding-top: 50px;

    .hero-left {
      flex: 1;
      height: 100%;
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: self-start;
    }
    .hero-right {
      flex: 1;
    }

    @media (max-width: 960px) {
      flex-direction: column;
      padding: 20px 30px;
      padding-right: 0;

      .hero-left {
        width: 100%;
      }
      .hero-right {
        align-self: end;
        margin-top: -50px;
      }
    }
    @media (max-width: 500px) {
      padding-top: 90px;
      flex-direction: column;

      .hero-right {
        align-self: end;
        margin-top: -30px;
      }
    }
  }

  .spend-globally {
    background: white;
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 170px;
    padding-bottom: 30px;
  }

  .solid-foundation {
    background: ${Colors.dark.secondary};
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 170px 70px;

    @media (max-width: 500px) {
      padding: 50px 15px;
    }
  }
`;

export default MultiCurrencyAccountsScreenWrapper;
