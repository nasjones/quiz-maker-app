import React, { Component } from 'react';
import OptValidation from './optionValidation';

export default class Option extends Component {
    render() {
        return (
            <div className='choiceWrap'>
                <label htmlFor={this.props.optId} className='option'>
                    option {(this.props.optNum + 1)}
                </label>
                <br />
                <input type='text' className='optionInput'
                    id={this.props.optId}
                    defaultValue={this.props.retainAnswer}
                    onChange={e => this.props.optChangeHandle(this.props.questNum, this.props.optNum, e.target.value)}
                />
                {<OptValidation message={'Please enter a valid option'}
                    opt={document.getElementById(this.props.optId)}
                    optTouch={(this.props.optTouch(this.props.questNum, this.props.optNum, document.getElementById(this.props.optId)))}
                    bool={this.props.bool}
                />}
                <br />
                <input type='radio' className='radOpt'
                    id={this.props.radId}
                    name={this.props.inputName}
                    onChange={e => this.props.radChange(this.props.questNum, this.props.optNum, document.getElementById(this.props.optId).value)}
                />
                <label htmlFor={this.props.radId} className='option'>
                    Correct answer:
                        </label>
            </div>
        )
    }
}