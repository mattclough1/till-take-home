import styled, { css } from "styled-components";

import type { AnyStyledComponent } from "styled-components";

type SpaceProp = '$ma' | '$mt' | '$mb' | '$ml' | '$mr' | '$mx' | '$my' | '$pa' | '$pt' | '$pb' | '$pl' | '$pr' | '$px' | '$py';
type WithSpaceProps = Partial<Record<SpaceProp, number | 'auto'>>;

export function getSpaceValueFromProps(key: SpaceProp) {
  return function(props: Record<string, any>) {
    const value: number | 'auto' | undefined = props[key];
    return value === 'auto' ? value : value == null ? undefined : `${value * 8 / 16}rem`;
  }
}

/**
 * HOC to add spacing props to styled components
 * e.g. mt = margin-top
 * spacings follow 0.5rem units
 */

export function withSpace<C extends AnyStyledComponent>(Component: C) {
  const StyledComponentWithSpace = styled<C>(Component)<WithSpaceProps>`
  ${({ $mx }) => $mx && css`
    margin-left: ${getSpaceValueFromProps('$mx')({ $mx })};
    margin-right: ${getSpaceValueFromProps('$mx')({ $mx })};
  `}
  ${({ $my }) => $my && css`
    margin-top: ${getSpaceValueFromProps('$my')({ $my })};
    margin-bottom: ${getSpaceValueFromProps('$my')({ $my })};
  `}
    margin: ${getSpaceValueFromProps('$ma')};
    margin-top: ${getSpaceValueFromProps('$mt')};
    margin-bottom: ${getSpaceValueFromProps('$mb')};
    margin-left: ${getSpaceValueFromProps('$ml')};
    margin-right: ${getSpaceValueFromProps('$mr')};
  ${({ $px }) => $px && css`
    padding-left: ${getSpaceValueFromProps('$px')({ $px })};
    padding-right: ${getSpaceValueFromProps('$px')({ $px })};
  `}
  ${({ $py }) => $py && css`
    padding-top: ${getSpaceValueFromProps('$py')({ $py })};
    padding-bottom: ${getSpaceValueFromProps('$py')({ $py })};
  `}
    padding: ${getSpaceValueFromProps('$pa')};
    padding-top: ${getSpaceValueFromProps('$pt')};
    padding-bottom: ${getSpaceValueFromProps('$pb')};
    padding-left: ${getSpaceValueFromProps('$pl')};
    padding-right: ${getSpaceValueFromProps('$pr')};
  `;
  return StyledComponentWithSpace;
}