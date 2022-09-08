import styled from "styled-components";
import { withSpace } from "../../HOCs";

const Box = styled.div``;
const BoxWithSpace = withSpace(Box);

export { BoxWithSpace as Box };