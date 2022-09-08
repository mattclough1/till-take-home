import { getTransactionPropsFromData } from './getTransactionPropsFromData';

import type { Transaction } from '../types';

const STARTING_BALANCE = 20.75;
const testData = [
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

describe('getTransactionPropsFromData', () => {
  it('should take transaction API data and a starting balance, and return an array of props with added props "balanceAfterTransaction" and "dark"', () => {
    expect(
      getTransactionPropsFromData(testData as Transaction[], STARTING_BALANCE)
    ).toEqual([
      {
        merchant: 'Merchant 3',
        date: '2019-01-16',
        amount: 3.25,
        type: 'debit',
        balanceAfterTransaction: 19.0,
        dark: false,
      },
      {
        merchant: 'Merchant 2',
        date: '2019-01-15',
        amount: 2.5,
        type: 'credit',
        details: 'merchant 2 credit',
        balanceAfterTransaction: 22.25,
        dark: true,
      },
      {
        merchant: 'Merchant 1',
        date: '2019-01-02',
        amount: 1.0,
        type: 'debit',
        balanceAfterTransaction: 19.75,
        dark: false,
      },
    ]);
  });
});
