import './App.css';
import Header from './Components/Header';
import { useState,useEffect } from 'react';
import FloatingMenu from './Components/FloatingMenu';
import DriverDetails from './Components/DriversDetails';
import PopUp from './Components/PopUp';
import Navbar from './Components/Navbar';
import Feedback from './Components/Feedback';
import {AnimatePresence} from 'framer-motion'
import useFetch from './Hooks/useFetch'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  const [driverInfo,setDriverInfo] = useState(null)
  const {data:temp } = useFetch("https://autodeck-database.herokuapp.com/driverDetails")
  
  useEffect(()=>{
    if(temp!==null){
      shuffleArray(temp)
      setDriverInfo(temp)

    }
  },[temp,driverInfo])

  const [toggleSearch, setToggleSearch] = useState(false)
  const [toggleCalc, setToggleCalc] = useState(false)
  const [toggleRate, setToggleRate] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [searchType,setSearchType] = useState("")
  const [searchData, setSearchData] = useState("")

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
        let filteredDriverList = []
        if(driverInfo!=null)
            filteredDriverList = driverInfo.filter((driver)=>{
            if(searchType === "Name")
                return driver.name.includes(searchData)
            else if(searchType === "Phone"){
                return driver.phoneNumber.includes(searchData)
            }
            else if(searchType === "NumberPlate")
                return driver["Number Plate"].includes(searchData)
            else
                return driver
            })
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div className="App font-sans">
            <AnimatePresence >
              {(toggleCalc || toggleRate) && <PopUp isCalc={toggleCalc} isRate={toggleRate} setToggleCalc={setToggleCalc} setRate={setToggleRate}/> }
            </AnimatePresence>
            {windowSize.innerWidth<=1023 &&  <Header toggleSearch={toggleSearch} setSearchType={setSearchType} searchType={searchType} searchData={searchData} setSearchData={setSearchData}/> }
            {
              windowSize.innerWidth>1023 && 
              <Navbar
              searchType={searchType}
              setSearchType={setSearchType}
              searchData={searchData}
              setSearchData={setSearchData}
              toggleSearch={toggleSearch} 
              setToggleSearch={setToggleSearch}
              toggleCalc={toggleCalc} 
              setToggleCalc={setToggleCalc}
              toggleRate={toggleRate} 
              setToggleRate={setToggleRate}
            />}
            <div className='h-[100vh] w-[100%] grid grid-cols-1 justify-items-center overflow-scroll scroll-smooth lg:pl-[280px]'>
              <DriverDetails driverInfo={filteredDriverList} searchType={searchType} searchData={searchData}/>
            </div>
            { 
              windowSize.innerWidth<=1023 && 
              <FloatingMenu 
                toggleSearch={toggleSearch} 
                setToggleSearch={setToggleSearch}
                toggleCalc={toggleCalc} 
                setToggleCalc={setToggleCalc}
                toggleRate={toggleRate} 
                setToggleRate={setToggleRate}
              /> }
          </div>
        } />
        <Route exact path="/contact" element={
          <Feedback />
        } />
      </Routes>
    </Router>
  );
}

export default App;
