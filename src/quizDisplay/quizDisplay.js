import React, { Component } from 'react';
import Quiz from './quiz';
import './quizDisplay.css';
import config from '../config';
import { Link } from 'react-router-dom'

export default class QuizDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: null,
            loaded: false,
            questions: []
        }
    }

    UNSAFE_componentWillMount() {
        //   window.globe = { quizStore, answerStore, questionStore }

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.REACT_APP_API_KEY}`
            }
        }
        Promise.all([
            fetch(config.ENDPOINT + '/quiz/key/' + this.props.match.params.quizId, options),
            fetch(config.ENDPOINT + '/questions/quiz/' + this.props.match.params.quizId, options)
        ]).then(([quizRes, questRes]) => {
            if (!quizRes.ok)
                return quizRes.json().then(e => Promise.reject(e))
            if (!questRes.ok)
                return questRes.json().then(e => Promise.reject(e))
            return Promise.all([quizRes.json(), questRes.json()])
        }).then(([quiz, questOut]) => {
            for (let i = 0; i < questOut.length; i++)
                questOut[i].answers = this.shuffle(questOut[i].answers)

            this.setState({
                quiz,
                questions: questOut,
                loaded: true
            })
        })

    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // componentDidMount() {
    //     // console.log(window.globe)
    //     // let quizInfo

    //     // let questions = window.globe.questionStore.filter(question => {
    //     //     return question.quizId.toString() === this.state.quizId
    //     // })

    //     // let answers = window.globe.answerStore.filter(answers => {
    //     //     return answers.quizId.toString() === this.state.quizId
    //     // })
    //     // console.log(questions)
    //     // this.setState({
    //     //     questions: questions,
    //     //     answers: answers
    //     // })
    // }

    render() {
        if (this.state.loaded)
            return (

                <div className="quizPage">
                    <div id="existHead">
                        <h1 className="cornerTitle" id="existCorner">QUIZ BOWL</h1>
                        <div className="buttonWrap">
                            <Link to={'/existing-quizzes'} className="homeNavExist yellowButton">GO BACK</Link>
                        </div>
                    </div>
                    <Quiz title={this.state.quiz.title} questions={this.state.questions} description={this.state.quiz.description} />
                </div>
            )
        else
            return (
                <h1>Loading...</h1>
            )
    }
}