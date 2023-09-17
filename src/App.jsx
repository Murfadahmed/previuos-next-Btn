import { useState } from 'react';
import './App.css';

function App() {
  const [advise, setadvise] = useState(["yesterday is History","Tomorrow is Mystery","But today is a Gift","That is why it is called present...."])
  const [count, setcount] = useState(1)
  function previousFunc() {
    if (count > 1) {
      return setcount(count - 1)
    }
  }
  function nextFunc() {
    if (count <= 3 ) {
      return setcount(count + 1)
    }
  }
  return (
    <div className="App">
      <div className="box">
        <div className="number">
          {Array.from([1, 2, 3, 4], (N) => (
            <button style={{ backgroundColor: N <= count ? "cyan" : 'transparent' }}>{N}</button>
          ))}
        </div>
        <div className="content">
          <p>"{advise[count-1]}"</p>
        </div>
        <div className="btnDiv">
          {Array.from(["previous", "Next"], (B) => (
            <button onClick={B == "previous" ? previousFunc : nextFunc} className={B}>{B}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
