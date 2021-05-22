import { Container } from './styles';
import { useTransactions } from '../../hooks/Transactions';


const TransactionsTable = () => {
  const { transactions } = useTransactions();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>  
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>
                  {transaction.title}
                </td>
                <td 
                  className={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.value)}
                </td>
                <td>{transaction.value}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.created_at as Date))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

export { TransactionsTable };