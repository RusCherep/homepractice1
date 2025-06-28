import React from 'react';

import './App.css';
import {ButtonTemplate1} from "./components/ButtonTemplate";

function App() {
  return (
    <div >
      <ButtonTemplate1 isOn={true}/>
      <ButtonTemplate1 isOn={false}/>
    </div>
  );
}

export default App;
