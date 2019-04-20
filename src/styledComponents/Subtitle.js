

// import { color } from "styled-system";
import styled from "styled-components";

export const Subtitle = styled.div`
  font-size: 20px;
  color: ${props => (props.color ? props.color : "black")};
`;
