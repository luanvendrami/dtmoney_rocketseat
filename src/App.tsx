import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header"
import { Dashboard } from "./Dashboard";
import { NewTransactionModal } from './NewTransactionModal';
import { useState } from 'react';

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  )
}
