import React from "react";

import { color } from "styled-system";
import styled, { ThemeProvider } from "styled-components";

export const Title = styled.div`
  font-size: 48px;
  color: ${props => (props.color ? props.color : "black")};
`;
