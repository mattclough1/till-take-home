import React, { useEffect, useMemo, useState } from 'react';
import {
  ErrorState,
  GlobalStyle,
  TransactionList,
} from './components';

import type { AccountData } from './types';

function App() {
  // State
  const [data, setData] = useState<AccountData | undefined>(undefined);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasFetchError, setHasFetchError] = useState<boolean>(false);
  // Memoized values
  const transactionsListReady = useMemo(
    () => !isFetching && data?.balance !== undefined && data?.transactions,
    [isFetching, data]
  );
  // Side effects
  useEffect(() => {
    async function fetchAccountData() {
      try {
        setIsFetching(true);
        const response = await fetch('http://localhost:3001/api/till');
        const data = await response.json();
        if (data) {
          setTimeout(() => {
            setData(data);
            setIsFetching(false);
          }, 2000)
        }
      } catch {
        setHasFetchError(true);
      }
    }

    fetchAccountData();
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      {hasFetchError && (
        <ErrorState />
      )}
      {transactionsListReady && (
        <TransactionList
          startingBalance={data?.balance as AccountData['balance']}
          transactions={data?.transactions as AccountData['transactions']}
        />
      )}
    </div>
  );
}

export default App;
