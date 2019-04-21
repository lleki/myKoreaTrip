import styled from "styled-components";
import {
color,
  textAlign,
  space,
  fontWeight,
  fontSize
} from "styled-system";

export const Text = styled.div`
 font-family: 'Open Sans', sans-serif;
  ${textAlign}
  ${space}
  ${color}
  ${fontWeight}
  ${fontSize}
`;
