import React from 'react';

export default function BtnColumn(props) {
    return (
        <div className="btn-column" id={props.id}>
            {props.children}
        </div>
    )
}