import React, { useState } from 'react'
import { store } from '../configureStore/store';
import { deposit, withdraw } from '../actions/accountAction';

const Operation = () => {
    const [sum, setSum] = useState(1);
    return (
        <div>
            <button onClick={() => store.dispatch(withdraw(sum))}>Withdraw</button>
            <input type='number' value={sum} onChange={e => setSum(+e.target.value)} />
            <button onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div>
    )
}

export default Operation