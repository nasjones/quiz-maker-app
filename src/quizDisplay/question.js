import React from 'react';
import './question.css';

export default function question(props) {
    return (
        <div>
            <h3>{props.question}</h3>
            <div className="options">
                <div className="questLabel">
                    <input type="radio" name="option" className="quizOpt" id="opt1" value={props.answers[0]} onChange={e => props.radChange(e)} />
                    <label htmlFor="opt1">{props.answers[0]}</label>
                </div>
                <div className="questLabel">
                    <input type="radio" name="option" className="quizOpt" id="opt2" value={props.answers[1]} onChange={e => props.radChange(e)} />
                    <label htmlFor="opt2">{props.answers[1]}</label>
                </div>
                <div className="questLabel">
                    <input type="radio" name="option" className="quizOpt" id="opt3" value={props.answers[2]} onChange={e => props.radChange(e)} />
                    <label htmlFor="opt3">{props.answers[2]}</label>
                </div>
                <div className="questLabel">
                    <input type="radio" name="option" className="quizOpt" id="opt4" value={props.answers[3]} onChange={e => props.radChange(e)} />
                    <label htmlFor="opt4">{props.answers[3]}</label>
                </div>
            </div>
        </div>
    )
}