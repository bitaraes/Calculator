import React from 'react';
export default function DoubleBtn(props) {
    return (
        <button className="double-btn" value={props.value} onClick={props.onClick}>
            {props.value}
        </button>
    )
}
