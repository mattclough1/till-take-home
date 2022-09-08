import styled from "styled-components";

import type { AnyStyledComponent } from "styled-components";

export function withSpace(StyledComponent: AnyStyledComponent) {
  const StyledComponentWithSpace = styled(StyledComponent)<{ mt?: number }>`
    margin-top: ${({ mt }) => mt ? `${mt * 8 / 16}rem` : undefined}
  `;
  return StyledComponentWithSpace;
}