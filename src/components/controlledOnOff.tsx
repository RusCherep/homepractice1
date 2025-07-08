type ControlledOnOffType = {
    isOn: boolean
    setIsOn: (value: boolean) => void
}

export const ControlledOnOff = ({isOn, setIsOn}: ControlledOnOffType) => {

    const buttonStyled = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block"
    }
    const onStyled = {
        backgroundColor: isOn ? "green" : "white",
    }
    const offStyled = {
        backgroundColor: isOn ? "white" : "red",
        margin: "2px"
    }
    const indicatorStyled = {
        width: "10px",
        height: "10px",
        backgroundColor: isOn ? "green" : "red",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block"
    }

    return (
        <div>
            <div style={{...onStyled, ...buttonStyled}} onClick={() => {
                setIsOn(true)
            }}>On
            </div>
            <div style={{...offStyled, ...buttonStyled}} onClick={() => {
                setIsOn(false)
            }}>Off
            </div>
            <div style={indicatorStyled}></div>
        </div>
    )
}