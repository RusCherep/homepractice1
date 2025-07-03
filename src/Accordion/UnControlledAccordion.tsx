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
}

const AccordionTitle = ({title}: AccordionTitle) => {
    return (
        <h3>
            --- {title} ---
        </h3>
    )
}

type UnControlledAccordionType = {
    title: string
}

export const UnControlledAccordion = (props: UnControlledAccordionType) => {

    const [collapsed, setCollapsed] = useState(true)


    return (
        <div onClick={() => {
            setCollapsed(!collapsed)
        }}>
            <AccordionTitle title={props.title}/>
            {!collapsed ? <AccordionBody/> : null}
        </div>
    )
}