import React from 'react';
import axios from 'axios';

const TransactionList = ({ transactions, fetchTransactions }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/transactions/${id}`);
        fetchTransactions();
    };

    return (
        <ul>
            {transactions.map((transaction) => (
                <li key={transaction._id}>
                    {transaction.description} - ₹{transaction.amount} ({transaction.type})
                    <button onClick={() => handleDelete(transaction._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;
