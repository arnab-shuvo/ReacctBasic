import React from 'react';
import './Userinput.css';

const Userinput = props =>{
    const style = {
        border: '1px solid red'
    }
    return (
        <div style={style} className="userinput">
            <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    )
}

export default Userinput;