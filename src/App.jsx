import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Balance from './components/Balance'
import Operation from './components/Operation'

function App() {
  const [balance, setBalance] = useState(0);

  const deposit = sum => {
    setBalance(prevBalance => prevBalance + sum);
  }

  const withdraw = sum => {
    setBalance(prevBalance => prevBalance - sum < 0 ? prevBalance : prevBalance - sum);
  }

  return (
    <div>
      <Balance balance={balance} />
      <Operation deposit={deposit} withdraw={withdraw} />
    </div>
  )
}

export default App
