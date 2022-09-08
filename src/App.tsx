import React, { useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  GlobalStyle,
  Text,
  Transaction,
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
      const data = await fetch('https://mattclough.com/api/till-demo');
      console.log(data);
    }

    try {
      fetchAccountData();
    } catch {
      setHasFetchError(true);
    }
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      {hasFetchError && (
        'Something went wrong'
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
