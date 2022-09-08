import React from 'react';
import { render, screen } from '@testing-library/react';
import { Transaction } from './transaction';

import type { Transaction as TransactionType } from '../../types';

const props = {
  amount: 2.5,
  balanceAfterTransaction: 15.75,
  dark: true,
  date: '2019-01-15',
  details: 'merchant 2 credit',
  merchant: 'Merchant 2',
  type: 'debit' as TransactionType['type'],
};

describe('Transaction', () => {
  render(<Transaction {...props} />);

  it('should render all relevant details from transaction data', () => {
    expect(screen.getByText('Merchant 2')).toBeInTheDocument();
    expect(screen.getByText('-$2.50')).toBeInTheDocument();
    expect(screen.getByText('Jan 15, 2019')).toBeInTheDocument();
    expect(screen.getByText('merchant 2 credit')).toBeInTheDocument();
  })
});