import logo from './logo.svg';
import { useState } from 'react';
import BigButton from './components/Buttons/bigButton';
import SmallButton from './components/Buttons/smallButton';
import AnalysisYap from './components/Analysis_Yap/analysisYap';
import InputBox from './components/Input_Box/inputBox';
import { FaPlus } from 'react-icons/fa'

import './App.css';

function App() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [MUAC, setMUAC] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)


  
  const handleSubmit = async (e) => {
    e.preventDefault() // stop page refresh

    if (!age || !gender || !weight || !height || !MUAC) {
      alert('Please fill in all input fields')
      return
    }

    setLoading(true)

    console.log({
        age,
        gender,
        weight,
        height,
        MUAC
    })

    setAge('')
    setGender('')
    setWeight('')
    setHeight('')
    setMUAC('')


    try {
      const response = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          age: Number(age),
          gender,
          weight: Number(weight),
          height: Number(height),
          muac: Number(MUAC)
        })
      })

      if (!response.ok){
        throw new Error('Backend Error')
      }

      const results = await response.json()

      console.log("AI response: \n", results)

      setResult(results)


      setAge('')
      setGender('')
      setWeight('')
      setHeight('')
      setMUAC('')

    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again')
    } finally {
      setLoading(false)
    }
  }

  const handleAlert = () => {
    alert('Button was clicked!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
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
        <AnalysisYap 
          risk_level={result?.risk_level}
          summary={result?.summary}
          recommendation={result?.recommendation}>
        </AnalysisYap>
        
        <InputBox loading={loading}>
          <h3>Input Your Data</h3>
          <input type="number" placeholder="Age       (years)" value={age} min={0} max={100} onChange={(e) => setAge(e.target.value)}/>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
          <input type="number" placeholder="Weight      (kg)" value={weight} min={0} step="0.1" onChange={(e) => setWeight(e.target.value)}/>
          <input type="number" placeholder="Height       (cm)" value={height} min={0} onChange={(e) => setHeight(e.target.value)}/>
          <input type="number" placeholder="Mid-Upper Arm Circumference       (cm)" value={MUAC} min={0} onChange={(e) => setMUAC(e.target.value)}/>
        </InputBox>
      </header>
    </div>
  );
}

export default App;
