import React, { Component } from 'react';
import Question from './question';
import { Link } from 'react-router-dom';


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
            finished: false
        }
    }

    questSub = (e) => {
        e.preventDefault()

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

    quizReset = () => {
        this.setState({
            current: 0,
            count: 0,
            selection: null,
            correct: null,
            answer: null,
            break: false,
            finished: false
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
                    <div className="buttonWrap">
                        <button type="button" className="yellowButton quizNav" onClick={this.quizReset}>Take quiz again!</button>
                        <Link to={'/existing-quizzes'} className="redButton quizNav">Take a different quiz</Link>
                    </div>
                </div>)

        if (this.state.break === true) {
            if (this.state.current === this.props.questions.length)
                return (<div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>{((this.state.correct) ? 'Correct' : 'Incorrect')}</h3>
                    <p>The answer was <b>{this.state.answer}</b></p>
                    <br />
                    <button type="button" className="yellowButton quizNav" onClick={e => this.setState({
                        finished: true
                    })}>See results</button>
                </div>)
            else
                return (<div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>{((this.state.correct) ? 'Correct' : 'Incorrect')}</h3>
                    <p>The answer was <b>{this.state.answer}</b></p>
                    <br />
                    <button type="button" className="yellowButton quizNav" onClick={this.nextQuest}>Next</button>
                </div>)

        }
        if (this.state.current === 0)
            return (
                <div className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <span>{this.props.description}</span>
                    <br />
                    <button type="button" className="yellowButton quizNav" onClick={this.begin}>Begin</button>
                </div>
            )
        else if (this.state.current <= this.props.questions.length)
            return (
                <form className="quizBox">
                    <h2 id="title">{this.props.title}</h2>
                    <h3>question {this.state.current}/{this.props.questions.length}</h3>
                    <Question question={this.props.questions[this.state.current - 1].question} answers={this.props.questions[this.state.current - 1].answers} radChange={this.radChange} />
                    <button type="submit" className="yellowButton quizNav" onClick={e => this.questSub(e)}>Submit</button>
                    <span>Score:{this.state.count}</span>
                </form>
            )
    }
}