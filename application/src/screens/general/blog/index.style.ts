"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";

const BlogScreenWrapper = styled(Pane)`
  .custom-blog {
    padding-bottom: 150px;

    p {
      margin: 20px 0;
      font-size: 20px;
    }
    strong {
      font-size: 20px;
      padding-right: 8px;
      font-weight: 500;
    }
    a {
      text-decoration: underline;
    }
    h3 {
      font-size: 24px;
      margin: 20px 0;
      font-weight: 600;
      font-family: Neue Haas Grotesk Display Pro !important;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-family: Neue Haas Grotesk Display Pro !important;
      li {
        list-style-type: disc;
        margin-left: 15px;
        font-size: 20px;
        font-family: Neue Haas Grotesk Display Pro !important;
      }
    }
  }
`;

export default BlogScreenWrapper;
