
import { useEffect, useState } from 'react';
import './index.css';

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => { },[])

  const handleClickButton = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>React App</h1>
      <p>{count }</p>
      <button onClick={handleClickButton}>Click</button>
    </>
  );
};

export default App;
