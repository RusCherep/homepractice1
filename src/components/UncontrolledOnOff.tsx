import {useState} from "react";


export const UncontrolledOnOff = () => {
    let [on, setOn] = useState(false)

    const buttonStyled = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block"
    }
    const onStyled = {
        backgroundColor: on ? "green" : "white",
    }
    const offStyled = {
        backgroundColor: on ? "white" : "red",
        margin: "2px"

    }
    const indicatorStyled = {
        width: "10px",
        height: "10px",
        backgroundColor: on ? "green" : "red",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block"

    }

    return (
        <div>
            <div style={{...onStyled, ...buttonStyled}} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={{...offStyled, ...buttonStyled}} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyled}></div>
        </div>
    )
}