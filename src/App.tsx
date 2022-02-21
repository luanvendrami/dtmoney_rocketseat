import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header"
import { Dashboard } from "./Components/Dashboard";
import { NewTransactionModal } from './Components/NewTransactionModal';
import { useState } from 'react';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
  setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal(){
  setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  )
}
