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

  .layout {
    background: ${Colors.light.secondary};
    width: 100%;
  }
  .hero {
    max-width: 1440px;
    min-height: 90vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 4rem;
    padding-top: 50px;

    .hero-left {
      flex: 1;
      height: 100%;
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: self-start;
    }
    .hero-right {
      flex: 1;
      margin-left: -300px;
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
        margin-left: 0;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 170px 0;
  }

  .solid-foundation {
    background: ${Colors.dark.secondary};
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

export default MultiCurrencyAccountsScreenWrapper;
