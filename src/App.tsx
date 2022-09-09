import React, { useEffect, useMemo, useState } from 'react';
import {
  AccountHeader,
  ErrorState,
  TransactionList,
} from './components';
import { GlobalStyle } from './styles';
import styled from 'styled-components';

import type { AccountData } from './types';

const StyledLayout = styled.div`
  min-height: 100vh;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 4fr 8fr;
  }
`

function App() {
  // State
  const [data, setData] = useState<AccountData | Record<string, any>>({});
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasFetchError, setHasFetchError] = useState<boolean>(false);
  const { avatar, balance, name, transactions } = data;
  // Memoized values
  const transactionsListReady = useMemo(
    () => !isFetching && balance !== undefined && transactions,
    [isFetching, balance, transactions]
  );
  const accountHeaderReady = useMemo(
    () => !isFetching && name && avatar && transactionsListReady,
    [isFetching, name, avatar, transactionsListReady]
  );
  // Side effects
  useEffect(() => {
    async function fetchAccountData() {
      try {
        setIsFetching(true);
        const response = await fetch('http://localhost:3001/api/till');
        const data = await response.json();
        if (data) {
          setData(data);
          setIsFetching(false);
        }
      } catch {
        setHasFetchError(true);
      }
    }

    fetchAccountData();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      {hasFetchError && <ErrorState />}
      <StyledLayout>
        {accountHeaderReady && (
          <AccountHeader
            name={name}
            avatarUrl={avatar}
            startingBalance={balance as AccountData['balance']}
            transactions={transactions}
          />
        )}
        {transactionsListReady && (
          <TransactionList
            startingBalance={balance as AccountData['balance']}
            transactions={transactions as AccountData['transactions']}
          />
        )}
      </StyledLayout>
    </div>
  );
}

export default App;
