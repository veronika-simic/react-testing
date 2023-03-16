import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false)

  const newColor = color === 'red' ? 'blue' : 'red'
  return (
    <div>
      <button style={{backgroundColor: color}} onClick={() => setColor(newColor) } disabled={disabled}>Change to {newColor}</button>
      <input type='checkbox' onChange={(e) => setDisabled(e.target.checked)}></input>
    </div>
  );
}

export default App;
