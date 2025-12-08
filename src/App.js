import logo from './logo.svg';
import BigButton from './components/Buttons/bigButton';
import SmallButton from './components/Buttons/smallButton';
import AnalysisYap from './components/Analysis_Yap/analysisYap';
import { FaPlus } from 'react-icons/fa'

import './App.css';

function App() {
  const handleAlert = () => {
    alert('Button was clicked!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <BigButton 
          onClick={handleAlert}
        >
          <FaPlus size={45}/>
          <p>Click me bruh!</p>
        </BigButton>
        <SmallButton 
          onClick={handleAlert}
        >
          Click Me to See an Alert
        </SmallButton>
        <AnalysisYap>
          <div>

          </div>
        </AnalysisYap>
      </header>
    </div>
  );
}

export default App;
