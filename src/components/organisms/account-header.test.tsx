import React from 'react';
import { render, screen } from '@testing-library/react';
import { AccountHeader } from './account-header';

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
  avatarUrl: 'https://placekitten.com/100/100',
  name: 'Test User',
  transactions: testTransactions as Transaction[],
  startingBalance: STARTING_BALANCE
}

describe('AccountHeader', () => {
  it('Should render the user name', () => {
    render(<AccountHeader {...props} />);

    expect(screen.getByText('Hi Test User!')).toBeInTheDocument();
  });

  it('Should render the user avatar', () => {
    render(<AccountHeader {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://placekitten.com/100/100')
  });

  it('Should render the user account balance', () => {
    render(<AccountHeader {...props} />);

    expect(screen.getByText('Account Balance')).toBeInTheDocument();
    expect(screen.getByText('$19.00')).toBeInTheDocument();
  });
});