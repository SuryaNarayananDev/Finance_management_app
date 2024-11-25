import React from 'react';

const Header = ({ balance }) => (
    <header>
        <h1>Finance Tracker</h1>
        <h2>Balance: ₹{balance}</h2>
    </header>
);

export default Header;
