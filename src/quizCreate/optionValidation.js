import React from 'react';

export default function OptValidation(props) {
    if (props.opt)
        if (props.optTouch || props.bool)
            if (props.opt.value.replace(/\s+/g, ' ').trim().length === 0) {
                return (
                    <div className="error">{props.message}</div>
                );
            }

    return <></>
}