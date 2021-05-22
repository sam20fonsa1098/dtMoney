import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { HeaderProps } from './interfaces';


const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
      
    </Container>
  );
};

export { Header };