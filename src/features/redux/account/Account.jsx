import React from 'react';
import './Account.css';
import { useSelector, useDispatch } from 'react-redux';

function Account() {
    //State: account balance
    const balance = useSelector(state => state.balance);
    const dispatch = useDispatch();

    //Action: deposit &#x20b9;10 - update account balance when deposit button is clicked
    function handleDeposit() {
        dispatch({type: 'deposit', payload: 10});
    }

    //View: show account balance and deposit button
    return (
        <div className="redux_account">
            <h2>Account</h2>
            <p>Balance: &#x20b9;{balance}</p>
            <button onClick={handleDeposit}>Deposit  &#x20b9;10</button>
        </div>
    )
}

export {Account as ReduxAccount};