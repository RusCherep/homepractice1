import {useState} from "react";

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
type AccordionTitle = {
    title: string
    onClick: ()=>void
}

const AccordionTitle = (props:AccordionTitle) => {
    return (
        <h3 onClick = {props.onClick}>
            --- {props.title} ---
        </h3>
    )
}

type UnControlledAccordionType = {
    title: string
}

export const UnControlledAccordion = (props: UnControlledAccordionType) => {

    const [collapsed, setCollapsed] = useState(true)


    return (
        <div >
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed ? <AccordionBody/> : null}
        </div>
    )
}