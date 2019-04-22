import {
  space,
  width,
  fontSize,
  color,
  flexWrap,
  flexDirection,
  zIndex,
  top,
  right,
  bottom,
  borderRadius,
  left,
  boxShadow,
  position,
  flex,
  alignItems,
  alignContent,
  justifyContent
} from "styled-system";
import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  ${space} ${borderRadius} ${width} ${fontSize} ${color} ${zIndex} ${top} ${right} ${bottom} ${left} ${position} ${flex} ${flexDirection} ${flexWrap} ${alignItems} ${justifyContent};
`;
