import React, { Component } from 'react';
import ItemValidation from './re-used/itemValidation';
import CorrectValidation from './re-used/correctValidation';
import Option from './re-used/option'
import './question.css';


export default class Question extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: [],
            optTouched: [],
            questTouched: []
        }
    }

    radChange = (i, j, targ) => {
        let temp = this.state.selected
        temp[i] = j
        this.setState({
            selected: temp
        })

        this.props.corChange(i, targ)
    }

    optTouchTrue = (i, j) => {
        let tempTouch = this.state.optTouched

        let tempArrQ = tempTouch[i]

        if (tempArrQ === undefined)
            tempArrQ = []

        tempArrQ[j] = true
        tempTouch[i] = tempArrQ

    }

    questTouchTrue = (i) => {
        let tempTouch = this.state.questTouched
        tempTouch[i] = true

        this.setState({
            questTouched: tempTouch
        })
    }

    optChangeHandle = (i, j, val) => {
        this.props.ansChange(i, j, val, j === this.state.selected[i]);
        if (this.state.selected[i] === j)
            this.props.corChange(i, val)
        this.optTouchTrue(i, j)
    }

    questChangeHandle = (i, val) => {
        this.props.questChange(i, val)
        this.questTouchTrue(i)
    }

    optTouch = (i, j, val) => {
        if (this.state.optTouched[i] !== undefined
            && this.isEmpty(val))
            return this.state.optTouched[i][j]

        if (val) {
            if (val.value.replace(/\s+/g, ' ').trim().length === 0
                && this.props.bool === true)
                return true
        }
        return false
    }

    questTouch = (i, val) => {
        if (this.state.questTouched[i] !== undefined
            && (val.value.replace(/\s+/g, ' ').trim().length === 0))
            return true
        return false
    }

    isEmpty(input) {
        if (input)
            return (input.value.replace(/\s+/g, ' ').trim().length === 0)
        return true
    }

    retainAns(i, j) {
        if (this.props.values)
            if (this.props.values[i])
                if (this.props.values[i].hasOwnProperty('answers'))
                    if (this.props.values[i].answers[j])
                        return this.props.values[i].answers[j]
    }

    retainQuests(i) {
        if (this.props.values)
            if (this.props.values[i])
                if (this.props.values[i].hasOwnProperty('question'))
                    return this.props.values[i].question
    }

    question() {
        let out = []
        for (let i = 0; i < this.props.count; i++) {
            let options = []
            for (let j = 0; j < 4; j++) {
                options.push(
                    <Option key={`option${j + 1}`}
                        optId={`Q${i + 1}option${j + 1}`}
                        radId={`Q${i + 1}radOpt${j + 1}`}
                        inputName={`Quest${i + 1}rad`}
                        bool={this.props.bool}
                        optNum={j}
                        questNum={i}
                        retainAnswer={this.retainAns(i, j)}
                        optTouch={this.optTouch}
                        optChangeHandle={this.optChangeHandle}
                        radChange={this.radChange}
                    />
                )
            }
            out.push(
                <div key={i}>
                    <h3>Question {i + 1}</h3>
                    <input type='text' className='question'
                        id={`question${i + 1}`}
                        defaultValue={this.retainQuests(i)}
                        onChange={e => this.questChangeHandle(i, e.target.value)}
                    />
                    {<ItemValidation message={'Please enter a valid question'}
                        item={document.getElementById(`question${i + 1}`)}
                        itemTouch={this.questTouch(i, document.getElementById(`question${i + 1}`))}
                        bool={this.props.bool}
                    />}
                    <h5>Answer choices</h5>
                    {<CorrectValidation message={'Please choose which option is correct'}
                        bool={this.props.bool}
                        sel={this.state.selected[i]}
                    />}
                    {options}
                    <hr />
                </div>
            )
        }
        return out
    }

    componentDidUpdate() {
        let qTemp = this.state.questTouched
        qTemp.length = this.props.count
        let optTemp = this.state.optTouched
        optTemp.length = this.props.count
        let selTemp = this.state.selected
        selTemp.length = this.props.count
    }

    render() {
        return (
            <div>
                {this.question()}
            </div>
        )
    }
}