import React, { useSyncExternalStore } from 'react'
import { store } from '../configureStore/store'

const Balance = () => {
    const {balance} = useSyncExternalStore(store.subscribe, store.getState);
    return (
        <div>
            <h1>Iron Bank of Braavos</h1>
            <h2>Balance = {balance}</h2>
        </div>
    )
}

export default Balance