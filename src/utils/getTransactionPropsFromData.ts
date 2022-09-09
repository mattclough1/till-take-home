import type { Transaction } from '../types';
import type { TransactionProps } from '../components';

/**
 * Takes API transaction data and maps it to props
 * to be used with Transaction components
 * adds `balanceAfterTransaction` and `dark` props
 */

export function getTransactionPropsFromData(
  transactions: Transaction[],
  startingBalance: number
): TransactionProps[] {
  // Calculate balance after transaction
  let currentBalance = startingBalance;
  const transactionsWithCurrentBalance = transactions.map((transaction) => {
    if (transaction.type === 'credit') {
      currentBalance += transaction.amount;
    } else {
      currentBalance -= transaction.amount;
    }
    return { ...transaction, balanceAfterTransaction: currentBalance };
  });

  // Display transactions in reverse chronological order. This assumes an API response with transactions in chronological order
  const reversedTransactions = [...transactionsWithCurrentBalance];
  reversedTransactions.reverse();

  // Set "dark" prop for transaction list display
  return reversedTransactions.map((transaction, index) => ({
    ...transaction,
    dark: index % 2 !== 0,
  }));
}
