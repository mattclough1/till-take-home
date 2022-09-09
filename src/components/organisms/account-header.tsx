import { useMemo } from 'react';
import styled from 'styled-components';
import { AccountBalanceIcon, Avatar, Text } from '../../components';
import { currencyFormatter } from '../../utils';
import { COLORS } from '../../styles';

import type { Transaction } from '../../types';

interface AccountHeaderProps {
  avatarUrl: string;
  name: string;
  transactions: Transaction[];
  startingBalance: number;
}

const StyledAccountHeader = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 800px) {
    border-right: 2px solid ${COLORS['blue-100']}
  }
`;

const StyledHeaderAccountBalance = styled.div`
  display: grid;
  grid-template-columns: auto 0.75rem;
  justify-content: center;
  align-items: center;
  grid-gap: 0.25rem;
`;

export const AccountHeader = ({
  avatarUrl,
  name,
  transactions,
  startingBalance,
}: AccountHeaderProps) => {
  const currentBalance = useMemo(() => {
    let currentBalance = startingBalance;
    transactions.forEach(({ amount, type }) =>
      type === 'credit'
        ? (currentBalance += amount)
        : (currentBalance -= amount)
    );
    return currentBalance;
  }, [startingBalance, transactions]);

  return (
    <StyledAccountHeader>
      <Text as="div" $align="center">
        Hi {name}!
      </Text>
      <Avatar src={avatarUrl} alt="" $mx="auto" $mt={1.5} $block />
      <Text as="div" $color="grey" $size="large" $mt={1}>
        <StyledHeaderAccountBalance>
          Account Balance <AccountBalanceIcon />
        </StyledHeaderAccountBalance>
      </Text>
      <Text as="div" $align="center" $color="blue-400" $size="heading1"><b>{currencyFormatter.format(currentBalance)}</b></Text>
    </StyledAccountHeader>
  );
};
