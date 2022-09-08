import { useId } from 'react';
import styled from 'styled-components';
import { AccountBalanceIcon, ScreenReaderOnly, Text } from '../atoms';
import { COLORS } from '../../styles';
import { currencyFormatter, dateFormatter } from '../../utils';

export interface TransactionProps {
  amount: number;
  dark?: boolean;
  type: 'credit' | 'debit';
  details?: string;
  date: string;
  merchant: string;
  balanceAfterTransaction: number;
}

const StyledTransaction = styled.div<{ $dark: TransactionProps['dark'] }>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 1rem;
  background-color: ${({ $dark }) =>
    $dark ? COLORS['blue-100'] : COLORS['white']};
`;

const StyledTransactionAccountBalance = styled.div`
  display: grid;
  grid-template-columns: 0.5rem auto;
  justify-content: end;
  align-items: center;
  grid-gap: 0.25rem;
`;

export const Transaction = ({
  amount,
  balanceAfterTransaction,
  dark,
  date,
  details,
  merchant,
  type,
}: TransactionProps) => {
  return (
    <StyledTransaction $dark={dark} role="row">
      <Text size="large" role="cell">
        {merchant}
      </Text>
      <Text
        as="div"
        role="cell"
        align="right"
        size="large"
        color={type === 'credit' ? (dark ? 'blue-500' : 'blue-400') : 'black'}
      >
        <ScreenReaderOnly>
          {currencyFormatter.format(amount)}
          {type}
        </ScreenReaderOnly>
        <span aria-hidden>
          {type === 'debit' ? '-' : ''}
          {currencyFormatter.format(amount)}
        </span>
      </Text>
      <Text color="grey" role="cell">
        {dateFormatter.format(new Date(date))}
      </Text>
      <Text align="right" color="grey" role="cell">
        <StyledTransactionAccountBalance>
          <AccountBalanceIcon />
          {currencyFormatter.format(balanceAfterTransaction)}
        </StyledTransactionAccountBalance>
      </Text>
      {details && (
        <Text color="grey" role="cell">
          <i>{details}</i>
        </Text>
      )}
    </StyledTransaction>
  );
};
