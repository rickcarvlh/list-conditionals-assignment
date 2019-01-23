import React from "react";

const char = (props) => {
    const styling = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    //props.character comes from render method
    return (
        <div style={styling} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;
