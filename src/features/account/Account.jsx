import React, { useState } from 'react';
import './Account.css';

function Account() {
    //State: account balance
    const [balance, setBalance] = useState(0);

    //Action: deposit &#x20b9;10 - update account balance when deposit button is clicked
    function handleDeposit() {
        setBalance(balance + 10);
    }

    //View: show account balance and deposit button
    return (
        <div className="account">
            <h2>Account</h2>
            <p>Balance: &#x20b9;{balance}</p>
            <button onClick={handleDeposit}>Deposit  &#x20b9;10</button>
        </div>
    )
}

export default Account;