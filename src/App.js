import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function MyApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter
        </p>
        <MyButton />
      </header>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickDecrement() {
    setCount(count - 1);
  }

  return (
    <div className='row'>
      <button className='btn btn-primary mb-3' onClick={handleClick}>
        Increment {count}
      </button>
      <button className='btn btn-primary' onClick={handleClickDecrement}>
        Decrement {count}
      </button>
    </div>
  );
}
