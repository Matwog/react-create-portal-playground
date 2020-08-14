import React, { useState, useEffect } from 'react';
import './App.css';
import { createPortal } from 'react-dom';

type Props = {
  progress: string
}
const ModalComponent = ({ progress }: Props) => {
  return (
    <div style={{ width: 500, height: 100, backgroundColor: 'gray' }}>
      Time {progress}
    </div>
  )
}


function App() {
  const [count, setCount] = useState<string>('')
  setInterval(() => {
    let time = new Date().toLocaleTimeString()
    setCount(time)
  }, 1000)

  const portal = createPortal(<ModalComponent progress={count} />, document.body)
  return (
    <div className="App">
      {/* {count} */}
      {portal}
      {/* <ModalComponent progress={count} /> */}
    </div>
  );
}












export default App;
