export interface Transaction {
  title: string;
  value: number;
  category: string;
  type: 'deposit' | 'withdraw';
  created_at?: Date;
  id?: string;
}

export interface TransactionsProps {
  transactions: Array<Transaction>;
  handleOnAddTransaction(transaction: Transaction): void;
  income: number;
  outcome: number;
  total: number;
}