import './App.css';
import {useState} from "react"
import TextInputWithFocusButton from "./Ref"

function App() {
  let [count, updateCount] = useState(100)
  // let count = useState(100)[0]
  // let updateCount = useState(100)[1]
  // setInterval(() => {
  //   count = count + 10;
  //   updateCount(count);
  // }, 1000)

  const increase = () => {
    if (count < 200) {
      count = count + 10;
      updateCount(count)
    } else {
      alert("Oshirishning iloji yo'q!")
    }
  }

  const decrease = () => {
    if (count > 0) {
      count = count - 10;
      updateCount(count)
    } else {
      alert("Kamaytirishning iloji yo'q!")
    }
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>Oshirish</button>
      <button onClick={decrease}>Kamaytirish</button>
      <br />
      <TextInputWithFocusButton increase={increase} sharedCount={count}/>
    </div>
  );
}

export default App;
