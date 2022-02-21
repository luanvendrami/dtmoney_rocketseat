import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import { FormEvent, useState } from 'react';

import fecharImg from '../../assents/x.svg';
import entradasImg from '../../assents/Entradas.svg';
import saidaImg from '../../assents/Saídas.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalprops{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalprops ){
const { createTransection } = useTransactions();
const [title, setTitle] = useState('');
const [amount, setAmount] = useState(0);
const [category, setCategory] = useState('');
const [type, setType] = useState('deposit');

async function handleCreateNewTransaction(event:  FormEvent){
event.preventDefault();

await createTransection({
    title,
    amount,
    category,
    type,
})

setTitle('');
setAmount(0);
setCategory('');
setType('');
onRequestClose();
}

    return (
        <Modal 
             isOpen={isOpen} 
             onRequestClose={onRequestClose}
             overlayClassName="react-modal-overlay"
             className="react-modal-content"
             >
                 <button 
                 type="button" 
                 onClick={onRequestClose} 
                 className="react-modal-close"
                 >
                    <img src={fecharImg} alt="Fechar Modal" />
                 </button>
               <Container onSubmit={handleCreateNewTransaction}>
                 <h2>Cadastrar Transação</h2>

                 <input 
                 placeholder='Titulo'
                 value={title}
                 onChange= {event => setTitle(event.target.value)}
                  />

                 <input 
                 type='number'
                 placeholder='Valor'
                 value={amount}
                 onChange= {event => setAmount(Number(event.target.value))}
                  />

                 <TransactionTypeContainer>
                    <RadioBox 
                    type="button"                         
                    onClick={() => { setType('deposit'); }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={entradasImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                    type="button"
                    onClick={() => { setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={saidaImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                 </TransactionTypeContainer>  
                 <input 
                 placeholder='Categoria'
                 value={category}
                 onChange= {event => setCategory(event.target.value)}
                  />

                  <button type="submit">
                      Cadastrar
                  </button>
               </Container>
      </Modal>
    );
}