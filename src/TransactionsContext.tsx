import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './Services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }
 
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}
  
interface TransactionsContextData {
    transactions: Transaction[];
    createTransection: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

useEffect(() => {
    api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
}, []);

function createTransection(transaction: TransactionInput){
    api.post('/transactions', transaction) 
}

return (
<TransactionsContext.Provider value={{transactions, createTransection }}>
{children}
</TransactionsContext.Provider>

);
}

