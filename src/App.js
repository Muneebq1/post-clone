// import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Head from './components/head'

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [isLit, setLit] = useState(true);

  const clickHandler = () => {

    setLit(!isLit)
  }
  return (
    <div className={`App ${(isLit) ? "lit" : "dark"}`}>
      {/* <div className="icon"><FontAwesomeIcon icon={faMoon} onClick={clickHandler} /></div> */}
      <Head />
      <Content />
    </div>
  );
}

export default App;
