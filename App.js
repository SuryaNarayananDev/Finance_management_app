import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

function App() {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    const fetchTransactions = async () => {
        const res = await axios.get('http://localhost:5000/api/transactions');
        setTransactions(res.data);
        calculateBalance(res.data);
    };

    const calculateBalance = (transactions) => {
        const total = transactions.reduce((acc, transaction) => {
            return transaction.type === 'income'
                ? acc + transaction.amount
                : acc - transaction.amount;
        }, 0);
        setBalance(total);
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <Header balance={balance} />
            <AddTransaction fetchTransactions={fetchTransactions} />
            <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} />
        </div>
    );
}

export default App;
