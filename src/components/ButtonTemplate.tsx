type ButtonTemplateType = {
    isOn: boolean
}

type ColorCircleType={
    color:string
    size:number
}

const ColorCircle = ({ color, size}:ColorCircleType) => {
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
        display: "inline-block"
    };
    return <div style={circleStyle} />;
};

export const ButtonTemplate1 = (props: ButtonTemplateType) => {
    return (
        <div>
            <div>
                Active
            </div>
            {props.isOn && activeOn()}
            {!props.isOn && activeOff()}
        </div>
    );
};


const activeOn = () => {
    return (
        <div>
            <button style={{backgroundColor:"green"}}>On</button>
            <button>Off</button>
            <ColorCircle color={"green"} size={10}/>
        </div>
    )
}
const activeOff = () => {

    return (
        <div>
            <button >On</button>
            <button style={{backgroundColor:"red"}}>Off</button>
            <ColorCircle color={"red"} size={10}/>
        </div>

    )
}

