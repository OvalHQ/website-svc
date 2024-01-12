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
    height: 90vh;
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
  }
`;

export default MultiCurrencyAccountsScreenWrapper;
