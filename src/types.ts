export interface AccountData {
  name: string;
  avatar: string;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  details?: string;
}
