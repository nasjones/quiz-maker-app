import React from 'react';

export default function ItemValidation(props) {
    if (props.item)
        if (props.itemTouch || props.bool)
            if (props.item.value.replace(/\s+/g, ' ').trim().length === 0) {
                return (
                    <div className='error'>{props.message}</div>
                );
            }

    return <></>
}