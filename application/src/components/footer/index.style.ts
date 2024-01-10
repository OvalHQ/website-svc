"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Colors from "@/theme/Colors";

const FooterWrapper = styled(Pane)`
  width: 100%;
  background: ${Colors.dark.primary};
  min-height: 500px;
  padding: 80px 120px 30px;

  .footer-top {
    display: flex;
    gap: 6rem;
    margin-bottom: 170px;
  }
`;

export default FooterWrapper;
