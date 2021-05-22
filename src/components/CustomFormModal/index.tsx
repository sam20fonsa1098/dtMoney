import React, { useState, useCallback, FormEvent } from 'react';
import { Container, SecondaryContainer,RadioBox } from './styles';
import { CustomFormModalProps } from './interfaces';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/Transactions';

const CustomFormModal: React.FC<CustomFormModalProps> = ({handleOnChangeIsOpen}) => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const { handleOnAddTransaction } = useTransactions();

  const handleOnChangeType = useCallback((type: 'deposit' | 'withdraw') => {
    setType(type);
  }, []);

  const handleOnCreateNewTransaction = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    const data = {type, title, value, category};
    await handleOnAddTransaction(data);
    handleOnChangeIsOpen();
  }, [type, title, value, category, handleOnAddTransaction, handleOnChangeIsOpen]);

  return (
    <Container onSubmit={handleOnCreateNewTransaction}>
      <h2>Cadastrar transações</h2>
      <input 
        type="text" 
        placeholder="Título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}/>
      <input 
        type="text" 
        placeholder="Valor"
        inputMode="numeric"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}/>
      <SecondaryContainer>
        <RadioBox 
          type="button" 
          onClick={() => {handleOnChangeType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green">
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox 
          type="button"
          onClick={() => {handleOnChangeType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor="red">
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </SecondaryContainer>
      <input 
        type="text" 
        placeholder="Categoria" 
        value={category}
        onChange={(event) => setCategory(event.target.value)}/>
      <button type="submit">
        Cadastrar
      </button>
    </Container>
  );
}

export { CustomFormModal };

