import React from 'react';

import './App.css';
// import {ButtonTemplate1} from "./components/ButtonTemplate";
import {OnOff} from "./components/OnOff";
import {UnControlledAccordion} from "./Accordion/UnControlledAccordion";

function App() {
  return (
    <div >

        <OnOff />

        <UnControlledAccordion title={"Accordion"} isCollapsed={true}/>



      {/*<ButtonTemplate1 isOn={true}/>
      <ButtonTemplate1 isOn={false}/>*/}
    </div>
  );
}

export default App;
