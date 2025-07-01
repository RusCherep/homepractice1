
const AccordionBody=()=>{
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
type AccordionTitle = {
    title:string
}

const AccordionTitle =({title}:AccordionTitle)=>{
    return(
        <h3>
            --- {title} ---
        </h3>
    )
}

type UnControlledAccordionType ={
    title:string
    isCollapsed:boolean
}

export const UnControlledAccordion = (props:UnControlledAccordionType) => {

    const collapsed = false

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {props.isCollapsed && <AccordionBody/>}
        </div>
    )
}