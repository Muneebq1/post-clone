// import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Head from './components/head'
import Left from './components/left'
import Right from './components/right'
import { useState } from "react"



function App() {
  const [isLit, setLit] = useState(true);
  const clickHandler = () => {
    setLit(!isLit)
  }
  return (
    <div className={`App ${(isLit) ? "lit" : "dark"}`}>

      <Head clickHandler={clickHandler} />
      <div className='flex'>
        <Left />
        <Content />
        <Right />
      </div>
    </div>
  );
}

export default App;
