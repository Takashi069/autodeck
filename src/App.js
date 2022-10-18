import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import FloatingMenu from './Components/FloatingMenu';

function App() {
  const [toggleSearch, setToggleSearch] = useState(false)

  return (
    <div className="App">
      <Header toggleSearch={toggleSearch}/>
      <FloatingMenu 
        toggleSearch={toggleSearch} 
        setToggleSearch={setToggleSearch}
      />
    </div>
  );
}

export default App;
