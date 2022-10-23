import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import FloatingMenu from './Components/FloatingMenu';
import DriverDetails from './Components/DriversDetails';

function App() {
  const [toggleSearch, setToggleSearch] = useState(false)

  
  
  return (
    <div className="App font-sans">
      <Header toggleSearch={toggleSearch}/>
      <div className='h-[80vh] w-[100%] flex flex-col items-center justify-center'>
        <DriverDetails/>
      </div>
      <FloatingMenu 
        toggleSearch={toggleSearch} 
        setToggleSearch={setToggleSearch}
      />
    </div>
  );
}

export default App;
