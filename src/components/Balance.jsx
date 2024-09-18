import React, { useSyncExternalStore } from 'react'
import { store } from '../configureStore/store'

const Balance = () => {
    const {balance} = useSyncExternalStore(store.subscribe, store.getState);
    return (
        <div className='text-center text-uppercase'>
            <h1 className='text-[gold] font-bold text-8xl'>Iron Bank of Braavos</h1>
            <h2 className='text-[firebrick] text-7xl'>Balance = {balance}</h2>
        </div>
    )
}

export default Balance