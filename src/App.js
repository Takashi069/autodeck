import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import FloatingMenu from './Components/FloatingMenu';
import DriverDetails from './Components/DriversDetails';
import PopUp from './Components/PopUp';
import {AnimatePresence} from 'framer-motion'

function App() {
  const [toggleSearch, setToggleSearch] = useState(false)
  const [toggleCalc, setToggleCalc] = useState(false)
  const [toggleRate, setToggleRate] = useState(false)
  
  
  return (
    <div className="App font-sans">

      <AnimatePresence >
        {(toggleCalc || toggleRate) && <PopUp isCalc={toggleCalc} isRate={toggleRate} setToggleCalc={setToggleCalc} setRate={setToggleRate}/> }
      </AnimatePresence>
      <Header toggleSearch={toggleSearch}/>
      <div className='h-[80vh] w-[100%] flex flex-col items-center justify-center'>
        <DriverDetails/>
      </div>
      <FloatingMenu 
        toggleSearch={toggleSearch} 
        setToggleSearch={setToggleSearch}
        toggleCalc={toggleCalc} 
        setToggleCalc={setToggleCalc}
        toggleRate={toggleRate} 
        setToggleRate={setToggleRate}
      />
    </div>
  );
}

export default App;
