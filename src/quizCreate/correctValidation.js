import React from 'react';

export default function CorrectValidation(props) {

    if (props.bool)
        if (props.sel === undefined) {
            return (
                <div className="error">{props.message}</div>
            );
        }

    return <></>
}