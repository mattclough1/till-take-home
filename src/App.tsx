import React from 'react';
import { Avatar, GlobalStyle, Text, Transaction, TransactionList } from './components'
import data from './transactions.json';

interface TransactionData {
  merchant: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  details?: string;
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TransactionList>
        {(data.transactions as TransactionData[]).map((transactionData: TransactionData) => <Transaction {...transactionData} />)}
      </TransactionList>
    </div>
  );
}

export default App;
