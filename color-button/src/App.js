import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false)

  const newColor = color === 'red' ? 'blue' : 'red'
  return (
    <div>
      <button style={{backgroundColor: disabled ? 'gray' : color}} onClick={() => setColor(newColor) } disabled={disabled}>Change to {newColor}</button>
      <input type='checkbox' id="disable-button" onChange={(e) => setDisabled(e.target.checked)}/>
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
