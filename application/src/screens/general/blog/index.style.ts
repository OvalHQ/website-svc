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
  }
`;

export default BlogScreenWrapper;
