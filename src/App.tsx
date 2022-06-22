import { memo, useEffect, useState } from 'react';
import './App.css'
import Calendar from './components/Calendar';
import SwitchText from './components/SwitchText'
import { useObserver } from './hooks/useObserver'
import { buildMonth } from './utils/calendar';

function App() {

  // const [observer, setObserver] = useState(useObserver());

  return (
    <div className="App">
      <Calendar dateDisplayed={new Date(2022, 2, 1)} />
      {/* <button onClick={() => observer.notifySubscribers()}>Observable change</button>
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
      <SwitchText /> */}


    </div>
  )
}

export default memo(App)
