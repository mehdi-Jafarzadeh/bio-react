
import { createContext } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import MobNav from './components/Navbar/MobNav/MobNav';


export const langContext = createContext('fa');
export const langfContext = createContext('fa');

function App() {
  
  const [language, setlanguage] = useState('');
  const [mobile, setmobile] = useState(0);
  
  useEffect(() => {
      document.body.offsetWidth < 1200 ? setmobile(1) : setmobile(0) ;
  }, []);
  
  window.onresize = function(event) {
    document.body.offsetWidth < 1200 ? setmobile(1) : setmobile(0) ;
  }
  
  return (
    <div className="App">
      <langContext.Provider  value={language} >
      <langfContext.Provider  value={setlanguage} >

      { mobile ? <MobNav /> : <Navbar/> }
 
 <Landing/>

      </langfContext.Provider>
      </langContext.Provider>
    </div>
  );
}

export default App;
