import './App.css';
import { useEffect, useState } from 'react';
import { CallUserAPI } from './APIs';
import UserInfo from './components/userdata';

function App() {
  const [usedata, setUserData] = useState(null);

  useEffect(() => {
    CallUserAPI().then(use => setUserData(use.results[0]));
  }, []);
  
  const refresh = () => {
    CallUserAPI().then(use => setUserData(use.results[0]));
  };

  return (
    <>
    <div className='App'>
      {usedata ? <UserInfo infoname={usedata} /> : <p>No data</p>}
    </div>
     <button onClick={refresh}>Refresh</button>
     </>
  );
}

export default App;
