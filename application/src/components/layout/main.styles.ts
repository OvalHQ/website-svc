import { Pane } from "evergreen-ui";
import styled from "styled-components";

export const MainLayoutWrapper = styled(Pane)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  p,
  a,
  span {
    font-family: Neue Haas Grotesk Display Pro !important;
  }

  .main-content {
    overflow-y: auto;
    height: calc(100vh - 57px);
  }
`;

export default MainLayoutWrapper;
