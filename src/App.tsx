import React from 'react';

import './App.css';
import {ButtonTemplate1} from "./components/ButtonTemplate";
import {OnOff} from "./components/OnOff";

function App() {
  return (
    <div >

        <OnOff />

      {/*<ButtonTemplate1 isOn={true}/>
      <ButtonTemplate1 isOn={false}/>*/}
    </div>
  );
}

export default App;
