import { render, screen } from '@testing-library/react';
import { TransactionList } from './transaction-list';

import type { Transaction } from '../../types';

const STARTING_BALANCE = 20.75;
const testTransactions = [
  {
    merchant: 'Merchant 1',
    date: '2019-01-02',
    amount: 1.0,
    type: 'debit',
  },
  {
    merchant: 'Merchant 2',
    date: '2019-01-15',
    amount: 2.5,
    type: 'credit',
    details: 'merchant 2 credit',
  },
  {
    merchant: 'Merchant 3',
    date: '2019-01-16',
    amount: 3.25,
    type: 'debit',
  },
];

const props = {
  transactions: testTransactions as Transaction[],
  startingBalance: STARTING_BALANCE
}

describe('TransactionList', () => {
  it('should render an accessible header', () => {
    render(<TransactionList {...props} />);

    expect(screen.getByRole('heading', { name: 'Recent Transactions' })).toBeInTheDocument();
  });

  it('should render an accessible headings for tabular data', () => {
    render(<TransactionList {...props} />);

    expect(screen.getByRole('columnheader', { name: 'merchant' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'amount' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'date' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'balance after transaction' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'details' })).toBeInTheDocument();
  });

  it('should render all transactions', () => {
    render(<TransactionList {...props} />);

    expect(screen.getAllByRole('row').length).toBe(4) // including header row
  });

  it('should render correct balances after transactions', () => {
    render(<TransactionList {...props} />);

    const rows = screen.getAllByRole('row')
    expect(rows[1]).toHaveTextContent('$19.00')
    expect(rows[2]).toHaveTextContent('$22.25')
    expect(rows[3]).toHaveTextContent('$19.75')
  });
});