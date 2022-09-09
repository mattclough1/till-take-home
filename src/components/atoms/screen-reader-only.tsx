import styled from "styled-components";

/**
 * Styled component to wrap elements that should only be visible
 * to a screen reader
 */

export const ScreenReaderOnly = styled.div`
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
`;