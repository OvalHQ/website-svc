"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Colors from "@/theme/Colors";

const FooterWrapper = styled(Pane)`
  width: 100%;
  background: ${Colors.dark.primary};
  min-height: 500px;
  padding: 80px 120px 30px;

  h1,
  h2,
  p,
  span {
    font-family: Neue Haas Grotesk Display Pro !important;
  }

  .footer-top {
    display: flex;
    gap: 6rem;
    margin-bottom: 130px;
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    padding: 80px 60px 30px;

    .footer-top {
      gap: 3rem;
    }
  }

  @media (max-width: 600px) {
    padding: 40px 20px 20px;

    .footer-top {
      margin-bottom: 50px;
      row-gap: 60px;
    }
  }
`;

export default FooterWrapper;
