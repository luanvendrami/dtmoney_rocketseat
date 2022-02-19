import Modal from 'react-modal';
import fecharImg from '../assents/x.svg';
import entradasImg from '../assents/Entradas.svg';
import saidaImg from '../assents/Saídas.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface NewTransactionModalprops{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalprops ){
const [type, setType] = useState('deposit');

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
               <Container>
                 <h2>Cadastrar Transação</h2>

                 <input 
                 placeholder='Titulo'
                  />

                 <input 
                 type='number'
                 placeholder='Valor'
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
                    onClick={() => { setType('withdram'); }}
                    isActive={type === 'withdram'}
                    activeColor="red"
                    >
                        <img src={saidaImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                 </TransactionTypeContainer>  
                 <input 
                 placeholder='Categoria'
                  />

                  <button type="submit">
                      Cadastrar
                  </button>
               </Container>
      </Modal>
    );
}