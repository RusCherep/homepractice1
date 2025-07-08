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
    accordionCollapsed: boolean
    onClick: (value: boolean) => void
}

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <h3 onClick={() => props.onClick(!props.accordionCollapsed)}>
            --- {props.title} ---
        </h3>
    )
}

type AccordionType = {
    title: string
    accordionCollapsed: boolean
    onClick: (value: boolean) => void
}

export const Accordion = (props: AccordionType) => {


    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} accordionCollapsed={props.accordionCollapsed}/>
            {!props.accordionCollapsed ? <AccordionBody/> : null}
        </div>
    )
}