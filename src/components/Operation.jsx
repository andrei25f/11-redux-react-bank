import React, { useState } from 'react'
import { store } from '../configureStore/store';
import { deposit, withdraw } from '../actions/accountAction';

const Operation = () => {
    const [sum, setSum] = useState(1);
    return (
        <div className='flex justify-center'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg text-lg py-2 px-4'
             onClick={() => store.dispatch(withdraw(sum))}>Withdraw</button>
            <input className='text-center border rounded-lg'
             type='number' value={sum} onChange={e => setSum(+e.target.value)} />
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg text-lg py-2 px-4'
             onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div>
    )
}

export default Operation