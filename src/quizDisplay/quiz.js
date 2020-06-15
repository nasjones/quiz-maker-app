import React, { Component } from 'react';
import Question from './question'

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            count: 0,
            selection: null,
            correct: null,
            answer: null,
            break: false,
            quizEnd: false
        }
    }

    questSub = (e) => {
        e.preventDefault()
        console.log(this.props)

        if (this.state.selection === this.state.answer) {
            this.setState({
                correct: true,
                count: this.state.count + 1
            })
        }
        else {
            this.setState({
                correct: false
            })
        }
        this.setState({
            break: true
        })
        // if (this.state.current < this.props.questions.length) {
        //     this.setState({
        //         current: this.state.current + 1
        //     })
        // }
    }

    radChange = (e) => {
        console.log(e.target.value)
        this.setState({
            selection: e.target.value
        })
    }

    begin = () => {
        this.setState({
            current: this.state.current + 1,
            answer: this.props.questions[0].correct
        })
    }

    nextQuest = () => {
        this.setState({
            current: this.state.current + 1,
            answer: this.props.questions[this.state.current].correct,
            break: false,
            correct: null,

        })
    }



    render() {
        if (this.state.finished === true)
            return (
                <div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>Your score was:</h3>
                    <h3><b>{this.state.count}/{this.props.questions.length}</b></h3>
                    <br />
                    <button type="button" className="quizButton" onClick={this.nextQuest}>next</button>
                </div>)

        if (this.state.break === true) {
            if (this.state.current === this.props.questions.length)
                return (<div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>{((this.state.correct) ? 'Correct' : 'Incorrect')}</h3>
                    <p>The answer was <b>{this.state.answer}</b></p>
                    <br />
                    <button type="button" className="quizButton" onClick={e => this.setState({
                        finished: true
                    })}>see results</button>
                </div>)
            else
                return (<div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>{((this.state.correct) ? 'Correct' : 'Incorrect')}</h3>
                    <p>The answer was <b>{this.state.answer}</b></p>
                    <br />
                    <button type="button" className="quizButton" onClick={this.nextQuest}>next</button>
                </div>)

        }
        if (this.state.current === 0)
            return (
                <div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <br />
                    <button type="button" className="quizButton" onClick={this.begin}>Begin</button>
                </div>
            )
        else if (this.state.current <= this.props.questions.length)
            return (
                <form className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>question {this.state.current}/{this.props.questions.length}</h3>
                    <Question question={this.props.questions[this.state.current - 1].question} answers={this.props.questions[this.state.current - 1].answers} radChange={this.radChange} />
                    <button type="submit" className="quizButton" onClick={e => this.questSub(e)}>Submit</button>
                    <span>Score:{this.state.count}</span>
                </form>
            )
    }
}