"use client";

import styled from "styled-components";
import { Pane } from "evergreen-ui";

const BlogScreenWrapper = styled(Pane)`
  .custom-blog {
    padding-bottom: 150px;

    p {
      margin: 20px 0;
      font-size: 17px;
    }
    strong {
      font-size: 20px;
      padding-right: 10px;
    }
    a {
      text-decoration: underline;
    }
  }
`;

export default BlogScreenWrapper;
