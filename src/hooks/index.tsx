import { TransactionsProvider } from './Transactions';

const Provider: React.FC = ({ children }) => {
  return (
    <TransactionsProvider>
      {children}
    </TransactionsProvider>
  );
};

export { Provider };