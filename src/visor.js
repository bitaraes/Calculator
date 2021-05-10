import React from 'react';
export default function Visor(props) {
    return (
        <input type="text" className="visor" disabled="disabled" value={props.value}>
        </input>
    )
}
