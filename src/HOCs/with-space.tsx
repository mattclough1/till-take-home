import styled, { css } from "styled-components";

import type { AnyStyledComponent } from "styled-components";

type SpaceProp = 'ma' | 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my' | 'pa' | 'pt' | 'pb' | 'pl' | 'pr' | 'px' | 'py';
type WithSpaceProps = Partial<Record<SpaceProp, number>>;

export function withSpace<C extends AnyStyledComponent>(Component: C) {
  const StyledComponentWithSpace = styled<C>(Component)<WithSpaceProps>`
    margin: ${({ ma }) => ma ? `${ma * 8 / 16}rem` : undefined}};
    ${({ mx }) => mx && css`
      margin-left: ${mx * 8 / 16}rem;
      margin-right: ${mx * 8 / 16}rem;
    `}
    ${({ my }) => my && css`
      margin-top: ${my * 8 / 16}rem;
      margin-bottom: ${my * 8 / 16}rem;
    `}
    margin-top: ${({ mt }) => mt ? `${mt * 8 / 16}rem` : undefined};
    margin-bottom: ${({ mb }) => mb ? `${mb * 8 / 16}rem` : undefined};
    margin-left: ${({ ml }) => ml ? `${ml * 8 / 16}rem` : undefined};
    margin-right: ${({ mr }) => mr ? `${mr * 8 / 16}rem` : undefined};
    padding: ${({ pa }) => pa ? `${pa * 8 / 16}rem` : undefined}};
    padding-top: ${({ pt }) => pt ? `${pt * 8 / 16}rem` : undefined};
    padding-bottom: ${({ pb }) => pb ? `${pb * 8 / 16}rem` : undefined};
    padding-left: ${({ pl }) => pl ? `${pl * 8 / 16}rem` : undefined};
    padding-right: ${({ pr }) => pr ? `${pr * 8 / 16}rem` : undefined};
  `;
  return StyledComponentWithSpace;
}