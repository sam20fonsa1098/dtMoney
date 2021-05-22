import { useCallback, useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { CustomModal } from './components/CustomModal';
import { CustomFormModal } from './components/CustomFormModal';
import { Provider } from './hooks';

Modal.setAppElement('#root');

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOnChangeNewTransaction = useCallback(() => {
    setIsNewTransactionModalOpen((prevState) => !prevState);
  }, []);

  return (
    <Provider>
      <Header onOpenNewTransactionModal={handleOnChangeNewTransaction}/>
      <Dashboard/>
      <CustomModal 
        isOpen={isNewTransactionModalOpen} 
        handleOnChangeIsOpen={handleOnChangeNewTransaction} >
        <CustomFormModal handleOnChangeIsOpen={handleOnChangeNewTransaction} />
      </CustomModal>
      <GlobalStyle/>
    </Provider>
  );
}

export { App };
