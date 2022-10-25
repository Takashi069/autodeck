import './App.css';
import Header from './Components/Header';
import { useState,useEffect } from 'react';
import FloatingMenu from './Components/FloatingMenu';
import DriverDetails from './Components/DriversDetails';
import PopUp from './Components/PopUp';
import Navbar from './Components/Navbar';
import {AnimatePresence} from 'framer-motion'

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

function App() {
  const [toggleSearch, setToggleSearch] = useState(false)
  const [toggleCalc, setToggleCalc] = useState(false)
  const [toggleRate, setToggleRate] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  
  return (
    <div className="App font-sans">
      
      <AnimatePresence >
        {(toggleCalc || toggleRate) && <PopUp isCalc={toggleCalc} isRate={toggleRate} setToggleCalc={setToggleCalc} setRate={setToggleRate}/> }
      </AnimatePresence>
      {windowSize.innerWidth<=1000 &&  <Header toggleSearch={toggleSearch}/> }
      {
        windowSize.innerWidth>1000 && 
        <Navbar
        toggleSearch={toggleSearch} 
        setToggleSearch={setToggleSearch}
        toggleCalc={toggleCalc} 
        setToggleCalc={setToggleCalc}
        toggleRate={toggleRate} 
        setToggleRate={setToggleRate}
      />}
      <div className='h-[100vh] w-[100%]  flex flex-col items-center justify-center'>
        <DriverDetails/>
      </div>
      { 
        windowSize.innerWidth<=1000 && 
        <FloatingMenu 
          toggleSearch={toggleSearch} 
          setToggleSearch={setToggleSearch}
          toggleCalc={toggleCalc} 
          setToggleCalc={setToggleCalc}
          toggleRate={toggleRate} 
          setToggleRate={setToggleRate}
        /> }
    </div>
  );
}

export default App;
