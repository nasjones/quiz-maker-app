import React from 'react';

export default function QuestValidation(props) {
    if (props.quest)
        if (props.questTouch || props.bool)
            if (props.quest.value.replace(/\s+/g, ' ').trim().length === 0) {
                return (
                    <div className='error'>{props.message}</div>
                );
            }

    return <></>
}