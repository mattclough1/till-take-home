import styled from 'styled-components'
import { AccountBalanceIcon, Text } from '../atoms'
import { COLORS } from '../../styles'

interface StyledTransactionProps {
  $dark?: boolean;
}

const StyledTransaction = styled.div<StyledTransactionProps>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 1rem;
  background-color: ${({ $dark }) => $dark ? COLORS['blue-100'] : COLORS['white']}
`

const StyledTransactionAccountBalance = styled.div`
  display: grid;
  grid-template-columns: 0.5rem auto;
  justify-content: end;
  align-items: center;
  grid-gap: 0.25rem;
`

interface TransactionProps {
  amount: number;
  dark?: boolean;
  type: 'credit' | 'debit';
  details?: string;
  date: string;
  merchant: string;
};

export const Transaction = ({ amount, dark, date, details, merchant, type }: TransactionProps) => (
  <StyledTransaction $dark={dark}>
    <Text size="large">{merchant}</Text>
    <Text
      size="large"
      align="right"
      color={
        type === 'credit' ?
        dark ? 
        'blue-500' : 
        'blue-400' : 
        'black'
        }
    >
          {type === 'debit' ? '-' : ''}${amount}
    </Text>
    <Text size="body" color="grey">{new Date(date).toDateString()}</Text>
    <Text size="body" align="right" color="grey">
      <StyledTransactionAccountBalance>
        <AccountBalanceIcon />$212.20
      </StyledTransactionAccountBalance>
    </Text>
  </StyledTransaction>
);