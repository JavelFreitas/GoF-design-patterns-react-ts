import { useEffect, useState } from 'react';
import './App.css'
import SwitchText from './components/SwitchText'
import { useObserver } from './hooks/useObserver'

function App() {

  const [observer, setObserver] = useState(useObserver());
  console.log(observer.subscribers);

  return (
    <div className="App">
      <button onClick={() => observer.notifySubscribers()}>Observable change</button>
      <button onClick={() => observer.setChangeString('UEPAA')}>Change String</button>
      <SwitchText />
      <SwitchText observable={observer.subscribe} />
      <SwitchText />
      <SwitchText />
      <SwitchText observable={observer.subscribe} />
      <SwitchText />
      <SwitchText />
      <SwitchText />
      <SwitchText observable={observer.subscribe} />
      <SwitchText />
    </div>
  )
}

export default App
