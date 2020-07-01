import React from 'react';
import he from 'he';
import './question.css';

export default function question(props) {

    let options = props.answers.map((option, index) => {

        if ((props.selected === he.decode(option)) && (props.correct !== he.decode(option)))
            return (
                <div className='questLabel redOpt' key={index + 1}>
                    <input type='radio' name='option' className='quizOpt' id={`opt${index + 1}`} value={he.decode(option)} disabled={true} />
                    <label htmlFor={`opt${index + 1}`}>{he.decode(option)}</label>
                </div>)
        if (props.correct === he.decode(option)) {
            return (
                <div className='questLabel greenOpt' key={index + 1}>
                    <input type='radio' name='option' className='quizOpt' id={`opt${index + 1}`} value={he.decode(option)} disabled={true} />
                    <label htmlFor={`opt${index + 1}`}>{he.decode(option)}</label>
                </div>
            )
        }
        else {
            return (
                <div className='questLabel breakOpt' key={index + 1}>
                    <input type='radio' name='option' className='quizOpt' id={`opt${index + 1}`} value={he.decode(option)} disabled={true} />
                    <label htmlFor={`opt${index + 1}`}>{he.decode(option)}</label>
                </div>
            )
        }

    })

    return (
        <div>
            <h3>{he.decode(props.question)}</h3>
            <div className='options'>
                {options}
            </div>
        </div>
    )
}