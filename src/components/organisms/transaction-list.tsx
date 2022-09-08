import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Box, ScreenReaderOnly, Text, Transaction } from '../../components';
import { getTransactionPropsFromData } from '../../utils';

import type { Transaction as TransactionType } from '../../types';
import type { TransactionProps } from '../../components';

const StyledTransactionList = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const TransactionList = ({
  startingBalance,
  transactions,
}: {
  startingBalance: number;
  transactions: TransactionType[];
}) => {
  const transactionProps: TransactionProps[] = useMemo(
    () => getTransactionPropsFromData(transactions, startingBalance),
    [startingBalance, transactions]
  );

  return (
    <section>
      <ScreenReaderOnly>
        <Text as="h2">
          Recent Transactions
        </Text>
      </ScreenReaderOnly>
      <Box />
      <StyledTransactionList
        role="table"
        aria-rowcount={transactionProps.length}
      >
        <ScreenReaderOnly role="row">
          <div role="columnheader">merchant</div>
          <div role="columnheader">amount</div>
          <div role="columnheader">date</div>
          <div role="columnheader">balance after transaction</div>
          <div role="columnheader">details</div>
        </ScreenReaderOnly>
        {transactionProps.map((transaction) => (
          <Transaction {...transaction} key={JSON.stringify(transaction)} />
        ))}
      </StyledTransactionList>
    </section>
  );
};
