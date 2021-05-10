import React from 'react';
export default function NumberBtn(props) {
    return (
        <button className="number-btn" value={props.value} onClick={props.onClick}>
            {props.value}
        </button>
    )
}
