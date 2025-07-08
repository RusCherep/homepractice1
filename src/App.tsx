import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UnControlledAccordion} from "./UncontrolledAccordion/UnControlledAccordion";
import {Accordion} from "./Accordion/Accordion";
import {ControlledOnOff} from "./components/controlledOnOff";


function App() {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [buttonISOn, setButtonISOn] = useState(false)


    return (
        <div>
            <UncontrolledOnOff/>

            <ControlledOnOff isOn={buttonISOn} setIsOn={setButtonISOn}/>

            <UnControlledAccordion title={"UncontrolledAccordion"}/>

            <Accordion title={"Accordion"} onClick={setAccordionCollapsed} accordionCollapsed={accordionCollapsed}/>
        </div>
    );
}

export default App;
