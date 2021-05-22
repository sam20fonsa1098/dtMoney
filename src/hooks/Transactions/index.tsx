import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { Transaction,  TransactionsProps} from './interfaces';
import { customAxios } from '../../services/api';

const TransactionsContext = createContext<TransactionsProps>({} as TransactionsProps);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  const handleOnLoadTransactions = useCallback(async () => {
    try {
      const response = await customAxios.get<{transactions: Array<Transaction>}>('api/transactions');
      setTransactions(response.data.transactions);
    } catch(err) {
      console.log(err);
    }
  }, []);

  const handleOnAddTransaction = useCallback(async (transaction: Transaction) => {
    try {
      await customAxios.post('api/transactions', transaction);
      await handleOnLoadTransactions();
    } catch(err) {
      console.log(err);
    }
  }, [handleOnLoadTransactions]);

  const income = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'deposit') {
        return acc + transaction.value;
      }
      return acc;
    }, 0)
  }, [transactions]);

  const outcome = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'withdraw') {
        return acc + transaction.value;
      }
      return acc;
    }, 0)
  }, [transactions]);

  const total = useMemo(() => {
    return income - outcome;
  }, [income, outcome]);

  useEffect(() => {
    handleOnLoadTransactions();
  }, [handleOnLoadTransactions]);

  return (
    <TransactionsContext.Provider 
      value={{
        transactions, 
        handleOnAddTransaction,
        income,
        outcome,
        total}}>
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactions = (): TransactionsProps => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error('transactionsContext needs to be inside TransactionsProvider');
  }
  return context;
};

export { useTransactions, TransactionsProvider }