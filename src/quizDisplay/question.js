import React from 'react';
import he from 'he'
import './question.css';

export default function question(props) {
    return (
        <div>
            <h3>{he.decode(props.question)}</h3>
            <div className='options'>
                <div className='questLabel'>
                    <input type='radio' name='option' className='quizOpt' id='opt1' value={he.decode(props.answers[0])} onChange={e => props.radChange(e)} />
                    <label htmlFor='opt1'>{he.decode(props.answers[0])}</label>
                </div>
                <div className='questLabel'>
                    <input type='radio' name='option' className='quizOpt' id='opt2' value={he.decode(props.answers[1])} onChange={e => props.radChange(e)} />
                    <label htmlFor='opt2'>{he.decode(props.answers[1])}</label>
                </div>
                <div className='questLabel'>
                    <input type='radio' name='option' className='quizOpt' id='opt3' value={he.decode(props.answers[2])} onChange={e => props.radChange(e)} />
                    <label htmlFor='opt3'>{he.decode(props.answers[2])}</label>
                </div>
                <div className='questLabel'>
                    <input type='radio' name='option' className='quizOpt' id='opt4' value={he.decode(props.answers[3])} onChange={e => props.radChange(e)} />
                    <label htmlFor='opt4'>{he.decode(props.answers[3])}</label>
                </div>
            </div>
        </div>
    )
}