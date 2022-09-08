import React from 'react';
import styled from 'styled-components';

const StyledTransactionList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const TransactionList = ({ children }: { children: React.ReactElement[] }) => (
  <StyledTransactionList>
    {React.Children.map(children, (child, index) => (
      <li>{React.cloneElement(child, { dark: index % 2 !== 0 })}</li>
    ))}
  </StyledTransactionList>
);