
import { space} from "styled-system";
// import { color } from "styled-system";
import styled from "styled-components";

export const Title = styled.div`
  font-size: 48px;

font-family: 'Source Sans Pro', sans-serif;
  ${space}
  color: ${props => (props.color ? props.color : "black")};
`;
